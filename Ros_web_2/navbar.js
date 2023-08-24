
//  Navbar menu

const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("open");
});


// gallery modal imagenes

const openGalleryButtons = document.querySelectorAll('.open-gallery-btn');
const galleryModals = document.querySelectorAll('.gallery-modal');

openGalleryButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const modal = galleryModals[index];
    modal.style.display = 'flex';
  });
});

galleryModals.forEach(modal => {
  const closeButton = modal.querySelector('.close-gallery');

  closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
  });
});

