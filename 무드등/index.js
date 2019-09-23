$(function() {
    $('.lamp').click(function() {
        var $lampLight = $('.lamp-light');
        var $bug = $('.bug');

        if ($lampLight.is(':visible')) {
            $lampLight.fadeOut();
            $bug.hide();
        } else {
            $lampLight.fadeIn();
            $bug.show();
        }
    });
});