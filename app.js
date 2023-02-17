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


// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function myFunction() {
  location.replace("https://www.w3schools.com")
}

