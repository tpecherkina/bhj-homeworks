   var menuLink = document.querySelectorAll(".menu__link");
   var menuSub = document.querySelectorAll(".menu_sub");

for(let i = 0; i < menuLink.length; i++) {
    var menuFirst = menuSub[i].closest(".menu__item");
    menuFirst.onclick = function() {
      menuSub[i].classList.toggle("menu_active");
      return false;
    }
    }
