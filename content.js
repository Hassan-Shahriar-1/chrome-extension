document.getElementById('uploadProduct').addEventListener('click', () => {
  fillFacebookForm();
});

// Function to fill out the Facebook Marketplace form
function fillFacebookForm() {
  const product = JSON.parse(localStorage.getItem('product'));

  if (!product) {
    alert('No product data found!');
    return;
  }

  // Selectors for Facebook Marketplace form
  const titleInput = document.querySelector('input[aria-label="Titre"]');
  const priceInput = document.querySelector('input[aria-label="Prix"]');
  const descriptionInput = document.querySelector('textarea[aria-label="Description"]');
  const categoryDropdown = document.querySelector('[aria-label="Catégorie"]');
  const imageUpload = document.querySelector('input[type="file"]');

  if (titleInput) titleInput.value = product.name;
  if (priceInput) priceInput.value = product.price;
  if (descriptionInput) descriptionInput.value = product.description;

  // Fill the category dropdown (takes a bit of time, so set a timeout)
  if (categoryDropdown) {
    categoryDropdown.click();
    setTimeout(() => {
      const categoryOptions = document.querySelectorAll('[role="option"]');
      categoryOptions.forEach((option) => {
        if (option.innerText.includes(product.category)) {
          option.click();
        }
      });
    }, 1000);  // Delay to give time for dropdown interaction
  }

  // Image Upload - We can't automate the file upload, but we notify the user
  if (imageUpload) {
    alert('Veuillez télécharger manuellement l’image du produit.');
  }

  alert('Produit rempli avec succès. Veuillez vérifier et publier.');
}
