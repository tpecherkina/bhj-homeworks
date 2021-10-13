let imagesSource = document.getElementsByClassName('slider__item');
let next = document.querySelector(".slider__arrow_next");
let prev = document.querySelector(".slider__arrow_prev");
const images = Array.from(imagesSource);
let totalImages = images.length;
let index = 0;


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

