$(document).ready(function(){
    $('#NameSubmitError').hide();
    $('#loader').hide();
    $(window).keydown(function(event){
        if(event.keyCode == 13) {
          event.preventDefault();
          return false;
        }
    })   
    $( ".scrollref" ).click(function( event ) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);
    });
})
$("#hotelbutton").click(function(){
    $('#hotelModal').modal({show: 'true'});
})
$("#ceremonybutton").click(function(){
    $('#ceremonyModal').modal({show: 'true'});
})
$("#receptionbutton").click(function(){
    $('#receptionModal').modal({show: 'true'});
})
$("#MoreProposal").click(function(){
    $('#proposalModal').modal({show: 'true'});
})
$(".bridalparty").click(function(){
    var id = $(this).attr('id');
    console.log(id);
    if(id==="Jenny"){
        var bridalpartyName = "Jenny -Cousin of the Bride"
        var bio = "<p>Hi, my name is Jenny. I am Nina’s matron of honor, her (favorite) cousin, and 1/3 partner of the three musketeers.  I’ve known Nina since January 4, 1993, the day this nuisance was born. I take full responsibility for the wedding even happening since I am the reason she even started talking to Anish, YOU’RE WELCOME! 💁🏽‍♀️ Haha jk!  I couldn’t be happier to celebrate both of your love for each other, and to stand by your side as you take this beautiful step. I remember to this day when we first saw Anish (after I added him on FB for you) at an Onam program and all he said to you was hey, and you couldn’t stop gushing over that moment, it was so cute. Anish, I feel like I’ve known everything about you, even before you graduated high school. You didn’t know this, but I was sometimes there listening to those long (3 hour) phone conversations you guys would have. I’ll save the embarrassing stories for my speech, stay tuned 😏 I couldn’t be happier to add another brother to the family! Can’t wait for the big day!  Love you both!! ♥️</p>"
        $('#bridalpartyName').html(bridalpartyName);
        $('#bridalpartyBio').html(bio);
    }
    if(id==="Ruby"){
        var bridalpartyName = "Ruby -Cousin of the Bride"
        var bio = "<p>Hi, I’m Ruby 😊 I’ve known Nina since she was born! I’ve seen her go from the many stages of her life into the beautiful woman that she is now! Now I’m not just saying this because we share the same blood, but you don’t get a more genuine person than with Nina. She is ready to tear up some cookies, go shopping or just talk. Anish and his family are very blessed to have Nina carry the torch into the next generation.</p>"
        $('#bridalpartyName').html(bridalpartyName);
        $('#bridalpartyBio').html(bio);
    }
    if(id==="Christine"){
        var bridalpartyName = "Christine -Friend of the Bride and Groom"
        var bio = "<p>I met Nina and Anish through Anish's high school buddy/ my boo Sam in 2017.  If we are lucky enough, sometimes we come across people and connect so genuinely,  truly feeling that you have known that person forever! That's exactly how it was when I met Nina. Within a few minutes together, Nina and I instantly bonded. I absolutely fell in love with so many things about her; the gentleness and kindness that her spirit naturally exudes, her sincerity, and love that she gives everyone with wide open arms. That same night when Nina, Anish, Sam, and myself were together, we spent HOURS talking all night, with our emotions all over the place; sharing the joys and adversities that each one of us faced, and sharing each of our lives with one another. I remember Anish saying at the end:</p><p> <i>I have a feeling we're all going to be really good friends, for a really long time.</i></p> <p>Fast forwarding a few years later and a few months before their wedding, I think Anish was definitely on to something : ) </p>"
        $('#bridalpartyName').html(bridalpartyName);
        $('#bridalpartyBio').html(bio);
    }
    if(id==="Kunal"){
        var bridalpartyName = "Kunal -Friend of the Groom"
        var bio = "<p>I'm Kunal, and I’m one of Anish’s best friends from Baruch College. I met Nina through Anish one day when he brought her to one of our favorite restaurants to hang out.  Nina has  become like a sister to me , and even calls me Kunzie lol. Through our  group trips to DC together, double dates, crazy house parties, & corny jokes, Nina is like a breath of fresh air and I’m so happy Anish has found such a great girl to spend the rest of his life with. </p>"
        $('#bridalpartyName').html(bridalpartyName);
        $('#bridalpartyBio').html(bio);
    }
    if(id==="Kiran"){
        var bridalpartyName = "Kiran -Friend of the Bride"
        var bio = "<p>I'm Kiran, I have known Nina since the misery of Bio2 in 2012 and she's been my mumpkin ever since. I loved having our weekly mumpkin dates from doing nothing and everything together. Thank you for being the life of the party, my support system for life since, no matter the distance we are always close in heart! Love you so much and wishing you and Anish the best and all the love in this new chapter of your lives!</p>"
        $('#bridalpartyName').html(bridalpartyName);
        $('#bridalpartyBio').html(bio);
    }
    if(id==="Carolina"){
        var bridalpartyName = "Carolina -Friend of the Bride"
        var bio = "<p>Hi, I am Carolina and I am so excited to be a bridesmaid in Nina’s bridal party! We originally met at a birthday party of a mutual friend's back in 2009 at the Applebee’s in New Roc, but we became close friends after sitting next to each other every day for 8 hours a day in a Pre-Calc summer class in 2010. We hung out a lot during that time and even more since that summer. Over the years I’ve learned how special of a friend Nina is. She is incredibly sweet, authentic, honest, loyal, funny, and caring. That is why I am so excited that she is marrying Anish. I think they are incredibly compatible and quite simply, made for each other. I met him at one of my birthdays and was immediately struck by how sweet, authentic, honest, loyal, funny, and caring he is, just like Nina.  I like to think I have a knack for sensing good matches and they.fit.the.bill. This wedding will be a beautiful representation of who they are as a couple and I am so honored to be a part of it! To Nina and Anish!</p>"
        $('#bridalpartyName').html(bridalpartyName);
        $('#bridalpartyBio').html(bio);
    }
    if(id==="Jackie"){
        var bridalpartyName = "Jackie -Cousin of the Bride"
        var bio = `<p>I'm Jackie, I've known Nina since she's been alive (hello, family) and knew of Anish since Nina mentioned him when they were in high school and can't wait to see them tie the knot! I love seeing their love, how cheesy they are, and the joy they have for each other. My absolute favorite memory is Nina is the cutest/cheesiest voice going "Anish hold my hand" on a night out. How cute are they?!? As Nina's cousin, I am a bridesmaid for their wedding and happy that we've (because this is a family affair) moved beyond high school crushes to this life long romance. </p>`
        $('#bridalpartyName').html(bridalpartyName);
        $('#bridalpartyBio').html(bio);
    }
    if(id==="Julie"){
        var bridalpartyName = "Julie -Cousin of the Bride"
        var bio = `<p> I’ve known Nina since I was born—breaking her chance of being the only ‘93 baby in the family. Growing up together, we had some great times, sleepovers, sharing outfits, learning Indian dance, being each other’s partner from our mutual shortness, doing our nails a lot...ahem ahem.., rolling our eyes whenever the aunties would think I was the older one at Holy Thursday, and eating lots of apple pies with whipped cream! She is someone I’ve always admired. She is always willing to lend a helping hand and is kind, thoughtful, and has a big heart. She is not just my cousin but my sister and I am so glad she has found her love and soulmate in Anish</p>`
        $('#bridalpartyName').html(bridalpartyName);
        $('#bridalpartyBio').html(bio);
    }
    if(id==="Amitha"){
        var bridalpartyName = "Amitha -Cousin of the Groom"
        var bio = `<p> Hi! I’m Amitha Mathew and I am a bridesmaid for Anish chachen and Nina chechi’s wedding! I am one of Anish chachen’s cousins and I met Nina chechi at the movie theater when he was introducing us cousins to her three years ago when we were about to watch Batman vs. Superman. I instantly liked her because she was funny, smart, pretty, and made fun of chach with us with no remorse. I didn’t let her know I liked her yet though, I had to make her sweat a little. Us cousins started having movie theater hangouts with her more often and slowly but surely, she became family without us even noticing it. As for Anish chachen, he is one of the most laid back yet understanding guys I have ever met. If anyone has met him, they know exactly what I mean. He has this ability to make everyone feel at ease which is why Chach and chechi became the go to’s for advice as well as a good time. It always felt like I was talking and hanging out with friends that I respected a lot. Even though they were quite older than me and I am sure at times they felt like they thought of us as “kids”, it felt like when we were together, we were just family and no other differences mattered.  </p>`
        $('#bridalpartyName').html(bridalpartyName);
        $('#bridalpartyBio').html(bio);
    }
    if(id==="Gincy"){
        var bridalpartyName = "Gincy -Cousin of the Groom"
        var bio = `<p>Hey my name is Gincy and I’m a bridesmaid for the wedding! Anish chach is my cousin, a brother from another mother and an overall amazing bright person to be with. Chach is one of the open hearted, kind and funniest people I’ve ever met. Chach has seen me grow from when I was a baby to now the person I am today and I’m proud to call him my brother. Soon into Nina and Anish’s relationship, I met Nina at Six Flags. I instantly fell in love with her and her ever glowing bubbly personality. From movie dates, to throwing me my own surprise birthday party, I’ve always thought of Nina as a sister. I’ve always seen both Anish and Nina to be a dynamic power couple as seen by their strong loving connection for one another and compassion towards each other. One of the many things Nina and Anish always taught me is that family is everything and all we have at the end of the day. Because of their everlasting and compassionate relationship, we’ll always be as close as family. I am forever blessed and grateful to have them both in my life and I can’t wait to see their relationship thrive, flourish and prosper!</p>`
        $('#bridalpartyName').html(bridalpartyName);
        $('#bridalpartyBio').html(bio);
    }
    if(id==="Ani"){
        var bridalpartyName = "Ani -Sister of the Groom"
        var bio = `<p>Hi ! My name is Ani! I am Anish’s sister. I am so proud that Anish is getting married to the love of his life in a few months. Nina is a beautiful, good-hearted woman, we are lucky to have her in our lives. May God bless their married life.</p>`
        $('#bridalpartyName').html(bridalpartyName);
        $('#bridalpartyBio').html(bio);
    }
    if(id==="Rosemary"){
        var bridalpartyName = "Rosemary -Friend of the Bride"
        var bio = `<p>I’ve known both Nina and Anish since 9th grade. Nina and I couldn’t stand each other when we first met, but now I can’t imagine my life without her. We’ve seen each other grow through the years and have been through so much together. I used to remember her telling me about her high school crush “Anish”, and now here we are THIRTEEN years later getting ready for their wedding. Nina has the biggest heart and there is no one else that deserves a fairytale ending more than her. I’m so honored to be by your side on your big day. Anish you a real one too. Wishing you both all the love and happiness in the world. Literally cannot wait for the most lit wedding of 2020.</p>`
        $('#bridalpartyName').html(bridalpartyName);
        $('#bridalpartyBio').html(bio);
    }
    if(id==="Ackil"){
        var bridalpartyName = "Ackil -Cousin of the Groom"
        var bio = `<p>Hey, I’m Ackil and I’m one of the groomsmen! I’ve known Anish my entire life since we’re cousins, but in all honestly I could call him an older brother. Having him in my life is such a blessing because he’s literally the funniest person I know, super chill and also down to Earth. Nina, however, is someone I only met a couple years ago, but it feels like a lifetime. She is such an easy person to get along with, and her bubbly personality and corny jokes made me regard her as a close friend the first time I met her. They’re both incredible people apart, but It’s when you get to know as a duo when you realize how much they compliment each other. Together, they light up a room and always bring the fun to any gathering. They are both individually funny, smart, and adventurous, and combined there’s not a single moment where you’re not laughing, learning something new, or doing something fun with them! I couldn’t be happier to get an older sister and forever friend.</p>`
        $('#bridalpartyName').html(bridalpartyName);
        $('#bridalpartyBio').html(bio);
    }
    if(id==="Arron"){
        var bridalpartyName = "Arron -Cousin of the Groom"
        var bio = `<p>Hi, I’m Arron Mathew, and I have the honor of being one of the youngest groomsmen you’ll ever meet for the best people you’ll ever meet. I met Nina Chechi about 3 years ago and we immediately bonded. She was extremely welcoming, bubbly, fun, and definitely one of the coolest girls I’ve ever met, and I’m glad that nothing has changed since then. As for Anish Chachen, I’ve had the blessing of knowing him my entire life, never having a lack of trivia facts that I can learn from him (like the circumference of the earth). He is one of the most interesting people I’ve ever met, and I’m so glad to have a strong role model like him to guide me through life.</p>`
        $('#bridalpartyName').html(bridalpartyName);
        $('#bridalpartyBio').html(bio);
    }
    if(id==="Tony"){
        var bridalpartyName = "Tony -Brother of the Bride"
        var bio = `<p>Hey everyone, I am the brother of the bride. I couldn’t be happier for these two love birds to finally tie the knot, and finally get the house all to myself.</p>`
        $('#bridalpartyName').html(bridalpartyName);
        $('#bridalpartyBio').html(bio);
    }
    if(id==="Blesson"){
        var bridalpartyName = "Blesson -Friend of the Groom"
        var bio = `<p>I met Anish the first time when I was a baby at St. Ebenezer Marthoma Church, where my sisters and cousins would bully him. Afterwards, we all moved to a new church, where bullying wasn’t allowed and Anish and I became friends. I would get invites to his birthday party every year, and on his 26th birthday party was where I first met Nina. I was really awkward and quiet around her, as I usually am with new people. But eventually I warmed up and realized she was such a genuinely nice person. She creates such a fun atmosphere, that Nina, Anish and I just made a group chat together and eventually became best friends five ever. We kept hanging out all the time for the past 3 years until we became a codependent throuple. No but seriously, we will always be best friends!</p>`
        $('#bridalpartyName').html(bridalpartyName);
        $('#bridalpartyBio').html(bio);
    }
    if(id==="Sam"){
        var bridalpartyName = "Sam -Friend of the Couple"
        var bio = `<p>BAMM!! That is the earliest memory I have of Anish, as he slams me to the floor after i foolishly challenged him to a fight during the Saunders Indian Show. This was the last I saw of him for a while until college began. We both were in the center of the city in the pursuit of corporate success and grandeur. He studied accounting, and I studied Finance. Though our majors were different, we occasionally found time to talk and find solutions to overcome our daily obstacles. But honestly, Anish was the one with all the answers, and I was the one with all the problems. I have never seen him upset or sad or question anything. I would often tell people about Anish (including  his Super Star Resume) and how he inspired me to reach great heights as well. In an Industry that is cutthroat, Anish always lifted up my spirits, even when I worked as a Deli clerk applying for my first corporate Job. His cheerful and warm outlook has greatly influenced so much of my optimism for my own life. Nina came into our life much later on. I remember the first time I talked to her was in the car with Anish and I was super excited because I knew they would love Christine (my boo ). In the time that I have gotten to know Nina, I see how Nina’s strengths perfectly align with Anish’s values: having the ability to make everyone feel warm and at home, cherishing her relationships with the entirety of her heart, and the relationship she has with Christine (I’m low key jealous of their cuddle time). 10 years from being schooled by Anish on the wrestling floor, I am proud of the man he’s become, and beyond honored to stand with him on his wedding day, and for the rest of his life.</p>`
        $('#bridalpartyName').html(bridalpartyName);
        $('#bridalpartyBio').html(bio);
    }
    if(id==="Nelson"){
        var bridalpartyName = "Nelson -Friend of the Groom"
        var bio = `<p>Hi, my name is Nelson Matias. I met Anish in 3rd grade when we went to Trinity Elementary School together. Initially we weren’t so close where we would socialize outside of school, followed by my moving to Florida and losing contact of him. We ran into each other again in New Rochelle High School and a friendship sparked where we did everything together from taking the same classes, competing for grades, to joining the wrestling team and competing in tournaments. That friendship continued past High School, and College, and continues till today.</p><p>One day he introduced me to Nina as his girlfriend. A shy girl who’s eyes lit up every time I would catch her looking at Anish in amazement of the person she was dating. Nina too quickly became one of my closest and most trusted friends who is one of the very few who calls me by silly nicknames like Nelly or Nelsito without me cringing.</p><p>I look forward to their wedding day. I look forward to this growing friendship. And I look forward to seeing Anish and Nina’s love flourish and grow even more than it has today.</p>`
        $('#bridalpartyName').html(bridalpartyName);
        $('#bridalpartyBio').html(bio);
    }
    if(id==="Thomas"){
        var bridalpartyName = "Thomas -Brother in Law of the Groom"
        var bio = `<p>Hey everyone, I am Anish’s brother inlaw , Thomas. I’ve known Anish for many years now, and am proud of the man he has become. I wish all the best for him and his wife to be, Nina. Can’t wait for the wedding! </p>`
        $('#bridalpartyName').html(bridalpartyName);
        $('#bridalpartyBio').html(bio);
    }
    if(id==="Val"){
        var bridalpartyName = "Val -Friend of the Groom"
        var bio = `<p>It is a rarity that someone would meet one of their closest friends in their final undergrad class, but that is where Anish and I first met. We initially bonded over a few quips made at the expense of our professor, and now almost 6 years later I can easily say we'll be lifelong friends. Although Anish and I do not see each other often we remain close because he's the type of person that's there for the you when it counts. Over the past few years he's been there for me during all the major milestones of my life, from helping me grow at the onset of my career, to helping me feel confident as a new father. Anish is an amazing human being and i'm glad he found someone equally amazing to share the rest of his life with.</p>`
        $('#bridalpartyName').html(bridalpartyName);
        $('#bridalpartyBio').html(bio);
    }
    if(id==="Mikey"){
        var bridalpartyName = "Mikey -Friend of the Groom"
        var bio = `<p>Hello all, my name is Michael, but everyone calls me Mikey. I met Anish through a mutual friend Nelson  (who is one of the other groomsmen) a couple years ago. </p><p>Anish is the type of guy who fits easily into your life, and makes you feel that he has always been there. He is a down to earth guy who is easy to have conversations with. He has this ability to tell a story with so much passion that it makes the most simple story sound like an adventure. I have always been in awe of his story telling abilities lol. Every time I hang out with Anish, I know that it will always be a good time.</p><p>Nina, I remember, I met at a Christmas party that Anish was throwing.That encounter was memorable because I remember this small bubbly Indian girl who somehow got a group of guys to participate in  a gingerbread house making competition (My house was the best by the way :). She was someone who had no issue hanging out like one of the bros but was also being one of the girls. She always made a point every time we hung out to make sure everyone felt included. She always showed a natural level of empathy, which is an ability I greatly respect.</p><p>Together I feel they are a perfect couple. There is always joy and laughter whenever you are with them and no matter how long it been since you saw them, it feels like no time has passed at all. That's why I truly feel blessed to have them in my life. They are two of the most genuine and wholesome people I know , and am glad to call them both my friends.</p>`
        $('#bridalpartyName').html(bridalpartyName);
        $('#bridalpartyBio').html(bio);
    }
    $('#bridalpartyModal').modal({show: 'true'});
})
var counter = 0;
$("#musicButton").click(function(){
    counter++;
    if (counter == 4){
        $("#musicButton").hide();
    }
})
$("#upButton").click(function(){
    if(counter == 4){
        counter = 0;
        $("#musicButton").show()
        $("#afterpartyModal").modal({show: 'true'});
    }
})

$('#SubmitName').click(function(){
    var name = $("#name").val();

    if (name.length === 0 || !name.trim()){
        $.fn.DisplayError("Field cannot be blank");
    }
    else{
        $.fn.FindName(name.trim());
    }
    
})


$.fn.DisplayError= function(ErrorMsg){
    console.log("Input error");
    $('#NameSubmitError').html('<div class="alert alert-danger"><span aria-hidden="true" class="alert-icon icon_blocked"></span><strong>Yikes!</strong> '+ErrorMsg+'</div>')
    $('#NameSubmitError').slideDown(400);

}

$.fn.NameFound = function(family){
    var group = family.GroupId;
    var appendHtml = '';
    url = 'https://script.google.com/macros/s/AKfycbxV5MGqAWx5PDorPNsA9Xzbh7ZKgkdY2HB7zmQlbzOHTfWoez4/exec';

    //console.log(family);
    if(family.RsvpId == ""){
        for (var key in family) {

            if((key != "RsvpId")&&(key != "PlusOne")&&(key!="GroupId") &&(family[key]!="")){
                appendHtml += '<div class="row"><div class="col-md-4"><label>Name</label><input type="text" class="form-control form-opacity" name="'+key+'" readonly value="'+family[key]+'" ></div>';
                appendHtml += '<div class="col-md-4"><label>Will you attend?</label><select name="Attending'+key+'" id="Attend" class="form-control form-opacity" ><option hidden selected  value=""></option><option value="yes">I will be there</option><option value="No">Sorry, I cannot be there</option></select></div>';
                appendHtml +='<div class="col-md-4"><label>Veg/Non-Veg?</label><select name="VegOp'+key+'" id="VegOp" class="form-control form-opacity"><option hidden selected  value=""></option><option value="veg">Veg</option><option value="nonveg">Non-veg</option></select></div></div>';    
                
            }
            if(key == "PlusOne" && family.PlusOne != ""){
                appendHtml += `<div class="row"><div class="col-md-4"><label>`+family.PlusOne+`'s Plus One</label><input type="text" id="PlusName" class="form-control form-opacity" name="PlusOne" placeholder="Optional" ></div>`;
                appendHtml += '<div class="col-md-4"><label>Will you attend?</label><select name="Attending'+key+'" id="PlusAttend" class="form-control form-opacity" ><option hidden selected  value=""></option><option value="yes">I will be there</option><option value="No">Sorry, I cannot be there</option></select></div>';
                appendHtml +='<div class="col-md-4"><label>Veg/Non-Veg?</label><select name="VegOp'+key+'" id="PlusVegOp" class="form-control form-opacity"><option hidden selected  value=""></option><option value="veg">Veg</option><option value="nonveg">Non-veg</option></select></div></div>';    
            }
            
        }

        appendHtml += '<div class="col-md-12"><label>Notes:</label><textarea name="notes" class="form-control form-opacity" placeholder="List any allergies, concerns, etc...."></textarea>';
        appendHtml += '<div class="col-md-12"><button id="sendRSVP" class="btn submit">Send RSVP</button></div>';
        
        var $form = $('form#RSVP');
        $("#RSVP").on('click', '#sendRSVP', function(e){
            e.preventDefault();
            var isFilled = true;
            $("#Attend").each(function() {
                if($(this).val() === ""){
                    $("#Attend").css("background","#ff000085");
                    isFilled = false;
                }
            });
            $("#VegOp").each(function() {
            if($(this).val() === ""){
                $("#VegOp").css("background","#ff000085");
                isFilled = false;
            }
            });
            $("#PlusName").each(function() {
                if($(this).val() !== ""){
                    $("#PlusAttend").each(function() {
                        if($(this).val() === ""){
                            $("#PlusAttend").css("background","#ff000085");
                            isFilled = false;
                        }
                        });

                        $("#PlusVegOp").each(function() {
                        if($(this).val() === ""){
                            $("#PlusVegOp").css("background","#ff000085");
                            isFilled = false;
                        }
                        });
                        
                }
            });
            if(!isFilled){
                alert("It looks like you forgot a couple things! Make sure all fields are complete. If you're not bringing a plus one you can leave that information blank.")
            }
            if(isFilled){
                $('#sendRSVP').hide();
                $('#loader').show();
                $.ajax({
                    url: url,
                    method: "GET",
                    dataType: "json",
                    data: $form.serialize(),
                    success: function(data){
                        $.fn.SetRsvpId(family.GroupId, data.row);
                        $('#loader').hide();
                        $('#RSVP').slideUp(400);                  
                    }
                
                })
            }
        })
        $("#RSVP").html(appendHtml);
        $("#RSVP").slideDown(400);
    }
    else if (family.RsvpId !== ""){
        $('#loader').show();
        $.ajax({
            url: url,
            method: "GET",
            dataType: "json",
            data: {row_req: family.RsvpId},
            success: function(data){
                for(var key in  data){             
                    if ((key == 0)||(key == 3)||(key == 6)||(key == 9)||(key == 12)||(key == 15)||(key == 18)||(key == 21)||(key == 24)||(key == 27)){
                        if(data[key]!="undefined"){            
                            appendHtml += '<div class="row"><div class="col-md-4"><label>Name</label><input type="text" class="form-control form-opacity" name="'+key+'" readonly value="'+data[key]+'" ></div>';
                        }
                    }
                    if ((key == 1)||(key == 4)||(key == 7)||(key == 10)||(key == 13)||(key == 16)||(key == 19)||(key == 22)||(key == 25)||(key == 28)){
                        if(data[key]!="undefined"){                            
                            appendHtml += '<div class="col-md-4"><label>Will you attend?</label><input type="text" class="form-control form-opacity" name="'+key+'" readonly value="'+data[key]+'" ></div>';                                                   
                        }
                    }
                    if ((key == 2)||(key == 5)||(key == 8)||(key == 11)||(key == 14)||(key == 17)||(key == 20)||(key == 23)||(key == 26)||(key == 29)){
                        if(data[key]!="undefined"){
                            appendHtml +='<div class="col-md-4"><label>Veg/Non-Veg?</label><input type="text" class="form-control form-opacity" name="'+key+'" readonly value="'+data[key]+'" ></div>';                            
                        }
                    }
                    if(key == 30){
                        appendHtml += '<div class="col-md-12"><label>Notes:</label><textarea name="notes" readonly class="form-control form-opacity" placeholder="'+data[key]+'"></textarea></div></div>';
                    }
                    
                }  
                $("#RSVP").html(appendHtml);
                $("#RSVP").slideDown(400); 
                $('#loader').hide();    
                $.fn.DisplayError("It seems like someone has already RSVP'd for your group. Here is your group's RSVP. If you think this is a mistake, please contact Anish or Nina.");          
            }
           
        })

    }   
    
}

$.fn.SetRsvpId = function(GroupId, RsvpId){
    const requestUrl = '/setRsvp/'+GroupId+'/'+RsvpId;
    $.ajax({
        url: requestUrl,
        method: "GET",
        dataType: "json",
        success: function(data){
            $('#NameSubmitError').html('<div class="alert alert-success"><span aria-hidden="true" class="alert-icon icon_like"></span><strong>RSVP sent!</strong> I will make sure Anish and Nina get your RSVP.</div>');
            $('#NameSubmitError').slideDown(400);
            $('#loader').hide();
            console.log(data);
        }
       
    })
}

$.fn.FindName = function(name){
    $('#loader').show();

    $.ajax({
        type:"GET",
        url:"static/InviteJson.json", 
        dataType:"json",
        success: function(data){
            //var families = [];
            name = name.toLowerCase();
            
            var options = {
                shouldSort: true,
                tokenize: true,
                matchAllTokens: true,
                findAllMatches: true,
                threshold: 0.4,
                location: 0,
                distance: 100,
                maxPatternLength: 32,
                minMatchCharLength: 1,
                keys: [
                  "FirstPerson",
                  "SecondPerson",
                  "ThirdPerson",
                  "FourthPerson",
                  "FifthPerson",
                  "SixthPerson",
                  "SeventhPerson",
                  "EightPerson",
                  "NinthPerson"

                ]
              };
            var fuse = new Fuse( data, options );
            var families = fuse.search(name);  
            // for (var i in data){
            //     if((data[i].FirstPerson.toLowerCase().includes(name))||
            //         (data[i].SecondPerson.toLowerCase().includes(name))||
            //         (data[i].ThirdPerson.toLowerCase().includes(name))||
            //         (data[i].FourthPerson.toLowerCase().includes(name))||
            //         (data[i].FifthPerson.toLowerCase().includes(name))||
            //         (data[i].SixthPerson.toLowerCase().includes(name))||
            //         (data[i].SeventhPerson.toLowerCase().includes(name))||
            //         (data[i].EightPerson.toLowerCase().includes(name))||
            //         (data[i].NinthPerson.toLowerCase().includes(name))){
                    
            //             families.push(data[i]);
            //     }
            // }
            
            if(families.length < 1){
                $('#loader').hide();
                $.fn.DisplayError("I could not find your name. Type your name exactly how it appears on the invitation");
            }
            else{
                if(families.length > 3){
                    $('#loader').hide();
                    $.fn.DisplayError("I found too many matches! Please type out your full name")
                }
                else if(families.length > 1 && families.length <= 3){
                    $('#loader').hide();
                    $('#NameSubmitError').hide();
                    $('#GroupSearch').slideUp(400);
                    var duplicateHTML ='';
                    duplicateHTML += '<p>Here are the matches I found. Which person are you?</p>';
                    for(var i in families){
                        duplicateHTML += '<a class="col-sm-4 gla_anim_box grid-item bridesmaids" style="background:rgba(0,0,0,0.2)" id="thisFamily" value="'+i+'"><p>'+families[i].FirstPerson+'<br>'+families[i].SecondPerson+'<br>'+families[i].ThirdPerson+'<br>'+families[i].FourthPerson+'<br>'+families[i].FifthPerson+'<br>'+families[i].SixthPerson+'<br>'+families[i].SixthPerson+'<br>'+families[i].SeventhPerson+'<br>'+families[i].EightPerson+'<br>'+families[i].NinthPerson+'</p></a>';
                    }
                    $('#RSVP').html(duplicateHTML);
                    $('#RSVP').slideDown(400);
                }
                else if(families.length == 1){
                    $('#loader').hide();
                    $('#NameSubmitError').hide();
                    $('#GroupSearch').slideUp(400);
                    $.fn.NameFound(families[0]);
                }
            }

            $('#RSVP').on("click","#thisFamily",function(){
                $('#NameSubmitError').hide();
                $('#RSVP').slideUp(400);
                $.fn.NameFound(families[$(this).attr("value")]);
           });

        }
    })

}

