// Importing dependencies
import { products } from '../data/products.json';

// Function to filter products based on selected categories, underwriters, price, and search keyword
function filterProducts(filterParams) {
    let filteredProducts = products;

    // Filter by category
    if (filterParams.category) {
        filteredProducts = filteredProducts.filter(product => product.category === filterParams.category);
    }

    // Filter by underwriter
    if (filterParams.underwriter) {
        filteredProducts = filteredProducts.filter(product => product.underwriter === filterParams.underwriter);
    }

    // Filter by price
    if (filterParams.price) {
        filteredProducts = filteredProducts.filter(product => product.price <= filterParams.price);
    }

    // Filter by search keyword
    if (filterParams.keyword) {
        filteredProducts = filteredProducts.filter(product => product.name.toLowerCase().includes(filterParams.keyword.toLowerCase()));
    }

    return filteredProducts;
}

// Function to generate filters based on product data
function generateFilters() {
    const categories = [...new Set(products.map(product => product.category))];
    const underwriters = [...new Set(products.map(product => product.underwriter))];

    return {
        categories,
        underwriters
    };
}

// Exporting functions
export { filterProducts, generateFilters };