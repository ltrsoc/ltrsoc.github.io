// Add fade class to animatable elements after page load
// This way content is always visible even if JS fails
const animatables = [
  '.section-title', '.section-sub', '.about-text',
  '.member-card', '.project-card',
  '.news-card', '.interest-card'
];

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
});
