'use strict';

(function () {
	var QUESTIONS_COUNT = 10;

	var QUESTIONS;

	var questionText = document.querySelector('.question__text');
	var questionAnswers = document.querySelector('.question__answers');
	var nextBtn = document.querySelector('.question__next-btn');
	var answerRadio = document.querySelector('.question__answer');

	var finishPopup = document.querySelector('.finish-popup');
	var question = document.querySelector('.question');

	var togglesList = document.querySelector('.toggles__list');

	var answersRight = 0;
	var questionNumber = 0;

	var shuffle = function (arr) {
		var j, temp;
		for(var i = arr.length - 1; i > 0; i--){
			j = Math.floor(Math.random()*(i + 1));
			temp = arr[j];
			arr[j] = arr[i];
			arr[i] = temp;
		}
		return arr;
	}

	var renderToggles = function () {
		var questionsNumber = QUESTIONS.length;

		for (var i = 0; i < questionsNumber; i++) {
			var toggle = document.createElement('li');
			togglesList.appendChild(toggle);
			toggle.setAttribute('class', 'toggles__item');
		}
	};

	var checkAnswer = function (answer) {
		var toggles = document.querySelectorAll('.toggles__item');

		if (answer === QUESTIONS[questionNumber - 1].key) {
			toggles[questionNumber - 1].classList.add('toggles__item--true');
			answersRight++;
		} else {
			toggles[questionNumber - 1].classList.add('toggles__item--false');
		}
	};

	var createFinishPopup = function () {
		var image = finishPopup.querySelector('img');
		var percent = answersRight * 100 / QUESTIONS_COUNT;

		finishPopup.classList.remove('finish-popup--hide');
		finishPopup.querySelector('.finish-popup__result').textContent = 
		'Поздравляю, ' + window.playerName + '! Твой результат: ' + answersRight + '/' + QUESTIONS.length;

		if (percent <= 30) {
			finishPopup.querySelector('.finish-popup__description').textContent = 
			'Блин, ' + window.playerName + ', ты тупой';
			image.setAttribute('src', 'img/debil.jpg');
		}

		if (percent > 30 && percent <= 50) {
			finishPopup.querySelector('.finish-popup__description').textContent = 
			'Не очень, конечно, но что поделать. Но ведь ты же ни на что не претендовал, да?';
			image.setAttribute('src', 'img/low.jpg');
		}

		if (percent > 50 && percent < 90) {
			finishPopup.querySelector('.finish-popup__description').textContent = 
			'Неплохо, дружок! Возможно, ты умней какого-нибудь среднестатистического школьника(нет).';
			image.setAttribute('src', 'img/mid.jpg');
		}

		if (percent >= 90) {
			finishPopup.querySelector('.finish-popup__description').textContent = 
			'Ты правильно ответил на все или почти все вопросы. И чего ты ждешь? Похвалы? Ну молодец. А теперь проваливай.';
			image.setAttribute('src', 'img/high.jpg');
		}

		if (window.playerName === 'Елена' || window.playerName === 'Лена' || window.playerName === 'Белка') {
			finishPopup.querySelector('.finish-popup__description').textContent = 
			'А кто у нас тут маленький любитель астрономии?';
			
			image.setAttribute('src', 'img/lena.jpg');
		}
	};

	window.createQuestion = function (num) {
		question.classList.remove('question--hide');		
		questionText.textContent = QUESTIONS[num].question;
		questionNumber = num + 1;
		questionAnswers.querySelectorAll('.question__answer').forEach(function (el) {
			el.remove();
		});

		for (var i = 0; i < QUESTIONS[num].answers.length; i++) {
			var answer = answerRadio.cloneNode(true);
			var input = answer.querySelector('input');
			var label = answer.querySelector('label');

			questionAnswers.appendChild(answer);
			label.textContent = (i + 1) + ') ' + QUESTIONS[num].answers[i];
			label.setAttribute('for', 'answer-' + i);
			input.setAttribute('id', 'answer-' + i);
			input.setAttribute('value', (i + 1));
		}
	};

	QUESTIONS = shuffle(data).slice(0, QUESTIONS_COUNT);
	renderToggles();

	nextBtn.addEventListener('click', function () {
		var playerAnswer = document.querySelector('.question__answer input:checked');

		if (playerAnswer) {
			checkAnswer(playerAnswer.value);

			if (questionNumber < QUESTIONS.length) {
				window.createQuestion(questionNumber++);
			} else {
				createFinishPopup();
				question.classList.add('question--hide');
			}
		} else {
			alert('Ну определись уже с ответом то!');
		}	
	});
})();