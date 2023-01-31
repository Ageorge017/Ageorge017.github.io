(function() {
    var flip_card, open_env;
  
    // $(".js-first-flip, .flip-btn").on("click", function() {
    //   flip_card();
    //   return $('.cards-btn').css({
    //     opacity: 1
    //   });
    // });
  
    $(".js-open-env").on("click", function() {
      return open_env();
    });
  
    flip_card = function() {
      return $(".env-card--inner").toggleClass("is-flipped");
    };
  
    open_env = function() {
      $(".section--cards").addClass("is-opened");
      return $(".env-btn").fadeOut();
    };
  
  }).call(this);