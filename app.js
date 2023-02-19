var productsContainer = document.querySelector("#products");

fetch("products.json")
  .then(response => response.json())
  .then(data => {
    data.forEach(product => {
      productsContainer.innerHTML += `
        <div class="product">
        <img src="${product.image}" alt="${product.name}">
          <h3><b>${product.name}</b></h3>
          <p><b>${product.price}</b></p>
          <p><b><a href="${product.link}">${product.description}</a></b></p>
      </div>
    `;
    });
  });

var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  loader.style.display = "none"
})


function myFunction() {
  location.replace("https://www.w3schools.com")
}

