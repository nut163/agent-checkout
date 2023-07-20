// Importing dependencies
import { products } from '../data/products.json';

// Function to initialize price slider
function initPriceSlider() {
    let slider = document.getElementById('price-slider');
    let minPrice = Math.min(...products.map(product => product.price));
    let maxPrice = Math.max(...products.map(product => product.price));

    noUiSlider.create(slider, {
        start: [minPrice, maxPrice],
        connect: true,
        range: {
            'min': minPrice,
            'max': maxPrice
        }
    });

    slider.noUiSlider.on('update', function (values, handle) {
        filterProductsByPrice(values[0], values[1]);
    });
}

// Function to filter products based on price range
function filterProductsByPrice(minPrice, maxPrice) {
    let filteredProducts = products.filter(product => product.price >= minPrice && product.price <= maxPrice);
    displayFilteredProducts(filteredProducts);
}

// Function to display filtered products
function displayFilteredProducts(filteredProducts) {
    // Logic to display filtered products goes here
}

// Initialize price slider on page load
window.onload = initPriceSlider;