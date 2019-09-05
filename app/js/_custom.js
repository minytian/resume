
// модальные окна
// const open = document.querySelectorAll('.works__modal')
const open__biruang = document.querySelectorAll('.works__modal')[0]
const open__pricing = document.querySelectorAll('.works__modal')[1]
const open__design = document.querySelectorAll('.works__modal')[2]
const open__atlantida = document.querySelectorAll('.works__modal')[3]
const open__smitler = document.querySelectorAll('.works__modal')[4]
const modal__biruang = document.querySelector('#modal__biruang')
const modal__pricing = document.querySelector('#modal__pricing')
const modal__design = document.querySelector('#modal__design')
const modal__atlantida = document.querySelector('#modal__atlantida')
const modal__smitler = document.querySelector('#modal__smitler')
const close = document.querySelectorAll('.close')

for (let i = 0; i < close.length; i++) {
	const ars = close[i]

	ars.onclick = function () {
		modal__biruang.style.display = 'none'
		modal__pricing.style.display = 'none'
		modal__design.style.display = 'none'
		modal__atlantida.style.display = 'none'
		modal__smitler.style.display = 'none'
	}
}


open__biruang.onclick = function () {
		modal__biruang.style.display = 'block'
}

open__pricing.onclick = function () {
		modal__pricing.style.display = 'block'
}

open__design.onclick = function () {
		modal__design.style.display = 'block'
}

open__atlantida.onclick = function () {
		modal__atlantida.style.display = 'block'
}

open__smitler.onclick = function () {
		modal__smitler.style.display = 'block'
}

window.onclick = function (event) {
	if (event.target === modal__biruang || event.target === modal__pricing 
		|| event.target === modal__design || event.target === modal__atlantida
		|| event.target === modal__smitler ) {
		modal__biruang.style.display = 'none'
		modal__pricing.style.display = 'none'
		modal__design.style.display = 'none'
		modal__atlantida.style.display = 'none'
		modal__smitler.style.display = 'none'
	}
}


// Убираем placeholder при focuse
// Кстати, можно было сделать просто в html-разметке <input type="text" class="text" value="Введите текст" onfocus="this.value=''" onblur="this.value='Введите текст'">

const feedback__enterName = document.querySelector('.feedback__enterName')
const feedback__enterEmail = document.querySelector('.feedback__enterEmail')
const feedback__enterText = document.querySelector('.feedback__enterText')

feedback__enterName.onfocus = function () {
	this.setAttribute('placeholder', '')
}

feedback__enterEmail.onfocus = function () {
	this.setAttribute('placeholder', '')
}

feedback__enterText.onfocus = function () {
	this.setAttribute('placeholder', '')
}

feedback__enterName.onblur = function () {
	this.setAttribute('placeholder', 'Введите имя')
}

feedback__enterEmail.onblur = function () {
	this.setAttribute('placeholder', 'Введите имя')
}

feedback__enterText.onblur = function () {
	this.setAttribute('placeholder', 'Введите имя')
};

// ajax
$(document).ready(function() {

	//E-mail Ajax Send
	$("form.feedback__form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "../mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(th).find('.success').addClass('active').css('display', 'flex').hide().fadeIn();
			setTimeout(function() {
				$(th).find('.success').removeClass('active').fadeOut();
				th.trigger("reset");
			}, 3000);
		});
		return false;
	});

});

