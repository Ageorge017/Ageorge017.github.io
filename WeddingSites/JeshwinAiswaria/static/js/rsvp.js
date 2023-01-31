var url="https://script.google.com/macros/s/AKfycbwKvRG8YxJQoiFYhxp4E1AQoujzlxyOAoSPnWkTKc176pEQwPSU/exec";
var submitErrorVisible = false;
var fuse;
var options = {
    shouldSort: true,
    tokenize: true,
    matchAllTokens: true,
    findAllMatches: true,
    threshold: 0.2,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    keys: [
        "person1",
        "person2",
        "person3",
        "person4",
        "person5",
        "person6"
    ]  
};
$(document).keypress(
  function(event){
    if (event.which == '13') {
      event.preventDefault();
    }
});
$.fn.serializeObject = function()
{
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};
$(document).ready(function(){
    $('#loader').hide();
    GetGuestList();
});
$('#submitName').click(function(){
    var name = $('#name').val().trim();
    CheckListForName(name);
});


CheckListForName = (name) =>{
    if(!name){
        console.error("Name field cannot be blank");
        displayError("<strong>Error!</strong> Please enter your first and last name.","alert-danger");
    }
    else{
        if(submitErrorVisible == true){
            performDOMAction(`hide`,`#submitError`);
            submitErrorVisible = false;
        }
        searchName(name);
    }
};
GetGuestList = () =>{
    $.ajax({
        type: "GET",
        url: "static/guestlist.json",
        dataType: "json",
        success: function(data){
            fuse = new Fuse(data, options);
        }
    })
};
searchName = (name) =>{
    enableLoader(true);  
    var group = fuse.search(name);
    enableLoader(false);

    if(group.length<1){
        displayError("<strong>Error!</strong> I could not find you name. Type your name exactly how it appears on the invitation.","alert-danger");
    }
    else{
        if(group.length > 3){
            displayError("<strong>Error!</strong> I found too many matches! Please type out your name as it appears on your invitation.", "alert-danger");
        }
        else if(group.length >1 && group.length<=3){
            performDOMAction(`slideup`, `#search`, 400);
            var duplicates = `<p>Here are the matches I found. Which one are you?</p>`;
            for(var i in group){
                duplicates+=`<a class="col-sm-4 gla_anim_box grid-item bridesmaids" style="background:rgba(0,0,0,0.2);" id="thisGroup" value="`+i+`">
                                <p style="cursor:pointer;">${group[i].person1}<br>${group[i].person2}<br>${group[i].person3}<br>${group[i].person4}<br>${group[i].person5}<br>${group[i].person6}</p>
                            </a>`;
            };
            performDOMAction(`html`, `#rsvp`, duplicates);
            performDOMAction(`slidedown`, `#thisGroup`, 400);

            $('#rsvp').on("click",'#thisGroup',function(){
                performDOMAction(`slideup`, `#rsvp`, 400);
                nameFound(group[$(this).attr("value")]);
            })
        }
        else{
            performDOMAction(`slideup`, `#search`, 400);
            nameFound(group[0]);
        }
    }  
};
nameFound = (group) => {
    enableLoader(true);   
    $.ajax({
        url: url,
        method: "GET",
        dataType: "json",
        data: {getGroup: group.groupId},
        success: function(data){
            enableLoader(false);     
            if(data[0]==""){
                createForm(group);
            }
            else{
                showRsvp(data);
            }
        }
    }) 
};
createForm = (group) => {
    var rsvpForm = ``;
    for(var key in group){
        if(key!="groupId"&&key!="writeIn"&&group[key]!=""){
            rsvpForm += `<div id="${key}" class="row">
                            <div class="col-md-4">
                                <label>Name</label> <input type="text" class="form-control form-opacity" name="${key}" readonly value="${group[key]}">
                            </div>
                            <div class="col-md-4">
                                <label>Will you attend?</label> <select name="attend_${key}" id="attend" class="form-control form-opacity" ><option hidden selected  value=""></option><option style="background-color:#4f5255;"  value="yes">I will be there</option><option style="background-color:#4f5255;" value="No">Sorry, I cannot be there</option></select>
                            </div>
                            <div class="col-md-4">
                                <label>Veg/Non-veg?</label> <select name="food_${key}" id="food" class="form-control form-opacity" ><option hidden selected  value=""></option><option style="background-color:#4f5255;" value="Veg">I am a vegetarian</option><option style="background-color:#4f5255;" value="Nonveg">I am not a vegetarian</option></select>
                            </div>
                        </div>`;
        }
        else if(key!=`groupId`&& group[key]==""){
            rsvpForm += `<div id="${key}" class="row" style="display: none;">
                            <div class="col-md-4">
                                <label>Name</label> <input type="text" class="form-control form-opacity" name="${key}" readonly value="${group[key]}">
                            </div>
                            <div class="col-md-4">
                                <label>Will you attend?</label> <select name="attend_${key}" id="attend" class="form-control form-opacity" ><option hidden selected  value=""></option><option style="background-color:#4f5255;"  value="yes">I will be there</option><option style="background-color:#4f5255;" value="No">Sorry, I cannot be there</option></select>
                            </div>
                            <div class="col-md-4">
                                <label>Veg/Non-veg?</label> <select name="food_${key}" id="food" class="form-control form-opacity" ><option hidden selected  value=""></option><option style="background-color:#4f5255;" value="Veg">I am a vegetarian</option><option style="background-color:#4f5255;" value="Nonveg">I am not a vegetarian</option></select>
                            </div>
                        </div>`;
        }
    }
    // if(group.writeIn == "y"){
    //     rsvpForm+= `<div id="writeIn" class="row">
    //                     <div class="col-md-4">
    //                         <label>Plus One</label> <input type="text" class="form-control form-opacity" name="PO">
    //                     </div>
    //                     <div class="col-md-4">
    //                         <label>Will you attend?</label> <select name="attend_PO" id="attend" class="form-control form-opacity" ><option hidden selected  value=""></option><option value="Yes">I will be there</option><option value="No">Sorry, I cannot be there</option></select>
    //                     </div>
    //                     <div class="col-md-4">
    //                         <label>Veg/Non-veg?</label> <select name="food_PO" id="food" class="form-control form-opacity" ><option hidden selected  value=""></option><option value="Veg">I am a vegetarian</option><option value="Nonveg">I am not a vegetarian</option></select>
    //                     </div>
    //                 </div>`;
    // }
    rsvpForm+= `<div class="col-md-12">
                    <label>Notes:</label><textarea name="notes" class="form-control form-opacity" placeholder="List any allergies, concerns, etc...."></textarea>
                </div>
                <div class="col-md-12">
                    <button id="sendRSVP" class="btn submit">Send RSVP</button>
                </div>`;
    
    performDOMAction(`html`, `#rsvp`, rsvpForm);
    performDOMAction(`slidedown`, `#rsvp`, 400);
    
    var $form = $("form#rsvp");
    $("#rsvp").on("click","#sendRSVP", function(e){
        e.preventDefault();
        var goodToGo = formFillCheck(($form).serializeObject());
        if(goodToGo){
            performDOMAction(`hide`, `#sendRSVP`);
            enableLoader(true); 
            var formObj = $form.serializeArray();
            formObj.splice(0,0,{
                "name":"groupId",
                "value": `${group.groupId}`
            });
            $.ajax({
                url: url,
                method: "POST",
                data: JSON.stringify(formObj),
                success: function(data){
                    enableLoader(false); 
                    performDOMAction(`slideup`, `#rsvp`,400);    
                    displayError("<strong>Thank You!</strong> I'll make sure that Jeshwin and Aiswaria get your RSVP.<br><strong>Please note:</strong><br>The couple kindly request no boxed gifts.","alert-info");
                },
                error: function(e){
                    console.error(e);
                    displayError("<strong>Error!</strong> There was a problem with the RSVP, please try again later. If the problem persists, please contact the couple.", "alert-danger");
                    performDOMAction(`show`,`#sendRSVP`);
                    enableLoader(false);
                }
            
            })
        }
        else{
            alert("Whoops! It looks like you forgot to fill in some stuff. Let me know if you are coming or not, and if you are, plese fill in your food preference. The notes section is optional.");
        }
       
    })
};
formFillCheck = (data) => {
    var x;
    for(var key in data){
        x = key.substr(key.length-1,1);
        if(key ==`person${x}`){
            if(!isValidated(
                data[`person${x}`], 
                data[`attend_person${x}`],
                data[`food_person${x}`])){
                    return false;
                }
        }
    }
    return true;
};
isValidated = (person, attending, food) => {
    if(person){
        if(!attending)
            return false;
        if(attending==`yes` && !food)
            return false;
    }
    return true;
};
showRsvp = (group) =>{
    var i;
    var rsvpRecord = `<p>It seems like someone has already RSVP'd for your group. If you think a mistake has been made please contact the couple.</p><br>`;
    for(i = 1; i<group.length-2; i+=3){
        if(group[i]!=""){
            rsvpRecord += `
                            <div id="${i}" class="row">
                                <div class="col-md-4">
                                    <label>Name</label> <input type="text" class="form-control form-opacity" name="${i}" readonly value="${group[i]}">
                                </div>
                                <div class="col-md-4">
                                    <label>Will you attend?</label> <select name="attend_${i}" id="attend" class="form-control form-opacity" ><option hidden selected readonly value="${group[i+1]}">${group[i+1]}</option></select>
                                </div>
                                <div class="col-md-4">
                                    <label>Veg/Non-veg?</label> <select name="food_${i}" id="food" class="form-control form-opacity" ><option hidden selected  readonly value="${group[i+2]}">${group[i+2]}</option></select>
                                </div>
                            </div>`;
        }
    }
    rsvpRecord+=`<div class="col-md-12">
                    <label>Notes:</label><textarea name="notes" class="form-control form-opacity" readonly placeholder="${group[group.length-2]}"></textarea>
                </div>`;
    performDOMAction(`html`, `#rsvp`, rsvpRecord);
    performDOMAction(`slidedown`, `#rsvp`, 400);
}
displayError = (message, type) => {
    performDOMAction(`html`, `#submitError`, `<div class="alert ${type}"><span aria-hidden="true" class="alert-icon icon_blocked"></span>${message}</div>`);
    performDOMAction(`slidedown`, `#submitError`, 400);
    submitErrorVisible = true;
};
enableLoader = (enable) => {
    enable? $('#loader').show() : $('#loader').hide();    
};
performDOMAction = (action, element, argument = null) =>{
    switch(action){
        case `slideup`:
            $(element).slideUp(argument);
            break;
        case `slidedown`:
            $(element).slideDown(argument);
            break;
        case `html`:
            $(element).html(argument);
            break;
        case `hide`:
            $(element).hide();
            break;
        case `show`:
            $(element).show();
            break;
    }
};