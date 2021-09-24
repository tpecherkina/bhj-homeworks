const deadMoles = document.getElementById("dead");
const lostMoles = document.getElementById("lost");


for(let i = 1; i < 9; i++) {
    const hole = document.getElementById(`hole${i}`);
    hole.onclick = function() {
    if(hole.className.includes('hole_has-mole')) {
     deadMoles.textContent ++;
     takeScore();
  }
  else {
    lostMoles.textContent ++;
    takeScore();
  }
}
}

function takeScore() {
  if(Number(deadMoles.textContent) === 10) {
    alert("Вы победили!");
    location.reload();
  } else if(Number(lostMoles.textContent) === 5) {
    alert("Вы проиграли!");
    location.reload();
  }
  }
