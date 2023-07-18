document.addEventListener('click', function(event) {
    var isClickInsideCartIcon = document.getElementById('cart-icon').contains(event.target);
    var isClickInsideCartPreview = document.getElementById('cart-preview').contains(event.target);

    if (!isClickInsideCartIcon && !isClickInsideCartPreview) {
        closeCartPreview();
    }
});

function closeCartPreview() {
    var cartPreview = document.getElementById('cart-preview');
    cartPreview.style.display = 'none';
}