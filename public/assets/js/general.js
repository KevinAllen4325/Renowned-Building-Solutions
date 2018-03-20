//TESTIMONIAL SLIDE SHOW
$('.testimonial-text').slick({
    autoplay: true,
    swipe: false,
    infinite: true,
    arrows: false,
    autoplaySpeed: 5000,
    dots: true,
    adaptiveHeight: true
});
//NAVIGATION DROP DOWNS
$('.search-icon').on('click', function() {
    $('.nav-search').toggleClass('nav-search-open', 250);
    $('.search-icon').toggleClass('fa-times', 250);
    $('#tipue_search_input').val("");
    $('#tipue_search_input').focus();
});
$('.nav-service').on('click', function() {
    $('.service-dropdown').toggleClass('service-open', 250);
});

//OPEN AND CLOSE FREE ESTIMATE OVERLAY FORM
$('#free-estimate, .free-estimate').on('click', function() {
    $('.overlay').addClass('overlay-open', 350);
});
$('.estimate-close').on('click', function() {
    $('.overlay').removeClass('overlay-open', 350);
});
$('.more-blue').on('click', function() {
    $('.overlay').addClass('overlay-open', 350);
});