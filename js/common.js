$(function() {

    $(window).on("load",function(){

        $("#navigation-menu a,a[href='#top'],a[rel='m_PageScroll2id']").mPageScroll2id({
            highlightSelector:".pure-menu-list a"
        });

    });

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 200) {
            $(".menu-position-fixed").addClass("menu-bg-y");
            $(".pure-menu-contacts").removeClass("d-none");
            $(".pure-menu-button").removeClass("d-none");
        } else {
            $(".menu-position-fixed").removeClass("menu-bg-y");
            $(".pure-menu-contacts").addClass("d-none");
            $(".pure-menu-button").addClass("d-none");
        }
    });

    $('#responsive-tabs').responsiveTabs({
	    startCollapsed: 'accordion'
	});

    $("#tab-1").css("display","block");
    $("#tab-1").removeClass("r-tabs-state-default");
    $("#tab-1").addClass("r-tabs-state-active");


    $('.owl-carousel').owlCarousel({
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        loop:true,
        margin:10,
        responsiveClass:true,
        nav: false,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:3,
            },
            1000:{
                items:5,
                loop:false
            }
        }
    })

});

// menu

(function (window, document) {
    var menu = document.getElementById('menu'),
        WINDOW_CHANGE_EVENT = ('onorientationchange' in window) ? 'orientationchange':'resize';

    function toggleHorizontal() {
        [].forEach.call(
            document.getElementById('menu').querySelectorAll('.custom-can-transform'),
            function(el){
                el.classList.toggle('pure-menu-horizontal');
            }
        );
    };

    function toggleMenu() {
        // set timeout so that the panel has a chance to roll up
        // before the menu switches states
        if (menu.classList.contains('open')) {
            setTimeout(toggleHorizontal, 500);
        }
        else {
            toggleHorizontal();
        }
        menu.classList.toggle('open');
        document.getElementById('toggle').classList.toggle('x');
    };

    function closeMenu() {
        if (menu.classList.contains('open')) {
            toggleMenu();
        }
    }

    document.getElementById('toggle').addEventListener('click', function (e) {
        toggleMenu();
        e.preventDefault();
    });

    window.addEventListener(WINDOW_CHANGE_EVENT, closeMenu);
    })(this, this.document);


    // SVG map
    window.onload=function() {
        var object = document.getElementById("mapObject");
        var svgDocument = object.contentDocument;
        var svgb1 = svgDocument.getElementsByTagName('path');
        svgb1[135].setAttribute("class", "active-area");
        svgb1[136].setAttribute("class", "active-area");
        svgb1[18].setAttribute("class", "active-area");
        svgb1[14].setAttribute("class", "active-area");
        svgb1[15].setAttribute("class", "active-area");
        svgb1[137].setAttribute("class", "active-area");
        svgb1[138].setAttribute("class", "active-area");
        svgb1[16].setAttribute("class", "active-area");
        svgb1[17].setAttribute("class", "active-area");
        svgb1[114].setAttribute("class", "active-area");
        svgb1[112].setAttribute("class", "active-area");
      };