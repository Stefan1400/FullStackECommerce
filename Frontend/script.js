const searchIcon = document.querySelector('#searchIcon');
const searchPage = document.querySelector('#searchPage');

const menuIcon = document.querySelector('#menuIcon');
const menuPage = document.querySelector('#menuPage');

const cartIcon = document.querySelector('#cartIcon');
const cartPage = document.querySelector('#cartPage');

const newCreationsLinkHome = document.querySelector("#new-creations-link-home");
const newCreationsLinkMenu = document.querySelector("#new-creations-link-menu");
const newCreationsPage = document.querySelector('#new-creations-page');

const logo = document.querySelector('#logo');

const products = document.querySelectorAll('.products');
const productDisplayPage = document.querySelector('#productPage');
const productImage = productDisplayPage.querySelector('img');
const productName = productDisplayPage.querySelector('h3');
const productPrice = productDisplayPage.querySelector('p');
const addToCart = document.querySelector('.add-to-cart');
 
const displayProductData = (name, url, price) => {
   productName.textContent = name;
   productImage.src = url;
   productPrice.textContent = `$${price}.00`;
}

addToCart.addEventListener('click', () => {
   addToCart.classList.toggle('added');
   if (addToCart.classList.contains('added')) {
      addToCart.textContent = 'ADDED TO CART';
   } else {
      addToCart.textContent = 'ADD TO CART';
   }
})

products.forEach(prod => {
   prod.addEventListener('click', () => {
      productDisplayPage.classList.add('visible');
      
      const productName = prod.id;
      const productUrl = prod.src;
      const productPrice = prod.dataset.price;
      displayProductData(productName, productUrl, productPrice);
   })
})

searchIcon.addEventListener('click', () => {
   searchPage.classList.toggle('visible');
})

menuIcon.addEventListener('click', () => {
   menuPage.classList.toggle('visible');
})

cartIcon.addEventListener('click', () => {
   cartPage.classList.toggle('visible');
})

newCreationsLinkHome.addEventListener('click', () => {
   newCreationsPage.classList.add('visible');
})

newCreationsLinkMenu.addEventListener('click', () => {
   newCreationsPage.classList.add('visible');
   menuPage.classList.remove('visible');
   if (productDisplayPage.classList.contains('visible')) {
      productDisplayPage.classList.remove('visible');
   }
})

logo.addEventListener('click', () => {
   if (searchPage.classList.contains('visible')) {
      searchPage.classList.toggle('visible');
   }
   if (menuPage.classList.contains('visible')) {
      menuPage.classList.toggle('visible');
   }
   if (cartPage.classList.contains('visible')) {
      cartPage.classList.toggle('visible');
   }
   if (newCreationsPage.classList.contains('visible')) {
      newCreationsPage.classList.toggle('visible');
   }
   if (productDisplayPage.classList.contains('visible')) {
      productDisplayPage.classList.toggle('visible');
   }
})