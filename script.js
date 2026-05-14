document.addEventListener('DOMContentLoaded', () => {

  const heroImage = document.querySelector('.hero-image');
  const dotsContainer = document.querySelector('.dots');
  const leftArrow = document.querySelector('.arrow.left');
  const rightArrow = document.querySelector('.arrow.right');
  const toggle = document.querySelector('.toggle');
  const navLinks = document.querySelector('.nav-links');

  const heroImages = [
    'photos/WrightK_Panning.JPG',
    'photos/WrightK_Manual1.JPG',
    'photos/WrightK_SubjectMotion.JPG',
    'photos/WrightK_lightingPainting.jpg',
    'photos/WrightK_Triptyks.jpg'
  ];

  let currentIndex = 0;
  let autoSlide;

  function renderDots() {

    dotsContainer.innerHTML = '';

    heroImages.forEach((_, index) => {
      const dot = document.createElement('span');
      if (index === currentIndex) {
        dot.classList.add('active');
      }
      dot.addEventListener('click', () => {
        currentIndex = index;
        updateImage();
        renderDots();
      });
      dotsContainer.appendChild(dot);
    });
  }

  function updateImage() {
    heroImage.src = heroImages[currentIndex];
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % heroImages.length;
    updateImage();
    renderDots();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + heroImages.length) % heroImages.length;
    updateImage();
    renderDots();
  }

  function startAutoSlide() {
    autoSlide = setInterval(nextSlide, 3000);
  }

  function stopAutoSlide() {
    clearInterval(autoSlide);
  }

  // Initial setup
  updateImage();
  renderDots();
  startAutoSlide();

  // Event listeners
  leftArrow.addEventListener('click', () => {
    prevSlide();
    stopAutoSlide();
    startAutoSlide();
  });

  rightArrow.addEventListener('click', () => {
    nextSlide();
    stopAutoSlide();
    startAutoSlide();
  });

  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

});
  