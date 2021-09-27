var imagesSource = document.getElementsByClassName('slider__item');
var next = document.getElementById("slider__arrow_next");
var prev = document.getElementById("slider__arrow_prev");
const images = Array.from(imagesSource);
var totalImages = images.length;
let index = 0;

//const prev = document.querySelector('.prev');
//const next = document.querySelector('.next');
//const images = document.querySelector('.carousel').children;
//const totalImages = images.length;
//let index = 0;

prev.addEventListener('click', () => {
  nextImage('next');
})

next.addEventListener('click', () => {
  nextImage('prev');
})

function nextImage(direction) {
  if(direction == 'next') {
    index++;
    if(index == totalImages) {
      index = 0;
    }
  } else {
    if(index == 0) {
      index = totalImages - 1;
    } else {
      index--;
    }
  }

  for(let i = 0; i < images.length; i++) {
    images[i].classList.remove('slider__item_active');
  }
images[index].classList.add('slider__item_active');
}