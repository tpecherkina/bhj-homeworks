var timeleft = 10;
var downloadTimer = setInterval(function () {
    timeleft--;
    document.getElementById("timer").textContent = timeleft;
    if (timeleft === 0){
        clearInterval(downloadTimer);
        alert("Вы победили в конкурсе!")
    }
  
}, 1000);