let toolTipTarget = document.querySelectorAll('.has-tooltip');


let toolTip = document.createElement("div");
toolTip.classList.add("tooltip");

toolTipTarget.forEach(item => {
	item.addEventListener('click', (e) => {
		e.preventDefault();
		
		
		toolTip.innerText = item.title;
		item.insertAdjacentElement('afterEnd', toolTip);
		toolTip.classList.toggle("tooltip_active");
	})
});
