$(document).ready(function(){
    $('#igModal').modal({
        show: 'true'
    });
   
    var folder = "../albumPhotos/";

    $.ajax({
        url : folder,
        success: function (data) {
            $(data).find("a").attr("href", function (i, val) {
                if( val.match(/\.(jpe?g|png|gif)$/) ) { 
                    
                    $("#albumPhotos").append( '<div class="responsive"><div class="gallery"><a target="_blank" href="'+folder+val+'"><img src="'+folder+val+'" alt="Cinque Terre" width="450" height="300"></a></div></div>' );
                    
                } 
            });
        }
    });

    let FromThisMomentJohn = {
        get: '#fromthismomentjohn',
        imageSize: 640,
        limit: 69,
        link: true,
        template:'<div class="post"><a href="{{link}}"><img src="{{image}}" alt="{{accessibility_caption}}"><span class="meta"><p>{{caption}}</p><span class="stats"><span class="likes"><i class="fas fa-heart"></i>{{likes}}</span><span class="comments"><i class="fas fa-comment"></i>{{comments}}</span></span></a></div>'
        };
    // let JeDi = {
    //     get: '#jedi2019',
    //     imageSize: 640,
    //     limit: 69,
    //     link: true,
    //     template:'<div class="post"><a href="{{link}}"><img src="{{image}}" alt="{{accessibility_caption}}"><span class="meta"><p>{{caption}}</p><span class="stats"><span class="likes"><i class="fas fa-heart"></i>{{likes}}</span><span class="comments"><i class="fas fa-comment"></i>{{comments}}</span></span></a></div>'
    //     };

    let FromJawnsToJohns = {
        get: '#fromjawnstojohns',
        imageSize: 640,
        limit: 69,
        link: true,
        template:'<div class="post"><a href="{{link}}"><img src="{{image}}" alt="{{accessibility_caption}}"><span class="meta"><p>{{caption}}</p><span class="stats"><span class="likes"><i class="fas fa-heart"></i>{{likes}}</span><span class="comments"><i class="fas fa-comment"></i>{{comments}}</span></span></a></div>'
        };
    
    $('#playground-result1').instastory(FromThisMomentJohn);
    // $('#playground-result2').instastory(JeDi);
    $('#playground-result3').instastory(FromJawnsToJohns);
    setTimeout(function() {
        $('#playground-result .post').each(function() {
            let currentCaption = $(this).find('.meta p').text();
            let newCaption = currentCaption;
    
            if(currentCaption.length > 350) {
                newCaption = currentCaption.substring(0, 347) + '...';
            }
    
            $(this).find('.meta p').text(newCaption);
        });
    }, 2000);


   
 });
