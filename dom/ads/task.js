let changeThis = Array.from(document.getElementsByClassName("rotator__case"));
let index = 0;
const nextChange= function() {
    changeThis[index].classList.remove("rotator__case_active");
    index += 1;
    changeThis[index].classList.add("rotator__case_active");
        if (index === changeThis.length - 1) {
            index = 0; 
        }
}

// run change function every 1 second
setInterval(nextChange, 1000);
