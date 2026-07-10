const menuToggle = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');
  const closeNav = document.getElementById('closeNav');

  menuToggle.addEventListener('click', () => mobileNav.classList.add('open'));
  closeNav.addEventListener('click', () => mobileNav.classList.remove('open'));
  mobileNav.addEventListener('click', (e) => {
    if(e.target === mobileNav) mobileNav.classList.remove('open');
  });

  // subtle parallax on hero image & decorative shapes
  const wrap = document.querySelector('.stage');
  const img = document.querySelector('.hero-image-wrap img');
  const ring = document.querySelector('.deco-ring');
  const ball = document.querySelector('.deco-ball');

  if(window.matchMedia('(pointer:fine)').matches){
    wrap.addEventListener('mousemove', (e) => {
      const rect = wrap.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      img.style.transform = `translate(${x*10}px, ${y*10}px)`;
      ring.style.transform = `translate(${x*-18}px, ${y*-18}px)`;
      ball.style.transform = `translate(${x*14}px, ${y*14}px)`;
    });
    wrap.addEventListener('mouseleave', () => {
      img.style.transform = '';
      ring.style.transform = '';
      ball.style.transform = '';
    });
  }