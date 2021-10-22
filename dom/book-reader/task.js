let fontSize = Array.from(document.getElementsByClassName("font-size"));
let book = document.getElementById("book");



for(let i = 0; i < fontSize.length; i++) {
    fontSize[i].onclick = function() {
      let findActive = fontSize.findIndex((item) => item.classList.contains("font-size_active"));
      fontSize[findActive].classList.remove("font-size_active");
      fontSize[i].classList.add("font-size_active");
      if(fontSize[i].classList.contains("font-size_small")) {
          book.classList.remove("book_fs-big");
          book.classList.add("book_fs-small");
          return false;
      } else if(fontSize[i].classList.contains("font-size_big")) {
          book.classList.remove("book_fs-small");
          book.classList.add("book_fs-big");
          return false;
      }
    }
}
