/**
 * File navigation.js.
 *
 * Handles toggling the navigation menu for small screens
 */
( function($) {

    const mainHeader = document.getElementById( 'site-header' );
    const menuHamburger = document.getElementById( 'menu-hamburger' );
    const mainMenu = document.getElementById('main-navigation');


    function toggleMobileMenu() {
        if ( menuHamburger.classList.contains( 'active' )) {
            menuHamburger.classList.remove( 'active' );
            mainMenu.classList.remove( 'active' );
            document.body.classList.remove( 'no-scroll' );
        } else {
            // set hamburger active for animation
            menuHamburger.classList.add( 'active' );
            // set menu active
            mainMenu.classList.add( 'active' );
            // disable body scroll
            document.body.classList.add( 'no-scroll' );
        }
    }

    // Toggle the mobileNavigation
    menuHamburger.addEventListener( 'click', function() {
        toggleMobileMenu();
    } );

    var menuItems = $('#site-header ul.menu a')
    menuItems.on( "click", function() {
        toggleMobileMenu();
    } );



    // monitor scroll events to hide/unhide the header bar
    var lastScrollTop = 0;

    window.addEventListener("scroll", function(){
        var st = window.scrollY || document.documentElement.scrollTop;
        if (st > lastScrollTop){
            if(st > 200) {
                if(!mainHeader.classList.contains( 'hide' )) {
                    mainHeader.classList.add('hide');
                }
            }
        } else {
            if(mainHeader.classList.contains( 'hide' )) {
                mainHeader.classList.remove( 'hide' );
            }
        }
        lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    }, false);

})(jQuery);