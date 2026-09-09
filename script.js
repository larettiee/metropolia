const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
burger?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  burger.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  burger?.setAttribute('aria-expanded','false');
}));
