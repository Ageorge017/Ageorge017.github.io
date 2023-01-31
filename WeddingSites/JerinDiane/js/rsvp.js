$(document).ready(function() {
    $('#nameNotFound').hide();
    $('#RSVPform').hide();
    $('#duplicate').hide();
    $('#thanksRSVP').hide();
    $("#rsvpTEST").attr("data-image", "mobiletest.jpg");
    $( ".scrollref" ).click(function( event ) {
        event.preventDefault();
        console.log($(this).attr("href"))
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);
    });
    

    // if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    // || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
    //     $("#rsvpTEST").attr("data-image", "mobiletest.jpg")
    // }
});

$("#submitName").click(function(){
    var name = $("#name").val();
    if(name.toLowerCase() == "soulja boy"){
        window.location.href = 'https://www.youtube.com/watch?v=wt1GzZBdNCk';
    }
    if(name == "" ){
        $('#nameNotFound').slideDown(400);
    }
    else{
        var titleCaseName =  $.fn.toTitleCase(name);
        $.fn.CheckListForName(titleCaseName.trim());
        
    }
})
$.fn.toTitleCase = function(str){
    return str.replace(
        /\w\S*/g,
        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}
$.fn.CheckListForName = function(name){
    $.ajax({
        type:"GET",
        url:"CSVs/csvjson.json", 
        dataType:"json",
        success: function(data){
            var families = [];
            var nameFound = false;
           $('#duplicate').on("click","#thisFamily",function(){
                $('#duplicate').slideUp(400);
                $.fn.dynamicHTML(families, $(this).attr("value"))
           });
            if(name.split(" ").length>=2){
                var lowercaseName
                for (var i in data){
                    if(($.fn.toTitleCase(data[i].Name).includes(name))||($.fn.toTitleCase(data[i].Partner).includes(name))||($.fn.toTitleCase(data[i].FirstChild).includes(name))||($.fn.toTitleCase(data[i].SecondChild).includes(name))||($.fn.toTitleCase(data[i].ThirdChild).includes(name))||($.fn.toTitleCase(data[i].FourthChild).includes(name))){
                        nameFound = true;
                        families.push(data[i]);
                    }
                }
            }
            if(nameFound){
                $("#inviteValidation").slideUp(1000);
                $('#nameNotFound').hide();
                if(families.length > 1){
                    var duplicateHTML ='';
                    duplicateHTML += '<p>I found more than one person with that name. Which person are you?</p>';
                    for(var i in families){
                        duplicateHTML += '<a class="col-sm-4 gla_anim_box grid-item bridesmaids" style="background:rgba(0,0,0,0.2)" id="thisFamily" value="'+i+'"><p>'+families[i].Name+'<br>'+families[i].Partner+'<br>'+families[i].FirstChild+'<br>'+families[i].SecondChild+'<br>'+families[i].ThirdChild+'<br>'+families[i].FourthChild+'</p></a>';
                        //add html to form
                    }
                    $('#duplicate').append(duplicateHTML);
                    $('#duplicate').slideDown(400);
                }
                else{
                    $.fn.dynamicHTML(families, 0)                   
                }
               
            }
            else{
                $('#nameNotFound').slideDown(400);
            }
        }
    });

    $.fn.dynamicHTML = function (families, i){
        var appendHtml = '';

        appendHtml += '<div class="row"><div class="col-md-4"><label>Name</label><input type="text" class="form-control form-opacity" name="Name" readonly value="'+families[i].Name+'" ></div>';
        appendHtml += '<div class="col-md-4"><label>Will you attend?</label><select name="Attending" id="attend" class="form-control form-opacity" ><option hidden selected  value=""></option><option value="yes">I will be there</option><option value="No">Sorry, I cannot be there</option></select></div>';
        appendHtml +='<div class="col-md-4"><label>Seafood/Shellfish?</label><select name="Allergies" id="allergic" class="form-control form-opacity"><option hidden selected  value=""></option><option value="yes">I am allergic</option><option value="No">I am not allergic</option></select></div></div>';
        
        if(families[i].Partner != ""){
            appendHtml += '<div class="row"><div class="col-md-4"><label>Name</label><input type="text" class="form-control form-opacity" name="Partner" readonly value="'+families[i].Partner+'" ></div>';
            appendHtml += '<div class="col-md-4"><label>Will you attend?</label><select name="Attending2" id="attend" class="form-control form-opacity"><option hidden selected value=""></option><option value="yes">I will be there</option><option value="No">Sorry, I cannot be there</option></select></div>';
            appendHtml +='<div class="col-md-4"><label>Seafood/Shellfish?</label><select name="Allergies2" id="allergic" class="form-control form-opacity"><option hidden selected value=""></option><option value="yes">I am allergic</option><option value="No">I am not allergic</option></select></div></div>';
        }
            
        if(families[i].FirstChild != ""){
            appendHtml += '<div class="row"><div class="col-md-4"><label>Name</label><input type="text" class="form-control form-opacity" name="FirstChild" readonly value="'+families[i].FirstChild+'" ></div>';
            appendHtml += '<div class="col-md-4"><label>Will you attend?</label><select name="Attending3" id="attend" class="form-control form-opacity"><option hidden selected value=""></option><option value="yes">I will be there</option><option value="No">Sorry, I cannot be there</option></select></div>';
            appendHtml +='<div class="col-md-4"><label>Seafood/Shellfish?</label><select name="Allergies3" id="allergic" class="form-control form-opacity"><option hidden selected value=""></option><option value="yes">I am allergic</option><option value="No">I am not allergic</option></select></div></div>';
        }
            
        if(families[i].SecondChild != ""){
            appendHtml += '<div class="row"><div class="col-md-4"><label>Name</label><input type="text" class="form-control form-opacity" name="SecondChild" readonly value="'+families[i].SecondChild+'" ></div>';
            appendHtml += '<div class="col-md-4"><label>Will you attend?</label><select name="Attending4" id="attend" class="form-control form-opacity"><option hidden selected value=""></option><option value="yes">I will be there</option><option value="No">Sorry, I cannot be there</option></select></div>';
            appendHtml +='<div class="col-md-4"><label>Seafood/Shellfish?</label><select name="Allergies4" id="allergic" class="form-control form-opacity"><option hidden selected value=""></option><option value="yes">I am allergic</option><option value="No">I am not allergic</option></select></div></div>';
        }

        if(families[i].ThirdChild != ""){
            appendHtml += '<div class="row"><div class="col-md-4"><label>Name</label><input type="text" class="form-control form-opacity" name="ThirdChild" readonly value="'+families[i].ThirdChild+'" ></div>';
            appendHtml += '<div class="col-md-4"><label>Will you attend?</label><select name="Attending5" id="attend" class="form-control form-opacity"><option hidden selected value=""></option><option value="yes">I will be there</option><option value="No">Sorry, I cannot be there</option></select></div>';
            appendHtml +='<div class="col-md-4"><label>Seafood/Shellfish?</label><select name="Allergies5" id="allergic" class="form-control form-opacity"><option hidden selected value=""></option><option value="yes">I am allergic</option><option value="No">I am not allergic</option></select></div></div>';
        }
        if(families[i].FourthChild != ""){
            appendHtml += '<div class="row"><div class="col-md-4"><label>Name</label><input type="text" class="form-control form-opacity" name="FourthChild" readonly value="'+families[i].FourthChild+'" ></div>';
            appendHtml += '<div class="col-md-4"><label>Will you attend?</label><select name="Attending6" id="attend" class="form-control form-opacity"><option hidden selected value=""></option><option value="yes">I will be there</option><option value="No">Sorry, I cannot be there</option></select></div>';
            appendHtml +='<div class="col-md-4"><label>Seafood/Shellfish?</label><select name="Allergies6" id="allergic" class="form-control form-opacity"><option hidden selected value=""></option><option value="yes">I am allergic</option><option value="No">I am not allergic</option></select></div></div>';
        }
        if(families[i].plusOne == "y"){
            appendHtml += '<div class="row"><div class="col-md-4"><label>Plus One Name</label><input id="plusName" type="text" class="form-control form-opacity" name="PlusOne" value=""></div>';
            appendHtml += '<div class="col-md-4"><label>Will you attend?</label><select name="Attending8" id="plusAttend" class="form-control form-opacity"><option hidden selected value=""></option><option value="yes">I will be there</option><option value="No">Sorry, I cannot be there</option></select></div>';
            appendHtml +='<div class="col-md-4"><label>Seafood/Shellfish?</label><select name="Allergies8" id="plusAllergies" class="form-control form-opacity"><option hidden selected value=""></option><option value="yes">I am allergic</option><option value="No">I am not allergic</option></select></div></div>';
        }
        appendHtml += '<div class="col-md-12"><button id="sendRSVP" class="btn submit">Send RSVP</button></div>';
        $("#RSVPform").append(appendHtml);
        $("#RSVPform").slideDown(1000); 
        var $form = $('form#RSVPform'),
        url = 'https://script.google.com/macros/s/AKfycbxkfXqrxeFM1KblA7FLGFtcgXSavsvf-Zc8jUJhpB5TV_c5-w/exec';
        $("#RSVPform").on('click',"#sendRSVP",function(e){
            e.preventDefault();
            var isFilled = true; 
            $("#attend").each(function() {
                if($(this).val() === ""){
                 alert("You seem to have forgotten to fill out the attending field.");
                 isFilled = false;
                }
             });
             $("#allergic").each(function() {
                if($(this).val() === ""){
                 alert("You seem to have forgotten to fill out the seafood allergy field.");
                 isFilled = false;
                }
             });
             $("#plusName").each(function() {
                if($(this).val() !== ""){
                    $("#plusAttend").each(function() {
                        if($(this).val() === ""){
                         alert("You seem to have forgotten to fill out the attending field.");
                         isFilled = false;
                        }
                     });

                     $("#plusAllergies").each(function() {
                        if($(this).val() === ""){
                         alert("You seem to have forgotten to fill out the seafood allergy field.");
                         isFilled = false;
                        }
                     });
                }
             });
            //console.log($("#plusName").val())     

            if(isFilled){
                $("#sendRSVP").hide();
                var jqxhr = $.ajax({
                    url: url,
                    method: "GET",
                    dataType: "json",
                    data: $form.serialize()
                }).success(
                    $("#RSVPform").slideUp(1000),
                    $("#thanksRSVP").slideDown(1000) 
                   
                );
            }
        })
    }
    
        


    //wedding invites need to be a json file with each object in this format
    //Ex)
    // {
    //     "Name": "Ronny Mathai",
    //     "Partner": "Cynthia Mathai",
    //     "FirstChild": "Hannah Mathai",
    //     "SecondChild": "Jacob Mathai",
    //     "ThirdChild": "Andrew Mathai",
    //     "FourthChild": "",
    //     "PlusOne":"y"
    //   }
}

var secretCounter = 0;
$('#musicButton').click(function(){
    secretCounter++;
    if(secretCounter == 4){
        $('#musicButton').hide();
       
    }
    console.log(secretCounter);
})

$('#upButton').click(function(){
    if(secretCounter == 4){
        $("#secretModal").modal('show');
        $('#musicButton').show();
    }
    if(secretCounter == 2){
        $("#secretModal2").modal('show');
    }
    secretCounter = 0;

})