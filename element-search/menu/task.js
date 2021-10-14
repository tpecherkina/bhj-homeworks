let menuSub = document.querySelectorAll(".menu_sub");

  
   for (let item of menuSub) {
const menuClicker = item.parentElement;
const link = menuClicker.querySelector('a');
link.onclick = function() {
  item.classList.toggle("menu_active");
  return false;
}
}

