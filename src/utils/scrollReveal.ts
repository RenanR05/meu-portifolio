import ScrollReveal from 'scrollreveal';

export const initScrollReveal = () => {
  const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true,
  });

  sr.reveal('.home-title', {});
  sr.reveal('.button', { delay: 200 });
  sr.reveal('.home-img', { delay: 400 });
  sr.reveal('.home-social', { delay: 400 });

  sr.reveal('.about-img', {});
  sr.reveal('.about-subtitle', { delay: 200 });
  sr.reveal('.about-text', { delay: 400 });

  sr.reveal('.section-title', { delay: 100 });
  sr.reveal('.skills__container', { delay: 200 });
  sr.reveal('.skill__item', { interval: 150 });

  sr.reveal('.work-img', { interval: 200 });
  sr.reveal('.contact-input', { interval: 200 });
};