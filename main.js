// Fade class to animate elements after page load so content is always visible even if JS fails
const animatables = [
  '.section-title', '.section-sub', '.about-text',
  '.member-card', '.project-card',
  '.news-card', '.interest-card'
];

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+/<>?{}[]\\|';

window.addEventListener('DOMContentLoaded', () => {
  const els = document.querySelectorAll(animatables.join(', '));
  els.forEach(el => el.classList.add('will-fade'));

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  els.forEach(el => obs.observe(el));

  // Glitch animation
  const rand = () => chars[Math.floor(Math.random() * chars.length)];

  document.querySelectorAll('.glitch-chars').forEach(span => {
    const len = parseInt(span.dataset.len);
    span.textContent = Array.from({ length: len }, rand).join('');
    // randomizing each character independently
    setInterval(() => {
      span.textContent = Array.from({ length: len }, rand).join('');
    }, 80);
  });
});
