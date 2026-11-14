// Apparition des sections au défilement
const io = new IntersectionObserver(entries => {
  entries.forEach(e => e.isIntersecting && e.target.classList.add('show'));
}, { threshold: 0.15 });
document.querySelectorAll('.rv').forEach(el => io.observe(el));

// Menu : met en surbrillance la section visible
const links = [...document.querySelectorAll('nav a')];
const spy = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      links.forEach(l => l.classList.toggle('on', l.getAttribute('href') === '#' + e.target.id));
    }
  });
}, { rootMargin: '-45% 0px -50% 0px' });
document.querySelectorAll('section').forEach(s => spy.observe(s));