```javascript
document.getElementById('product-details-button').addEventListener('click', displayProductDetails);

function displayProductDetails() {
    let productId = this.dataset.id;
    let product = products.find(product => product.id === productId);

    let productDetails = `
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <h3>Pricing Options</h3>
        <ul>
            ${product.pricingOptions.map(option => `<li>${option}</li>`).join('')}
        </ul>
    `;

    document.getElementById('product-details').innerHTML = productDetails;
}
```