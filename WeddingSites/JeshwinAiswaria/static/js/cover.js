$("#coverBtn").click(function(){
    $(".cover-bg").slideUp(1250,"linear");
})
$( ".scroll" ).click(function( event ) {
    event.preventDefault();
    console.log($(this).attr("href"))
    $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);
});