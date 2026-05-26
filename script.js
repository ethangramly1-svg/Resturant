/* YUEN'S — minimal interactions */

(() => {
  'use strict';

  /* Mobile nav toggle ──────────────────────────────────────────── */
  const nav    = document.getElementById('nav');
  const toggle = nav?.querySelector('.nav__toggle');
  const mobile = nav?.querySelector('.nav__mobile');

  toggle?.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  // Close mobile nav when a link is tapped
  mobile?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });


  /* Menu category filter ──────────────────────────────────────── */
  const tabs = document.querySelectorAll('.menu__tab');
  const cats = document.querySelectorAll('.menu__cat');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.cat;

      tabs.forEach(t => {
        const active = t === tab;
        t.classList.toggle('is-active', active);
        t.setAttribute('aria-selected', String(active));
      });

      cats.forEach(cat => {
        cat.hidden = target !== 'all' && cat.dataset.cat !== target;
      });

      // Scroll the menu section into view when filtering on mobile
      if (window.innerWidth < 900 && target !== 'all') {
        const menu = document.getElementById('menu');
        const top = menu.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

})();
