let tab = document.querySelectorAll(".tab");


let tabs = Array.from(tab);
let tabContent = document.querySelectorAll(".tab__content");

tabs.onclick = function() {
  tabs.classList.remove("tab__content_active");
  this.classList.add("tab_active");
}

for (let i = 0; i < tabs.length; i++) {
  tabs[i].onclick = function() {
    tabContent[i].classList.toggle("tab__content_active");
    return false;
  }

}
