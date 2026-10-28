/**
 * Intellia360 Games — Official Educational Landing Page Script
 * Vanilla JavaScript for navigation reliability, accessible card clicks, and smooth scrolling
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // Check user preference for reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* --------------------------------------------------------------------------
     1. Sticky Header & Elevation on Scroll
     -------------------------------------------------------------------------- */
  const siteHeader = document.getElementById('siteHeader');
  
  const handleHeaderScroll = () => {
    if (!siteHeader) return;
    if (window.scrollY > 20) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleHeaderScroll, { passive: true });
  handleHeaderScroll();

  /* --------------------------------------------------------------------------
     2. Game Card Navigation & Conflict Prevention
     Ensures clicking any part of the card, thumbnail image, or "PLAY NOW" button
     reliably opens the game's exact URL in the same tab by default.
     -------------------------------------------------------------------------- */
  const gameCards = document.querySelectorAll('.game-card');

  gameCards.forEach((card) => {
    card.addEventListener('click', (event) => {
      // Respect user modifier keys (Ctrl/Cmd click, middle click, Shift click)
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) {
        return;
      }

      const targetUrl = card.getAttribute('href');
      if (targetUrl && targetUrl !== '#' && !targetUrl.startsWith('javascript:')) {
        event.preventDefault();
        window.location.href = targetUrl;
      }
    });

    // Keyboard accessibility: Enter or Space activates link
    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        const targetUrl = card.getAttribute('href');
        if (targetUrl) {
          window.location.href = targetUrl;
        }
      }
    });
  });

  /* --------------------------------------------------------------------------
     3. Smooth Scrolling for Internal Navigation Links
     -------------------------------------------------------------------------- */
  const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

  smoothScrollLinks.forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
      const targetId = anchor.getAttribute('href');
      if (!targetId || targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        event.preventDefault();
        targetElement.scrollIntoView({
          behavior: prefersReducedMotion ? 'auto' : 'smooth',
          block: 'start'
        });

        if (history.pushState) {
          history.pushState(null, null, targetId);
        }
      }
    });
  });

  /* --------------------------------------------------------------------------
     4. Subtle Parallax for Math Symbols on Mouse Movement
     -------------------------------------------------------------------------- */
  const mathField = document.getElementById('mathField');

  if (!prefersReducedMotion && mathField && window.innerWidth > 992) {
    let ticking = false;

    window.addEventListener('mousemove', (event) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const { clientX, clientY } = event;
          const centerX = window.innerWidth / 2;
          const centerY = window.innerHeight / 2;

          const offsetX = (clientX - centerX) / centerX;
          const offsetY = (clientY - centerY) / centerY;

          const mathItems = mathField.querySelectorAll('.math-item');
          mathItems.forEach((item, index) => {
            const factor = ((index % 3) + 1) * 4;
            item.style.transform = `translate(${offsetX * factor}px, ${offsetY * factor}px)`;
          });

          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  /* --------------------------------------------------------------------------
     5. Universal Hamburger Navigation Drawer
     Allows selecting and jumping between games from any page in the arcade
     -------------------------------------------------------------------------- */
  const hamburgerBtns = document.querySelectorAll('.hamburger-btn');
  const gamesDrawer = document.getElementById('gamesNavDrawer');
  const drawerBackdrop = document.getElementById('drawerBackdrop');
  const drawerCloseBtn = document.getElementById('drawerCloseBtn');

  const openDrawer = () => {
    if (!gamesDrawer || !drawerBackdrop) return;
    gamesDrawer.classList.add('is-open');
    drawerBackdrop.classList.add('is-open');
    gamesDrawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    hamburgerBtns.forEach((btn) => {
      btn.classList.add('is-active');
      btn.setAttribute('aria-expanded', 'true');
    });
  };

  const closeDrawer = () => {
    if (!gamesDrawer || !drawerBackdrop) return;
    gamesDrawer.classList.remove('is-open');
    drawerBackdrop.classList.remove('is-open');
    gamesDrawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    hamburgerBtns.forEach((btn) => {
      btn.classList.remove('is-active');
      btn.setAttribute('aria-expanded', 'false');
    });
  };

  hamburgerBtns.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      event.stopPropagation();
      const isOpen = gamesDrawer && gamesDrawer.classList.contains('is-open');
      if (isOpen) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });
  });

  if (drawerCloseBtn) {
    drawerCloseBtn.addEventListener('click', (event) => {
      event.preventDefault();
      closeDrawer();
    });
  }

  if (drawerBackdrop) {
    drawerBackdrop.addEventListener('click', closeDrawer);
  }

  // Keyboard accessibility: Escape key closes the drawer
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && gamesDrawer && gamesDrawer.classList.contains('is-open')) {
      closeDrawer();
    }
  });

  // Clicking any drawer link closes the drawer cleanly
  const drawerLinks = document.querySelectorAll('.drawer-game-link, .drawer-home-item');
  drawerLinks.forEach((link) => {
    link.addEventListener('click', () => {
      closeDrawer();
    });
  });

});

