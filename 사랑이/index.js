$(function() {
    $('#sarang').mouseenter(function() {
        $(this).find('.cheek').fadeIn();
        $(this).siblings('.heart').fadeIn();
    });

    $('#sarang').mouseleave(function() {
        $(this).find('.cheek').fadeOut();
        $(this).siblings('.heart').fadeOut();
    });
});