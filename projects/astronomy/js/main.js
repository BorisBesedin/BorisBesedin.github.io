'use strict';

var nameInput = document.querySelector('.start-popup__name-input');
var startBtn = document.querySelector('.start-popup__button');
var startPopup = document.querySelector('.start-popup');


window.playerName;

startBtn.addEventListener('click', function () {
	if (nameInput.value !== '') {
		startPopup.classList.add('start-popup--hide');		
		window.playerName = nameInput.value;
		window.createQuestion(0);
	} else {
		alert('Представься, мать твою!');
	}
});
