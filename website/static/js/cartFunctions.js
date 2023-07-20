let cartItems = [];

function addToCart(product) {
    cartItems.push(product);
    updateItemCount();
    document.dispatchEvent(new CustomEvent('updateCart'));
}

function removeFromCart(product) {
    const index = cartItems.findIndex(item => item.id === product.id);
    if (index > -1) {
        cartItems.splice(index, 1);
        updateItemCount();
        document.dispatchEvent(new CustomEvent('updateCart'));
    }
}

function updateItemCount() {
    const cartIcon = document.getElementById('cart-icon');
    cartIcon.dataset.count = cartItems.length;
}

function getCartItems() {
    return cartItems;
}

function clearCart() {
    cartItems = [];
    updateItemCount();
    document.dispatchEvent(new CustomEvent('updateCart'));
}

export { addToCart, removeFromCart, getCartItems, clearCart };