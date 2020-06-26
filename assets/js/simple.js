/*global jQuery*/
(function ($) {
    "use strict";
    $(document).ready(function () {

        // Menu icon
        $('#nav-icon').click(function() {
            $(this).toggleClass('open');
            $('.js-nav-toggle').toggleClass('open-mobile-menu');
            $('body').toggleClass('mobile-menu-open');

            // Aria

            if ($('#nav-icon').attr( 'aria-expanded') === 'true') {
                $(this).attr( 'aria-expanded', 'false');
            } else {
                $(this).attr( 'aria-expanded', 'true');
            }

            if ($('#nav-icon').attr( 'aria-pressed') === 'true') {
                $(this).attr( 'aria-pressed', 'false');
            } else {
                $(this).attr( 'aria-pressed', 'true');
            }

            if ($('#nav-icon').attr( 'aria-label') === 'Åben menu') {
                $(this).attr( 'aria-label', 'Luk menu');
            } else {
                $(this).attr( 'aria-label', 'Åben menu');
            }

            // Aria slut

        });

        // MOBILE MENU //
        $('.all-menu a').click(function() {
            $('.all-menu a').removeClass('active');
            $('.all-menu ul').removeClass('active-trail');
            $(this).addClass('active');
            $(this).parentsUntil('.all-menu').parents('li ul').addClass('active-trail');
        });

        // Sub menu trigger
        $('.all-menu ul').parent('li').append('<span class="menu-trigger" aria-label="Åben undermenu"></span>');

        // Sub menu toggle
        $('.menu-trigger').click(function() {
            $(this).siblings('ul').slideToggle().toggleClass('mobile-sibling-open');
            $(this).toggleClass('active-trigger');

            // Aria

            if ($(this).attr( 'aria-label') === 'Åben undermenu') {
                $(this).attr( 'aria-label', 'Luk undermenu');
            } else {
                $(this).attr( 'aria-label', 'Åben undermenu');
            }


        });

        // WordPress mobile-menu
        $('.current-menu-ancestor > .menu-trigger').addClass('active-trigger');
        $(".all-menu li li:has(ul)").addClass('has-sub-menu');

        // Lightbox
        $('.main figure a, .lightbox-content a, .gallery-item a').attr('data-lightbox', 'content-image');

        // Slider
        $('.slider').bxSlider({
            mode: 'fade',
            auto: true,
            autoHover: true,
            nextText: '',
            prevText: '',

        });

        $('.slider-carousel').bxSlider({
            auto: true,
            autoHover: true,
            pager: false,
            shrinkItems: true,
            minSlides: 1,
            maxSlides: 4,
            slideWidth: 269,
            slideMargin: 20,
            moveSlides: 3,
            mode: 'horizontal',
            nextText: ' > ',
            prevText: ' < ',
        });


        // Banner Slider
        $('.banner .gallery').bxSlider({
            mode: 'fade',
            speed: 1500,
            auto: true,
            pager: false,
            controls: false
        });

        // simpleTheme_banner Slider
        $('.simpleTheme_banner').bxSlider({
            mode: 'fade',
            speed: 1500,
            auto: true,
            pager: false,
            controls: false,
            touchEnabled: false,
            //autoHover: true
        });

        // Video
        $(".video").fitVids();

        // Show and Hide
        $('.show-hide-content').hide();
        $('.show-hide-tricker').click(function() {
            $(this).closest(".sh-minus, .sh-plus").toggleClass("sh-minus sh-plus");
            $(this).next('.show-hide-content').slideToggle();
        });

    }); }(jQuery))