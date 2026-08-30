/**
 * The Vasi Verse — shared interaction layer.
 * Motion rules follow docs/01_BRAND/Motion.md: calm, purposeful, never bounce.
 */
(function () {
  'use strict';

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var supportsFineHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  /* Footer year */
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* Unified scroll updater — nav background state + the home hero's
     scroll-out (--hero-scroll custom property, read by CSS). One passive,
     rAF-batched listener instead of several, so mobile scroll stays cheap.
     Never calls preventDefault — native scrolling is left completely alone. */
  var nav = document.querySelector('.nav');
  var homeHero = document.querySelector('.home-hero[data-hero]');
  if (nav || (homeHero && !prefersReducedMotion)) {
    var scrollTicking = false;
    var updateOnScroll = function () {
      if (nav) {
        nav.classList.toggle('is-scrolled', window.scrollY > 8);
      }
      if (homeHero && !prefersReducedMotion) {
        var heroHeight = homeHero.offsetHeight || 1;
        var progress = -homeHero.getBoundingClientRect().top / heroHeight;
        progress = Math.min(Math.max(progress, 0), 1);
        homeHero.style.setProperty('--hero-scroll', progress.toFixed(3));
      }
      scrollTicking = false;
    };
    var requestScrollUpdate = function () {
      if (!scrollTicking) {
        scrollTicking = true;
        requestAnimationFrame(updateOnScroll);
      }
    };
    updateOnScroll();
    window.addEventListener('scroll', requestScrollUpdate, { passive: true });
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

  /* Flip cards — the 3D card turn (Builds / Playground). Desktop hover and
     keyboard focus are handled entirely by CSS (:hover, :focus-within). Each
     card carries a .flip-trigger button on both the front (flip in) and
     back (flip out) so touch users always have a way back — a plain click
     listener covers mouse, touch and keyboard alike, since a real <button>
     gets Enter/Space activation for free. Both triggers on a card stay in
     sync so their aria-pressed state never contradicts the visible face. */
  document.querySelectorAll('.flip-card').forEach(function (card) {
    var triggers = card.querySelectorAll('.flip-trigger');
    triggers.forEach(function (trigger) {
      trigger.addEventListener('click', function () {
        var isFlipped = card.classList.toggle('is-flipped');
        triggers.forEach(function (t) { t.setAttribute('aria-pressed', String(isFlipped)); });
      });
    });
  });

  /* Mobile equivalent of the desktop hover-flip: on touch/coarse-pointer
     devices there's no hover, so each clickable flip card flips once,
     naturally, as it meaningfully enters the viewport while scrolling —
     then stops being observed, so it never re-flips on scrolling back up
     or down past it again. Desktop (fine hover) and reduced-motion both
     skip this entirely and keep their existing behavior untouched. */
  if (!supportsFineHover && !prefersReducedMotion && 'IntersectionObserver' in window) {
    // [data-card-href] sits directly on .flip-card for Playground/Case
    // Studies/gateway cards, but one level up on the <article> for Builds
    // rows — observe whichever element is the actual visible card boundary,
    // then flip the nested .flip-card when that boundary enters view.
    var autoFlipHosts = [];
    document.querySelectorAll('[data-card-href]').forEach(function (host) {
      var card = host.classList.contains('flip-card') ? host : host.querySelector('.flip-card');
      if (card) autoFlipHosts.push({ host: host, card: card });
    });
    if (autoFlipHosts.length) {
      var autoFlipObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var match = autoFlipHosts.filter(function (h) { return h.host === entry.target; })[0];
          if (!match) return;
          match.card.classList.add('is-flipped');
          match.card.querySelectorAll('.flip-trigger').forEach(function (t) { t.setAttribute('aria-pressed', 'true'); });
          autoFlipObserver.unobserve(entry.target);
        });
      }, { threshold: 0.25 });
      // Wait for an actual scroll before observing — a card already sitting
      // in the viewport at page load hasn't "scrolled into view" yet, so it
      // should keep its front face until the user starts scrolling.
      window.addEventListener('scroll', function beginAutoFlipObserving() {
        window.removeEventListener('scroll', beginAutoFlipObserving);
        autoFlipHosts.forEach(function (h) { autoFlipObserver.observe(h.host); });
      }, { passive: true, once: true });
    }
  }

  /* Whole-card click-through (Builds rows, Case Studies cards) — clicking
     anywhere on a [data-card-href] card opens its destination, without
     wrapping the card (which already contains a real CTA link and flip
     buttons) in a nested <a>. Clicks that land on an actual link/button —
     the CTA itself, or a flip-trigger — are left alone so those keep their
     own native/toggle behavior instead of double-firing. A text selection
     in progress also skips navigation, so selecting the description text
     doesn't accidentally trigger it. */
  document.querySelectorAll('[data-card-href]').forEach(function (card) {
    card.addEventListener('click', function (event) {
      if (event.target.closest('a, button')) return;
      var selection = window.getSelection();
      if (selection && selection.type === 'Range') return;
      var url = card.getAttribute('data-card-href');
      var target = card.getAttribute('data-card-target');
      if (target) {
        window.open(url, target, 'noopener');
      } else {
        window.location.href = url;
      }
    });
  });

  /* Magnetic primary CTA — desktop, fine-pointer only. Reuses the button's
     existing hover transition (var(--dur-micro)) for the smooth return. */
  if (!prefersReducedMotion && supportsFineHover) {
    var MAGNETIC_MAX = 4; // px, per spec
    document.querySelectorAll('.btn-primary').forEach(function (btn) {
      btn.addEventListener('pointermove', function (event) {
        if (event.pointerType && event.pointerType !== 'mouse') return;
        var rect = btn.getBoundingClientRect();
        var relX = (event.clientX - rect.left) / rect.width - 0.5;
        var relY = (event.clientY - rect.top) / rect.height - 0.5;
        var moveX = Math.max(Math.min(relX * 2 * MAGNETIC_MAX, MAGNETIC_MAX), -MAGNETIC_MAX);
        var moveY = Math.max(Math.min(relY * 2 * MAGNETIC_MAX, MAGNETIC_MAX), -MAGNETIC_MAX);
        btn.style.transitionDuration = '0ms';
        btn.style.transform = 'translateY(-2px) translate(' + moveX.toFixed(2) + 'px, ' + moveY.toFixed(2) + 'px)';
      });
      btn.addEventListener('pointerleave', function () {
        btn.style.transitionDuration = '';
        btn.style.transform = '';
      });
    });
  }

  /* Electric cursor trail — desktop, fine-pointer only. A handful of small
     dots lerp toward the pointer and fade out quickly when it stops or
     leaves the document. Created lazily; nothing is added to the DOM at
     all on touch/coarse-pointer/reduced-motion so mobile pays no cost. */
  if (!prefersReducedMotion && supportsFineHover && 'requestAnimationFrame' in window) {
    var TRAIL_COUNT = 5;
    var TRAIL_EASE = 0.35;
    var IDLE_MS = 150;

    var dots = [];
    for (var i = 0; i < TRAIL_COUNT; i++) {
      var dot = document.createElement('span');
      dot.className = 'cursor-trail';
      dot.setAttribute('aria-hidden', 'true');
      var scale = 1 - i / TRAIL_COUNT;
      dot.style.width = (4 + scale * 4).toFixed(1) + 'px';
      dot.style.height = dot.style.width;
      dot.style.opacity = '0';
      document.body.appendChild(dot);
      dots.push({ el: dot, x: 0, y: 0, targetOpacity: 0, baseOpacity: 0.45 * scale + 0.08 });
    }

    var pointerX = null;
    var pointerY = null;
    var lastMoveTime = 0;
    var trailActive = false;

    var startTrailLoop = function () {
      if (trailActive) return;
      trailActive = true;
      requestAnimationFrame(stepTrail);
    };

    function stepTrail() {
      var now = performance.now();
      var idle = pointerX === null || now - lastMoveTime > IDLE_MS;

      var leaderX = pointerX;
      var leaderY = pointerY;
      for (var j = 0; j < dots.length; j++) {
        var d = dots[j];
        if (leaderX !== null) {
          d.x += (leaderX - d.x) * TRAIL_EASE;
          d.y += (leaderY - d.y) * TRAIL_EASE;
          d.el.style.transform = 'translate3d(' + d.x.toFixed(1) + 'px, ' + d.y.toFixed(1) + 'px, 0)';
        }
        d.el.style.opacity = idle ? '0' : String(d.baseOpacity);
        leaderX = d.x;
        leaderY = d.y;
      }

      if (idle && pointerX === null) {
        trailActive = false;
        return;
      }
      requestAnimationFrame(stepTrail);
    }

    document.addEventListener('pointermove', function (event) {
      if (event.pointerType && event.pointerType !== 'mouse') return;
      pointerX = event.clientX;
      pointerY = event.clientY;
      lastMoveTime = performance.now();
      startTrailLoop();
    }, { passive: true });

    document.addEventListener('pointerleave', function () {
      pointerX = null;
      pointerY = null;
      dots.forEach(function (d) { d.el.style.opacity = '0'; });
    });

    document.addEventListener('visibilitychange', function () {
      if (document.hidden) {
        pointerX = null;
        pointerY = null;
        dots.forEach(function (d) { d.el.style.opacity = '0'; });
      }
    });
  }
})();
