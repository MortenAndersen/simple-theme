/*global jQuery*/
(function ($) {
    "use strict";
    $(document).ready(function () {

        // Menu icon
        $('#nav-icon').click(function() {
            $(this).toggleClass('open');
            $('.js-nav-toggle').toggleClass('open-mobile-menu');
            $('body').toggleClass('mobile-menu-open');
        });

        // MOBILE MENU //
        $('.all-menu a').click(function() {
            $('.all-menu a').removeClass('active');
            $('.all-menu ul').removeClass('active-trail');
            $(this).addClass('active');
            $(this).parentsUntil('.all-menu').parents('li ul').addClass('active-trail');
        });

        // Sub menu trigger
        $('.all-menu ul').parent('li').append('<span class="menu-trigger"></span>');

        // Sub menu toggle
        $('.menu-trigger').click(function() {
            $(this).siblings('ul').slideToggle().toggleClass('mobile-sibling-open');
            $(this).toggleClass('active-trigger');
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
            prevText: ''
        });


        // Banner Slider
        $('.banner .gallery').bxSlider({
            mode: 'fade',
            speed: 1500,
            auto: true,
            pager: false,
            controls: false
        });


        // Show and Hide
        $('.show-hide-content').hide();
        $('.show-hide-tricker').click(function() {
            $(this).closest(".sh-minus, .sh-plus").toggleClass("sh-minus sh-plus");
            $(this).next('.show-hide-content').slideToggle();
        });

    }); }(jQuery))