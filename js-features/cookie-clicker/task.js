let x = 0
let cookieSize = document.getElementById("cookie");
document.getElementById("clicker__counter").innerHTML = x
document.getElementById('cookie').addEventListener("click", iterate)
function iterate(){
    x += 1
    document.getElementById("clicker__counter").innerHTML = x;

if(x % 2 === 0) {
    cookieSize.width = 300;
  } else if(x % 2 !== 0) {
    cookieSize.width = 200;
  }}
