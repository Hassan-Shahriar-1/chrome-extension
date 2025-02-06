document.getElementById('fetchProduct').addEventListener('click', async () => {
  console.log('called');
  try {
    const response = await fetch('http://127.0.0.1:8000/api/v1/product-list');
    const product = await response.json();

    // Display product details
    const productDetails = document.getElementById('productDetails');
    productDetails.innerHTML = `
      <h2>${product.title}</h2>
      <p>Price: ${product.price}</p>
      <p>Description: ${product.description}</p>
      <p>Category: ${product.category}</p>
      <p>Location: ${product.location}</p>
      <img src="${product.images[0]}" alt="Product Image" width="100">
    `;

    // Enable the upload button
    document.getElementById('uploadProduct').disabled = false;
  } catch (error) {
    console.error('Error fetching product:', error);
  }
});

document.getElementById('uploadProduct').addEventListener('click', () => {
  // Simulate uploading to Facebook Marketplace
  alert('Product uploaded to Facebook Marketplace!');
});