

const buyButtons = document.querySelectorAll('.buy-btn');
const cartIcon = document.querySelector('.bxs-cart');
const checkoutModal = document.getElementById('checkout-modal');
const productNameSpan = document.getElementById('product-name');
const productDescriptionSpan = document.getElementById('product-description');
const closeModalButton = checkoutModal.querySelector('.close');

buyButtons.forEach(button => {
  button.addEventListener('click', event => {
    event.preventDefault();
    const productName = button.parentNode.querySelector('h3').textContent;
    const productDescription = button.parentNode.querySelector('p').textContent;

    productNameSpan.textContent = productName;
    productDescriptionSpan.textContent = productDescription;

    checkoutModal.classList.add('modal-active'); // Agregar clase para mostrar el modal
  });
});

closeModalButton.addEventListener('click', () => {
  checkoutModal.classList.remove('modal-active'); // Eliminar clase para ocultar el modal
});

