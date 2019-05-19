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

    $('#responsiveTabsDemo').responsiveTabs({
	    startCollapsed: 'accordion'
	});


});

// $("html").addClass("myClass");

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

