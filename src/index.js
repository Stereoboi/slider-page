import Glide from '@glidejs/glide';

document.addEventListener('DOMContentLoaded', function () {
  const config = {
    type: 'slider',
    startAt: 0,
    gap: 0,
    animationDuration: 2000,
    rewind: false,
  };
  const glide = new Glide('.glide', config);
  glide.mount();

  glide.on(['move.after'], function () {
    const currentSlide = glide.index;
    const btn1 = document.querySelector('.btn1');
    const btn2 = document.querySelector('.btn2');

    if (currentSlide === 0) {
      btn1.style.opacity = 0.5;
      btn2.style.opacity = 1;
    }
    if (currentSlide === 1) {
      btn1.style.opacity = 1;
      btn2.style.opacity = 1;
    }
    if (currentSlide === 2) {
      btn1.style.opacity = 1;
      btn2.style.opacity = 0.5;
    }
  });
});
