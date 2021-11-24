let toolTipTarget = document.querySelectorAll('.has-tooltip');


let toolTip = document.createElement("div");
toolTip.classList.add("tooltip");

toolTipTarget.forEach(item => {
	item.addEventListener('click', (e) => {
		e.preventDefault();
		
		
		toolTip.innerText = item.title;
		item.insertAdjacentElement('afterEnd', toolTip);
	        let topBorder = item.getBoundingClientRect().bottom;
		let leftBorder = item.getBoundingClientRect().left;
		toolTip.setAttribute('style', `top: ${topBorder}px; left: ${leftBorder}px`)
		toolTip.classList.toggle("tooltip_active");
	})
});
