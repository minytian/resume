
const open = document.querySelector('.works__modal')
const myModal = document.querySelector('.myModal')
const close = document.querySelector('.close')

open.onclick = function () {
	myModal.style.display = 'block'
}

close.onclick = function () {
	myModal.style.display = 'none'
}

window.onclick = function (event) {
	if (event.target == myModal) {
		myModal.style.display = 'none'
	}
}