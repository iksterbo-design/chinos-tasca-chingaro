/* eslint-env browser */
// CHINO'S TASCA CHINGARO — main.js
(function () {
  // Reveal on scroll
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

  // Cursor glow
  const glow = document.querySelector('.cursor-glow');
  if (glow) {
    window.addEventListener('mousemove', (e) => {
      glow.style.left = e.clientX + 'px';
      glow.style.top = e.clientY + 'px';
    });
  }

  // Reservation form
  const form = document.getElementById('reservaForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const msg = document.getElementById('reservaMsg');
      if (msg) {
        msg.classList.remove('hidden');
        form.reset();
      }
    });
  }

  // Mobile menu toggle
  const toggle = document.getElementById('menuToggle');
  const panel = document.getElementById('mobilePanel');
  if (toggle && panel) {
    toggle.addEventListener('click', () => panel.classList.toggle('open'));
  }

  // Smooth scroll offset for fixed nav
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (id.length > 1) {
        const el = document.querySelector(id);
        if (el) {
          e.preventDefault();
          window.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' });
          if (panel) panel.classList.remove('open');
        }
      }
    });
  });

  // Year
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
  // Service Worker (PWA)
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js').catch(() => {});
    });
  }

  // God Mode easter egg: type "chingaro"
  let buf = '';
  window.addEventListener('keydown', (e) => {
    buf = (buf + e.key.toLowerCase()).slice(-8);
    if (buf.includes('chingaro')) {
      buf = '';
      triggerGodMode();
    }
  });

  function triggerGodMode() {
    const overlay = document.createElement('div');
    overlay.id = 'godMode';
    overlay.style.cssText = 'position:fixed;inset:0;z-index:9999;pointer-events:none;overflow:hidden;';
    document.body.appendChild(overlay);
    const colors = ['#e9c46a', '#e63946', '#2a9d8f', '#ffffff'];
    for (let i = 0; i < 120; i++) {
      const c = document.createElement('div');
      c.style.cssText = `position:absolute;left:${Math.random() * 100}%;top:-20px;width:${6 + Math.random() * 8}px;height:${6 + Math.random() * 8}px;background:${colors[Math.floor(Math.random() * colors.length)]};border-radius:${Math.random() > 0.5 ? '50%' : '2px'};animation:fall ${2 + Math.random() * 2}s linear forwards;`;
      overlay.appendChild(c);
    }
    if (!document.getElementById('godStyle')) {
      const st = document.createElement('style');
      st.id = 'godStyle';
      st.textContent = '@keyframes fall{to{transform:translateY(110vh) rotate(720deg);opacity:0}}';
      document.head.appendChild(st);
    }
    const badge = document.createElement('div');
    badge.textContent = '🔥 GOD MODE: CHINGARO ACTIVATED 🔥';
    badge.style.cssText =
      'position:fixed;top:20px;left:50%;transform:translateX(-50%);z-index:10000;background:linear-gradient(135deg,#e9c46a,#e63946);color:#0a0a0a;padding:12px 24px;border-radius:999px;font-family:Bebas Neue,sans-serif;font-size:1.4rem;letter-spacing:.1em;box-shadow:0 0 40px rgba(234,196,106,.8);';
    document.body.appendChild(badge);
    setTimeout(() => {
      overlay.remove();
      badge.remove();
    }, 4000);
  }
})();
