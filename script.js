$(document).ready(function(){
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 3000, // Cambiar imágenes cada 3 segundos
        dots: true, // Muestra los puntos de navegación
        arrows: true, // Muestra las flechas de navegación
        slidesToShow: 3, // Muestra 3 imágenes al mismo tiempo
        slidesToScroll: 3, // Desplaza una imagen a la vez

        responsive: [
            {
              breakpoint: 768, // Cambiar la cantidad de imágenes a mostrar en versión móvil
              settings: {
                slidesToShow: 1,
              }
            }
          ]


    });
});

const prevButton = document.querySelector('.slider-prev');
const nextButton = document.querySelector('.slider-next');
const sliderContainer = document.querySelector('.slider-container');
const carouselImages = document.querySelectorAll('.carousel-image');

let currentIndex = 0;

function showImage(index) {
    carouselImages.forEach(image => {
        image.style.transform = `translateX(-${index * 100}%)`;
    });
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + carouselImages.length) % carouselImages.length;
    showImage(currentIndex);
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % carouselImages.length;
    showImage(currentIndex);
});

