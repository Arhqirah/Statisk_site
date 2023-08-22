    // Specify the list of product IDs you want to retrieve
    const productIds = [1533, 1545, 1573]; // Replace with your own list of IDs

    // Get the element where you want to display the product details
    const productDetailsDiv = document.getElementById('product-details');

    // Check for WebP support
    function checkWebpSupport(callback) {
      var img = new Image();
      img.onload = function () {
        var isSupported = (img.width > 0) && (img.height > 0);
        callback(isSupported);
      };
      img.onerror = function () {
        callback(false);
      };
      img.src = 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IC4AAACyAgCdASoCAAEAAQAcJaQAA3AA/vuUAA==';
    }
      // Loop through each product ID and fetch the data
      productIds.forEach(productId => {
        fetch('https://kea-alt-del.dk/t7/api/products?limit=50&start=10')
        .then(response => response.json())
        .then(products => {
          products.forEach(product => {
            // Create elements to display product details
            const productContainer = document.createElement('div');
            productContainer.classList.add('product-container');
            productContainer.innerHTML = `
              <h2>${product.productdisplayname}</h2>
              <p>Price: ${product.price}</p>
              <p>Brand: ${product.brandname}</p>
              <picture>
                <source srcset="${product.image_url}" type="image/webp">
                <img class="product-image" src="${product.jpeg_image_url}" alt="${product.productdisplayname} Image">
              </picture>
              <!-- Include more product details as needed -->
            `;
            // Append the product container to the details div
            productDetailsDiv.appendChild(productContainer);
          });
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    });