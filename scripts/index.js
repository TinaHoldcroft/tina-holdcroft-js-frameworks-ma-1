$(document).ready(function () { carouselNavigation(); });
const images = $('.list-images li').length;
let imgPosition = 1;

function carouselNavigation() {
    $('.list-images, .navigation').css({ 'list-style': 'none', 'text-align': 'center' });
    for (i = 1; i <= images; i++) { $('.navigation li:eq(0)').after('<li class="circle icons--default"><span class="fa fa-circle"></span></li>'); }
    $('.navigation li').css({ 'display': 'inline', 'cursor': 'pointer', 'margin': '1em' });
    $('.list-images li').hide();
    $('.list-images li:first').show();
    $('.navigation li span:eq(1)').addClass('icons--active');
    $('.navigation .circle').click(pageNavigation);
    $('.right span').click(forward);
    $('.left span').click(back);
    setInterval(function () { forward() }, 5000);
}
function pageNavigation() {
    let pageNavigationPosition = $(this).index();
    imgPosition = pageNavigationPosition;
    $('.list-images li').hide();
    $('.list-images li:nth-child(' + pageNavigationPosition + ')').fadeIn();
    $('.navigation li span:eq(1)').removeClass('icons--active');
    $('.navigation li').addClass('icons--default');
    $('.navigation li').removeClass('icons--active');
    $('.navigation li:eq(' + (pageNavigationPosition) + ')').addClass('icons--active');
}
function forward() {
    if (imgPosition >= images) { imgPosition = 1;} 
    else { imgPosition++; }
    $('.navigation li span:eq(1)').removeClass('icons--active');
    $('.navigation li').addClass('icons--default');
    $('.navigation li').removeClass('icons--active');
    $('.navigation li:eq(' + (imgPosition) + ')').addClass('icons--active');
    $('.list-images li').hide();
    $('.list-images li:nth-child(' + imgPosition + ')').fadeIn();
}
function back() {
    if (imgPosition <= 1) { imgPosition = images; } 
    else { imgPosition--; }
    $('.navigation li span:eq(1)').removeClass('icons--active');
    $('.navigation li').addClass('icons--default');
    $('.navigation li').removeClass('icons--active')
    $('.navigation li:eq(' + (imgPosition) + ')').addClass('icons--active');
    $('.list-images li').hide();
    $('.list-images li:nth-child(' + imgPosition + ')').fadeIn();
}