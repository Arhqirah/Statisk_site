
        fetch('https://kea-alt-del.dk/t7/api/products?limit=50&start=10')
        .then(response => response.json())
        .then(data => {
          data.forEach(showProduct)
    });

    function showProduct(data) {
      const template = document.querySelector("template").content;
      const copy =template.cloneNode(true);
    }