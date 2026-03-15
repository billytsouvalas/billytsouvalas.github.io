(function () {
  'use strict';

  // Navbar shrink on scroll
  var navbar = document.querySelector('.navbar');
  var scrollTopBtn = document.querySelector('.scroll-top');
  var scrollProgress = document.querySelector('.scroll-progress');
  var scrollThreshold = 50;
  var topBtnThreshold = 300;

  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    var docHeight = document.documentElement.scrollHeight - window.innerHeight;

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

    // Scroll progress bar
    if (scrollProgress && docHeight > 0) {
      var pct = (y / docHeight) * 100;
      scrollProgress.style.width = pct + '%';
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

  // Dark / Light mode toggle
  var themeToggle = document.querySelector('.theme-toggle');

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem('theme', theme); } catch (e) {}
  }

  // Load saved theme
  var saved = null;
  try { saved = localStorage.getItem('theme'); } catch (e) {}
  if (saved === 'light' || saved === 'dark') {
    setTheme(saved);
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      var current = document.documentElement.getAttribute('data-theme');
      setTheme(current === 'light' ? 'dark' : 'light');
    });
  }

  // Glitch effect on hero name (fire once on load)
  var heroName = document.querySelector('.hero-name.glitch');
  if (heroName) {
    heroName.setAttribute('data-text', heroName.textContent);
    heroName.addEventListener('animationend', function () {
      heroName.classList.remove('glitch');
    });
  }
})();
