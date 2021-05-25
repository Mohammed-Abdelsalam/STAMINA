$(function () {

    'use strict';

    // Navbar Scroll

    var navbar =  $('.navbar');


    $(window).on('scroll', function () {

        if ($(window).scrollTop() > navbar.height()) {

            navbar.addClass('scroll');

        }else {

            navbar.removeClass('scroll');
        }
    });

    // Smoth Scroll

    $('.header .navgation li').on('click', function () {

        $(this).addClass('active').siblings().removeClass('active'); // Add Class

        $('html, body').animate({ // Animate Smoth Scroll
            scrollTop: $($(this).data('class')).offset().top
        }, 700);
        
    });

    // Section Schedule 

    $('.schedule .days li').on('click', function () {

        $(this).addClass('active').siblings().removeClass('active');

        $('.schedule .class > .row').fadeOut(100);

        $($(this).data('id')).fadeIn(100);
    });
});