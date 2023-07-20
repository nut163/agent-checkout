// Importing dependencies
import products from './data/products.json';
import { displayProductDetails } from './buttonFunctions.js';
import { updateItemCount, addToCart } from './cartFunctions.js';
import { collectUserInformation } from './modalForm.js';
import { addRemoveFormFields } from './formFieldFunctions.js';
import { collapseExpandFilters } from './collapseExpand.js';
import { closeCartPreview } from './eventListeners.js';
import { filterProducts } from './filterFunctions.js';

// Initializing cart items array
let cartItems = [];

// Function to initialize the website
function init() {
  // Display products
  products.forEach(product => {
    displayProductDetails(product);
  });

  // Event listeners
  document.getElementById('cart-icon').addEventListener('click', () => addToCart(cartItems));
  document.getElementById('cart-preview').addEventListener('click', closeCartPreview);
  document.getElementById('product-details-button').addEventListener('click', displayProductDetails);
  document.getElementById('modal-form').addEventListener('submit', collectUserInformation);
  document.getElementById('filter-sections').addEventListener('click', collapseExpandFilters);

  // Initialize price slider
  let priceSlider = document.getElementById('price-slider');
  priceSlider.oninput = function() {
    filterProducts('price', this.value);
  }
}

// Function to handle adding product to cart
function handleAddToCart(product) {
  cartItems.push(product);
  updateItemCount(cartItems.length);
}

// Function to handle form field changes
function handleFormFieldChange(action, field) {
  addRemoveFormFields(action, field);
}

// Function to handle filter changes
function handleFilterChange(filter, value) {
  filterProducts(filter, value);
}

// Initialize the website
init();