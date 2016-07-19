$(document).ready(function() {
    $('#owl-demo1').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots: true,
        dotsEach: 3,
        navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    })
  $("#owl-demo2").owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
    $('#demo3').owlCarousel({
        loop:true,
        nav:true,
        animateOut: 'fadeOutLeft',
        animateIn: 'fadeInRight',
        items:1,
        margin:30,
        navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
        stagePadding:30,
        smartSpeed:450
    });
    // $("#demo3").owlCarousel({
    //     loop:true,
    //     margin:10,
    //     nav:true,
    //     responsive:{
    //         0:{
    //             items:1
    //         },
    //         600:{
    //             items:1
    //         },
    //         1000:{
    //             items:1
    //         }
    //     }
    // })
        // Instantiate MixItUp:

    $('#Container').mixItUp();



});    