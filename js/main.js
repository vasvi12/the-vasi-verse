/**
 * The Vasi Verse — shared interaction layer.
 * Motion rules follow docs/01_BRAND/Motion.md: calm, purposeful, never bounce.
 */
(function () {
  'use strict';

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Footer year */
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* Nav scroll state — transparent until scrolled, then blurred surface */
  var nav = document.querySelector('.nav');
  if (nav) {
    var updateNavState = function () {
      nav.classList.toggle('is-scrolled', window.scrollY > 8);
    };
    updateNavState();
    window.addEventListener('scroll', updateNavState, { passive: true });
  }

  /* Mobile nav toggle */
  var navToggle = document.querySelector('.nav-toggle');
  var navLinks = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      var isOpen = navLinks.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* Hero entrance — plays once per session per page, never replays on refresh within the session */
  var hero = document.querySelector('[data-hero]');
  if (hero) {
    var heroKey = 'vasiverse-hero-' + (hero.getAttribute('data-hero') || 'default');
    var alreadyPlayed = prefersReducedMotion || sessionStorage.getItem(heroKey);
    if (alreadyPlayed) {
      hero.classList.add('hero-ready');
    } else {
      requestAnimationFrame(function () {
        hero.classList.add('hero-ready');
        sessionStorage.setItem(heroKey, '1');
      });
    }
  }

  /* Scroll reveal — fade + move up 12px, never re-hide once shown */
  var revealTargets = document.querySelectorAll('[data-reveal]');
  if (revealTargets.length) {
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      revealTargets.forEach(function (el) { el.classList.add('is-visible'); });
    } else {
      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
      );
      revealTargets.forEach(function (el) { observer.observe(el); });
    }
  }

  /* Smooth scroll for in-page anchors (e.g. Explore My Work → cards section) */
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (event) {
      var targetId = link.getAttribute('href');
      if (!targetId || targetId === '#') return;
      var target = document.querySelector(targetId);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });
    });
  });

  /* Contact form — minimal client-side handling, no backend wired yet */
  var contactForm = document.querySelector('[data-contact-form]');
  if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();
      var name = contactForm.querySelector('#name').value.trim();
      var email = contactForm.querySelector('#email').value.trim();
      var message = contactForm.querySelector('#message').value.trim();
      var subject = encodeURIComponent('Hello from ' + (name || 'The Vasi Verse'));
      var body = encodeURIComponent(message + (email ? '\n\n— ' + name + ' (' + email + ')' : '\n\n— ' + name));
      var mailto = contactForm.getAttribute('data-contact-form');
      window.location.href = mailto + '?subject=' + subject + '&body=' + body;
    });
  }
})();
