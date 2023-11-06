// smooth scrolling
var html_body = $('html,body');
$('.menu').on('click', function () {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {

    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      html_body.animate({
        scrollTop: target.offset().top - 17
      }, 1500);
      return false;
    }
  }
});
// smooth scrolling

// sticky-menu start Here
$(function(){ 
    $(window).scroll(function () {
        let fixed = $(this).scrollTop()
        if (fixed > 300) {
          $(".sub-nav").addClass("sticky-navbar")
        } else {
          $(".sub-nav").removeClass("sticky-navbar")
        }  
        // sticky-menu End Here

        // Back-to-top start Here
        if (fixed > 300) {
          $(".back_to_top").fadeIn(300)
          $('.back_to_top').css('opacity', '1')
        } else {
          $(".back_to_top").fadeOut(300)
        }
        $('.back_to_top').click(function () {
          $('html,body').animate({
            scrollTop: 0
          }, 1000)
        })
         // Back-to-top End Here
})

})

