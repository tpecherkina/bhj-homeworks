let modalMain = document.getElementById("modal_main");
let modalSuccess = document.getElementById("modal_success");
let showSuccess = document.getElementsByClassName("show-success");
let closeWindow = document.getElementsByClassName("modal__close_times")
let modal = document.getElementsByClassName("modal");

modalMain.classList.add("modal_active");

      showSuccess[0].onclick = function() {
        modalMain.classList.toggle("modal_active");
        modalSuccess.classList.toggle("modal_active");

    }


    for(let i = 0; i < closeWindow.length; i++) {
        closeWindow[i].onclick = function() {
            modal[i].classList.remove("modal_active");
        }
    }
