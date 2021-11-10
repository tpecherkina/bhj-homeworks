let interests = document.querySelectorAll(".interests");

for (let interest of interests) {
	let parent = interest.closest(".interest");
	if (parent) {
		let checkItem = parent.querySelector(".interest__check");
		checkItem.onclick = () => {
			if (checkItem.checked) {
				selection(parent, true);
			} else {
				selection(parent, false);
			}
		}
	}
}

function selection(parent, checked) {
	let items = parent.querySelectorAll(".interest__check");
	for (let item of items) {
		item.checked = checked;
	}
}
