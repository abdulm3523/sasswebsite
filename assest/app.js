// Menu toggoler BUTTON 
$(document).ready(function () {

    // Menu togolle
    $('.togoller_btn').click(function () {
        $('.main-menu').toggleClass('active');

    })
    // Menu togolle closed
    $('.togoller_btn_closed').click(function () {
        $('.main-menu').removeClass('active');

    })

    // submanu toggoler
    $('.main-menu li').click(function () {
        $(this).children('.dropdown_menu').toggleClass('active');

    })
});


// MENU WILL FIXED When window will scroll
$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 50) {
        $('header').addClass('fixed');
    } else {
        $('header').removeClass('fixed');
    }
});

// ========================
// LANDING PAGE SCRIPT HERE
// ========================

// FEATURES SLIDER SCRIPT 
$('.features_items_container').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    speed: 400,
    dots: true,
    responsive: [


    ]

});
// FEATURES SLIDER SCRIPT END

// CREATORS PROFILE SLIDER SCRIPT 
$('.creator_profile_slide').slick({
    slidesToShow: 7,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1000,
            settings: {
                arrows: false,
                slidesToShow: 6
            }
        },
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                slidesToShow: 4
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                slidesToShow: 3
            }
        }
    ]

});
// CREATORS PROFILE SLIDER SCRIPT END

// ========================
// LANDING PAGE SCRIPT END HERE
// ========================
