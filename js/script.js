// Sticky Header
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if(window.scrollY > 50) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
});

// Scroll Reveal
const scrollElements = document.querySelectorAll('.scroll, .card, .hero h1, .hero p, .hero .btn');
const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  scrollElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if(elementTop < windowHeight - 100) el.classList.add('show');
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
