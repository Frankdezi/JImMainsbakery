$(document).ready(function () {
    $('.img-zoom').hover(function () {
        $(this).addClass('transition');
    }, function () {
        $(this).removeClass('transition');
    });
    
    var menuitems = $('.clickable');
    
    $(menuitems).on('click', function (e) {
        e.preventDefault();
        var item = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(item).offset().top
        }, 
            500
            
        );
    });
});