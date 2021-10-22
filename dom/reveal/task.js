let element =  Array.from(document.getElementsByClassName("reveal"));

    for (let i = 0; i < element.length; i++) {
	window.addEventListener('scroll', function() {
        let position = element[i].getBoundingClientRect();

	// checking whether fully visible
    
	if(position.top < window.innerHeight && position.bottom >= 0) {
       		element[i].classList.add("reveal_active");
	}

    });
}
