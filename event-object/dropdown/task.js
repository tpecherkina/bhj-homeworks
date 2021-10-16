const dropValue = document.querySelector(".dropdown__value");
const dropList = document.querySelector(".dropdown__list");

dropValue.onclick = function() {
  dropList.classList.toggle("dropdown__list_active");
}

const dropLink = document.getElementsByClassName("dropdown__link");
let linkLength = Array.from(dropLink).length;

for (let i = 0; i < linkLength; i++) {
  dropLink[i].parentElement.onclick = function() {
    dropValue.textContent = dropLink[i].textContent;
    dropList.classList.remove("dropdown__list_active");
    return false;
  }

}
