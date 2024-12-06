document.addEventListener('DOMContentLoaded', () => {
  const prevButton = document.querySelector('.prev-btn');
  const nextButton = document.querySelector('.next-btn');
  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slider-item');
  let currentIndex = 0;

  const updateSlider = () => {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  };

  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
    updateSlider();
  });

  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
    updateSlider();
  });

  // Optional: Auto-slide functionality (every 5 seconds)
  setInterval(() => {
    currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
    updateSlider();
  }, 5000);
});
