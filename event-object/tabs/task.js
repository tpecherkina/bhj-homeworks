let tab = document.querySelectorAll(".tab");
let tabs = Array.from(tab);
let tabContent = document.querySelectorAll(".tab__content");


for(let i = 0; i < tabs.length; i++) {
 tabs[i].onclick = function() {
    let searchActive = tabs.findIndex((link) => link.classList.contains("tab_active"));
     tabs[searchActive].classList.remove("tab_active");
     tabContent[searchActive].classList.remove("tab__content_active");
     tabs[i].classList.add("tab_active");
     tabContent[i].classList.add("tab__content_active");
 }
}
