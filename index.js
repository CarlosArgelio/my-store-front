// Obtener todos los botones de cerrar
const closeBtns = document.querySelectorAll('.close-btn');

// Agregar un event listener a cada botón
closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Obtener el elemento padre del botón (el div de la compra)
        const shoppingCart = btn.parentElement;
        // Eliminar el div de la compra
        shoppingCart.remove();
    });
});