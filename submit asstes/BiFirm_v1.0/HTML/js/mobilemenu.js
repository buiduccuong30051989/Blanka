jQuery(document).ready(function ($) {
  var btn = document.querySelector('#js-mobile-menu-btn');

  if (btn) {
    var menu = new MmenuLight(btn, {// title: 'Menu',
      // theme: 'light',// 'dark'
      // slidingSubmenus: true,// false
      // selected: 'Selected'
    });
    menu.enable('all'); // '(max-width: 900px)'

    menu.offcanvas({// position: 'left',// 'right'
      // move: true,// false
      // blockPage: true,// false / 'modal'
    }); //	Open the menu.
  }

  var menuBtn = document.querySelector('a[href="#js-mobile-menu-btn"]');

  if (menuBtn) {
    menuBtn.addEventListener('click', function (evnt) {
      menu.open(); //	Don't forget to "preventDefault" and to "stopPropagation".

      evnt.preventDefault();
      evnt.stopPropagation();
    });
  }
});