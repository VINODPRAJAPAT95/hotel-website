
  
  function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("active");
  }
function scrollRooms(direction) {
  const container = document.getElementById("roomGrid");
  const scrollAmount = 300;

  if (direction === "left") {
    container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  } else {
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  }
}

const cards = document.querySelectorAll('.room-card');
let currentIndex = 0;

function updateCarousel() {
  cards.forEach((card, index) => {
    card.classList.remove('active');
    if (index === currentIndex) {
      card.classList.add('active');
    }
  });

  const offset = -currentIndex * 100;
  document.getElementById("roomCarousel").style.transform = `translateX(${offset}%)`;
}

function changeSlide(direction) {
  currentIndex += direction;
  if (currentIndex < 0) currentIndex = cards.length - 1;
  if (currentIndex >= cards.length) currentIndex = 0;
  updateCarousel();
}

// Initialize
updateCarousel();

const hero = document.querySelector('.blog-hero');

  const images = [
    'https://reactheme.com/products/wordpress/moonlit/beach/wp-content/uploads/sites/4/2025/02/testimonial-bg.webp',
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    'https://images.trvl-media.com/lodging/3000000/2760000/2756100/2756011/a77c1fae.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill', 
    'https://images.unsplash.com/photo-1470770841072-f978cf4d019e'  
  ];

  let current = 0;

  function changeBackground() {
    current = (current + 1) % images.length;
    hero.style.backgroundImage = `url('${images[current]}')`;
  }

  setInterval(changeBackground, 4000); 