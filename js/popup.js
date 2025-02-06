document.getElementById('fetchProduct').addEventListener('click', () => {
  chrome.runtime.sendMessage({ action: "fetchProductDetails" }, (response) => {
    if (response.success) {
      const product = response.product;
      // Save the product details to localStorage for use in content.js
      localStorage.setItem('product', JSON.stringify(product));

      // Update the UI with product details
      document.getElementById('productDetails').innerHTML = `
        <h3>${product.name}</h3>
        <p>Price: ${product.price} ${product.currency}</p>
        <p>Description: ${product.description}</p>
        <p>Category: ${product.category}</p>
        <p>Location: ${product.location}</p>
        <img src="${product.image}" alt="Product Image" width="100">
      `;
      // Enable the upload button
      document.getElementById('uploadProduct').disabled = false;
    } else {
      alert(response.message);
    }
  });
});
