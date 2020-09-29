$(function () {

    var percent = parseInt($('.mask :first-child').text());
    var baseColor = $('.circle-bar').css('background-color');

    if (percent <= 50) {
        $('.circle-bar-right').css('transform', 'rotate(' + (percent * 3.6) + 'deg)');
    } else {
        $('.circle-bar-right').css({
            'transform': 'rotate(0deg)',
            'background-color': baseColor
        });
        $('.circle-bar-left').css('transform', 'rotate(' + ((percent - 50) * 3.6) + 'deg)');
    }
});