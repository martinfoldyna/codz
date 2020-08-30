// 3D Hover initialization
    $('.project').hover3d({
        selector: ".project_card"
    });

//Animate.css + Waypoints.js setup to animate content;
$(window).on('load', () => {
    $('.logo').addClass('animated bounceInDown');
    $('#hero-heading').addClass('animated bounceInLeft');
    $('.hero-mockup').addClass('animated bounceInRight');
    $('.arrow').addClass('animated bounceInUp');
})

$('#about-us').waypoint(() => {
    $('#about-us p').addClass('animated bounceInRight')
}, {
    offset: '80%'
})

$('#our-work').waypoint(() => {
    $('.tile:first-of-type').addClass('animated bounceInLeft')
    $('.tile:nth-of-type(2)').addClass('animated bounceInRight')
}, {
    offset: '80%'
})

$('#our-work').waypoint(() => {
    $('.tile:first-of-type').addClass('animated bounceInLeft')
    $('.tile:nth-of-type(2)').addClass('animated bounceInRight')
}, {
    offset: '80%'
})

let buttonsOffset = "20%";
if (Modernizr.mq('only screen and (min-width : 768px) and (max-width : 1024px) and (orientation : portrait)')) {
    buttonsOffset = "30%";
} else {
    buttonsOffset = "20%";
}

$('.tile:nth-of-type(2)').waypoint(() => {
    $('.buttons .outline').addClass('animated bounceInLeft')
    $('.buttons .fill').addClass('animated bounceInRight')
    $('footer').addClass('animated fadeInUp')
}, {
    offset: buttonsOffset
})








