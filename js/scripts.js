/*carousel parameters*/
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    autoWidth: false,

    navText: ['<i class="fa fa-arrow-circle-left" title="Anterior"></i>', '<i class="fa  fa-arrow-circle-right" title="Siguiente"></i>'],
    responsive: {
        0: {
            items: 1
        },
        400: {
            items: 2,
            margin: 20
        },
        800: {
            items: 3,
            margin: 20
        },
        1000: {
            items: 4,
            margin: 20
        }
    }
});

/*instanciates wowjs lib*/
new WOW().init();

/*instanciates smoothScroll lib*/
smoothScroll.init({
    speed: 1000, //How fast it goes
    offset: 50, //How far it goes
});

/*hides site-title after 15sec*/
$(".card").show();
setTimeout(function() {
    $(".card").hide();
}, 15000);

/* waypoints for scrolling down over the homepage */
$(document).ready(function() {
    var waypoint = $('.card').waypoint({
        handler: function(direction) {
            if (this.element.triggerPoint = '300') {
                $('.scroll-down').attr('href', '#services')
            }
        },
        offset: '100'
    });
    var waypoint1 = $('.services').waypoint({
        handler: function(direction) {
            if (this.element.triggerPoint = '1') {
                $('.scroll-down').attr('href', '#projects')
            }
        },
        offset: '100'
    });
    var waypoint2 = $('.projects').waypoint({
        handler: function(direction) {
            if (this.element.triggerPoint = '1') {
                $('.scroll-down').attr('href', '#summary')
            }
        },
        offset: '100'
    });
    var waypoint2 = $('.summary').waypoint({
        handler: function(direction) {
            if (this.element.triggerPoint = '1') {
                $('.scroll-down').attr('href', '#contact')
            }
        },
        offset: '100'
    })
});

/* hides scroll-down */
$(document).scroll(function() {
    if ($(this).scrollTop() > 1600) {
        $('.scroll-down').hide();
    } else {
        $('.scroll-down').show();
    }
});