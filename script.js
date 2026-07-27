document.addEventListener('DOMContentLoaded', () => {
  const revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }

  const playBtn = document.querySelector('.play-btn');
  const video = document.getElementById('preview-video');
  if (playBtn && video) {
    playBtn.addEventListener('click', () => {
      video.setAttribute('controls', 'controls');
      video.play();
      video.closest('.video-card__thumb').classList.add('is-playing');
    });
    video.addEventListener('pause', () => {
      video.closest('.video-card__thumb').classList.remove('is-playing');
    });
  }
});
