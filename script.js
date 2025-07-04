// 1. Product data and dynamic rendering
const jerseys = [
  {
    name: "Man United 2007/2008 (Away Kit)",
    price: "600 BDT",
    image: "images/manu2007_8away.jpg"
  },
  {
    name: "Brazil 2002 Champion Kit",
    price: "550 BDT",
    image: "images/brazil2002.jpg"
  },
  {
    name: "AC Milan 2006 Home Kit",
    price: "580 BDT",
    image: "images/milan2006.jpg"
  }
];

const container = document.getElementById('product-list');

jerseys.forEach(jersey => {
  const section = document.createElement('section');
  section.className = 'product';
  section.innerHTML = `
    <img src="${jersey.image}" alt="${jersey.name}">
    <h2>${jersey.name}</h2>
    <p>${jersey.price}</p>
    <button>Buy</button>
  `;
  container.appendChild(section);
});

// 2. Nav toggling logic
document.addEventListener('DOMContentLoaded', function() {
  const contactLink = document.getElementById('contact-link');
  const homeLink = document.getElementById('home-link');
  const shopLink = document.getElementById('shop-link');
  const contactSection = document.getElementById('contact');
  const productList = document.getElementById('product-list');

  function showHome() {
    contactSection.style.display = 'none';
    productList.style.display = '';
  }

  function showContact() {
    contactSection.style.display = '';
    productList.style.display = 'none';
  }

  homeLink.addEventListener('click', function(e) {
    e.preventDefault();
    showHome();
  });

  shopLink.addEventListener('click', function(e) {
    e.preventDefault();
    showHome();
  });

  contactLink.addEventListener('click', function(e) {
    e.preventDefault();
    showContact();
  });

  // Show home by default on page load
  showHome();
});