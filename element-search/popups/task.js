var modalMain = document.getElementById("modal_main");
var modalSuccess = document.getElementById("modal_success");
var showSuccess = document.getElementsByClassName("show-success");
var closeWindow = document.getElementById("modal__close_times")
var modal = document.getElementsByClassName("modal");

modalMain.classList.add("modal_active");

      showSuccess[0].onclick = function() {
        modalMain.classList.toggle("modal_active");
        modalSuccess.classList.toggle("modal_active");

    }

    closeWindow[0].onclick = function() {
        modalSuccess.classList.toggle("modal_active");
    }

