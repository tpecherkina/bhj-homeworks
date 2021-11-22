const input = document.querySelector('.tasks__input');
const tasksList = document.querySelector('.tasks__list')
const buttonAdd = document.querySelector('.tasks__add');


buttonAdd.addEventListener('click', (e) => {
	e.preventDefault();
	if (input.value.trim()) {
		addDiv();
	}
	input.value = '';
});

function addDiv() {
	tasksList.insertAdjacentHTML('beforeend',
		`
	<div class="task">
		<div class="task__title">
			${input.value}
		</div>
		<a href="#" class="task__remove">&times;</a>
	</div>
	`);
}

tasksList.addEventListener("click", (e) => {
	let target = e.target;
	if (target.classList.contains("task__remove")) {
		e.preventDefault();
		e.target.closest(".task").remove();
	}
});
