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
            $("#ScrollToAbout").click(function (){
                $('html, body').animate({
                    scrollTop: $("#about").offset().top
                }, 1000);
            });
            $("#ScrollToProcess").click(function (){
                $('html, body').animate({
                    scrollTop: $("#process").offset().top
                }, 1000);
            });
            $("#ScrollToWork").click(function (){
                $('html, body').animate({
                    scrollTop: $("#work").offset().top
                }, 1000);
            });            
            $("#ScrollToPricing").click(function (){
                $('html, body').animate({
                    scrollTop: $("#pricing").offset().top
                }, 1000);
            });

            $("#ScrollToContact").click(function (){
                $('html, body').animate({
                    scrollTop: $("#contact").offset().top
                }, 1000);
            });
    // Instantiate MixItUp:
    $('#Container').mixItUp();
    // wow animation
    new WOW().init();

    // Scrollspy: Highlights the navigation menu items while scrolling.
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })     



});    