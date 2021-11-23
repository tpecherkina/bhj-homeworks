let cart = document.querySelector(".cart__products");
let clickToAdd = Array.from(document.querySelectorAll(".product__add"));
let add = Array.from(document.getElementsByClassName("product__quantity-control_inc"));
let takeOut =  Array.from(document.getElementsByClassName("product__quantity-control_dec"));
let countValue = document.getElementsByClassName("product__quantity-value");


for (let i = 0; i < add.length; i++) {
    add[i].onclick = function() {
     countValue[i].innerHTML++;
 }
}

for (let i = 0; i < takeOut.length; i++) {
    takeOut[i].onclick = function() {
     if (countValue[i].innerHTML === 1) {
        countValue[i].innerHTML = 1;
     } else if(countValue[i].innerHTML > 1) {
        countValue[i].innerHTML --;
     }
    }
}
let addProductCart = function() {
    let itemInCart = Array.from(cart.querySelectorAll(".cart__product"));
    let idOfProduct = this.closest(".product").getAttribute("data-id");
    let srcOfProduct = this.closest(".product").querySelector(".product__image").getAttribute("src");
    let quantity = this.closest(".product").querySelector(".product__quantity-value").textContent;
    let index = itemInCart.findIndex(item => item.getAttribute("data-id") === idOfProduct);
  
    if (index !== -1) {
        itemInCart[index].querySelector(".cart__product-count").textContent = Number(itemInCart[index].querySelector(".cart__product-count").textContent) + Number(quantity);
    } else {
      cart.innerHTML += `
      <div class="cart__product" data-id="${idOfProduct}">
        <img class="cart__product-image" src="${srcOfProduct}">
        <div class="cart__product-count">${quantity}</div>
      </div>
      `;
    }
  
    this.closest(".product").querySelector(".product__quantity-value").textContent = 1;
  }
  
  clickToAdd.forEach(item => {item.addEventListener("click", addProductCart)});
