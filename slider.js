
  
  function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("active");
  }
let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-slider img');
const slider = document.querySelector('.carousel-slider');
const dotsContainer = document.getElementById('dots');

slides.forEach((_, i) => {
  const dot = document.createElement('button');
  dot.onclick = () => goToSlide(i);
  dotsContainer.appendChild(dot);
});
const dots = dotsContainer.querySelectorAll('button');

function updateCarousel() {
  slider.style.transform = `translateX(-${slideIndex * 100}%)`;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[slideIndex].classList.add('active');
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  updateCarousel();
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  updateCarousel();
}

function goToSlide(index) {
  slideIndex = index;
  updateCarousel();
}

setInterval(nextSlide, 5000); // Auto-slide every 5 seconds

updateCarousel();

