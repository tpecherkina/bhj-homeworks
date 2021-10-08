  let menuLink = document.querySelectorAll(".menu__link");
   let menuSub = document.querySelectorAll(".menu_sub");
   
   
   for (let item of menuSub) {
const menuClicker = item.parentElement;
menuClicker.onclick = function() {
  item.classList.toggle("menu_active");
  return false;
}
   }
