/*================================================
[  Table of contents  ]
================================================

    1. Mobile Menu (meanmenu js)
    2. Mega Menu Column Support
    3. Current Year Copyright area
    4. Background Image
    4. Slick Carousel 
        4.1 Active Slider - 1 (home-1)
        4.2 Active By Brand
        4.3 Active Featured Product
        4.4 Active Blog
        4.5 Active Blog 2
        4.6 Active Related Product
		4.7 Active Team Member
    5. Countdown
    6. ScrollUp
    7. Tooltip 
    8. Treeview active
    9. Price Slider
    10. Fancybox active
    11. Elevate Zoom active 
    12. single-product-zoom-image carousel
    13. Cart Plus Minus Button
    14. bootstrap accordion one open at a time
    15. Cart tab menu active
    16. Blog page manu dropdown 
    17. Background Toutube Video 
    18. STICKY sticky-header

======================================
[ End table content ]
======================================*/




(function($) {
    "use strict";
  
    jQuery(document).ready(function(){
        /* Code Here */
        
        /* --------------------------------------------------------
            Variables
        --------------------------------------------------------- */
        var $window = $(window),
        $body = $('body');

        /* ---------------------------------
            Utilize Function (Mobile Menu)
        ----------------------------------- */
        (function () {
            var $ltn__utilizeToggle = $('.ltn__utilize-toggle'),
                $ltn__utilize = $('.ltn__utilize'),
                $ltn__utilizeOverlay = $('.ltn__utilize-overlay'),
                $mobileMenuToggle = $('.mobile-menu-toggle');
            $ltn__utilizeToggle.on('click', function (e) {
                e.preventDefault();
                var $this = $(this),
                    $target = $this.attr('href');
                $body.addClass('ltn__utilize-open');
                $($target).addClass('ltn__utilize-open');
                $ltn__utilizeOverlay.fadeIn();
                if ($this.parent().hasClass('mobile-menu-toggle')) {
                    $this.addClass('close');
                }
            });
            $('.ltn__utilize-close, .ltn__utilize-overlay').on('click', function (e) {
                e.preventDefault();
                $body.removeClass('ltn__utilize-open');
                $ltn__utilize.removeClass('ltn__utilize-open');
                $ltn__utilizeOverlay.fadeOut();
                $mobileMenuToggle.find('a').removeClass('close');
            });
        })();

        /* ------------------------------------
            Utilize Menu
        ----------------------------------- */
        function mobileltn__utilizeMenu() {
            var $ltn__utilizeNav = $('.ltn__utilize-menu, .overlay-menu'),
                $ltn__utilizeNavSubMenu = $ltn__utilizeNav.find('.sub-menu');

            /*Add Toggle Button With Off Canvas Sub Menu*/
            $ltn__utilizeNavSubMenu.parent().prepend('<span class="menu-expand"></span>');

            /*Category Sub Menu Toggle*/
            $ltn__utilizeNav.on('click', 'li a, .menu-expand', function (e) {
                var $this = $(this);
                if ($this.attr('href') === '#' || $this.hasClass('menu-expand')) {
                    e.preventDefault();
                    if ($this.siblings('ul:visible').length) {
                        $this.parent('li').removeClass('active');
                        $this.siblings('ul').slideUp();
                        $this.parent('li').find('li').removeClass('active');
                        $this.parent('li').find('ul:visible').slideUp();
                    } else {
                        $this.parent('li').addClass('active');
                        $this.closest('li').siblings('li').removeClass('active').find('li').removeClass('active');
                        $this.closest('li').siblings('li').find('ul:visible').slideUp();
                        $this.siblings('ul').slideDown();
                    }
                }
            });
        }
        mobileltn__utilizeMenu();


        /* ---------------------------------------------------------
            3. One Page Navigation ( jQuery Easing Plugin )
        --------------------------------------------------------- */
        //jQuery for page scrolling feature - requires jQuery Easing plugin
        $(function() {
            $('a.page-scroll').bind('click', function(event) {
                var $anchor = $(this);
                $('html, body').stop().animate({
                    scrollTop: $($anchor.attr('href')).offset().top
                }, 1500, 'easeInOutExpo');
                event.preventDefault();
            });
        });


        /* ---------------------------------------------------------
            3. Current Year Copyright area
        --------------------------------------------------------- */
        $(".current-year").text((new Date).getFullYear());


        /* ---------------------------------------------------------
            4. Background Image
        --------------------------------------------------------- */
        var $backgroundImage = $('.bg-image, .bg-image-top');
        $backgroundImage.each(function() {
            var $this = $(this),
                $bgImage = $this.data('bg');
            $this.css('background-image', 'url('+$bgImage+')');
        });




    });

})(jQuery);