(function () {
  'use strict';

  // Navbar shrink on scroll
  var navbar = document.querySelector('.navbar');
  var scrollTopBtn = document.querySelector('.scroll-top');
  var scrollThreshold = 50;
  var topBtnThreshold = 300;

  function onScroll() {
    var y = window.scrollY || window.pageYOffset;

    // Navbar shrink
    if (navbar) {
      if (y > scrollThreshold) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    // Scroll-to-top button
    if (scrollTopBtn) {
      if (y > topBtnThreshold) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Scroll-to-top click
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
})();
