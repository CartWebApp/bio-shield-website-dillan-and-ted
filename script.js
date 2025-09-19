document.addEventListener("DOMContentLoaded", () => {
    // Make images clickable for product details
    document.querySelectorAll(".image-row img").forEach(img => {
      img.addEventListener("click", () => {
        alert(`You clicked on: ${img.alt}`);
        // Future: Redirect to product page
        // window.location.href = `product.html?item=${encodeURIComponent(img.alt)}`;
      });
    });
  });