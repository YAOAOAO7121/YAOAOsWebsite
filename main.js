/* =============================================
   Shi-en Lin — Shared JS
   ============================================= */

// ---- Custom cursor ----
(function() {
  const cursor = document.getElementById('cursor');
  if (!cursor) return;
  let mx = 0, my = 0, cx = 0, cy = 0;
  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
  (function animC() {
    cx += (mx - cx) * .15;
    cy += (my - cy) * .15;
    cursor.style.left = cx + 'px';
    cursor.style.top = cy + 'px';
    requestAnimationFrame(animC);
  })();
  // Big on interactive elements
  document.querySelectorAll('a, button, [data-hover]').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('big'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('big'));
  });
  // Hide on inputs
  document.querySelectorAll('input, textarea').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hidden'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hidden'));
  });
  document.addEventListener('mouseleave', () => cursor.classList.add('hidden'));
  document.addEventListener('mouseenter', () => cursor.classList.remove('hidden'));
})();

// ---- Click sparks ----
(function() {
  const colors = ['#D4722A','#C9A84C','#B84C1E','#7A8C6E','#F0E6D3'];
  document.addEventListener('click', e => {
    for (let i = 0; i < 7; i++) {
      const s = document.createElement('div');
      s.className = 'spark';
      const angle = Math.random() * Math.PI * 2;
      const dist  = 25 + Math.random() * 45;
      s.style.cssText = `left:${e.clientX}px;top:${e.clientY}px;background:${colors[i % colors.length]};--dx:${Math.cos(angle)*dist}px;--dy:${Math.sin(angle)*dist}px;`;
      document.body.appendChild(s);
      setTimeout(() => s.remove(), 560);
    }
  });
})();

// ---- Scroll reveal ----
(function() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 60);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: .12 });
  document.querySelectorAll('.reveal').forEach(r => obs.observe(r));
})();

// ---- Nav shrink on scroll + active link ----
(function() {
  const nav = document.querySelector('nav');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  });
})();

// ---- Toast helper ----
function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg || '已儲存 ✓';
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2000);
}
