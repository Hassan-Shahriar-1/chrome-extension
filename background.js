chrome.runtime.onInstalled.addListener(() => {
  console.log("Facebook Marketplace Uploader Extension Installed");
});

// Listen for messages from popup.js and pass them to content.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "fetchProductDetails") {
    fetchProductDetails(request, sendResponse);
    return true; // Keeps the message channel open for sendResponse
  }
});

// Function to handle fetching product details
async function fetchProductDetails(request, sendResponse) {
  try {
    const response = await fetch('http://127.0.0.1:8000/api/v1/product-list');
    const data = await response.json();

    if (data.success && data.data.length > 0) {
      const product = data.data[0]; // Taking the first product
      sendResponse({ success: true, product: product });
    } else {
      sendResponse({ success: false, message: "No product found!" });
    }
  } catch (error) {
    console.error('Error fetching product details:', error);
    sendResponse({ success: false, message: "Failed to fetch product details" });
  }
}
