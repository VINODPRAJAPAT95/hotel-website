function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("active");
  }
const images = document.querySelectorAll(".gallery img");
    const popup = document.getElementById("popup");
    const popupImg = document.getElementById("popup-img");

    images.forEach(img => {
      img.addEventListener("click", () => {
        popup.style.display = "flex";
        popupImg.src = img.src;
      });
    });

    function closePopup() {
      popup.style.display = "none";
    }

    popup.addEventListener("click", (e) => {
      if (e.target === popup) {
        closePopup();
      }
    });