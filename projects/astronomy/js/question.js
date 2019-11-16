'use strict';

(function () {
	var QUESTIONS = [{
		question: 'Сколько планет в солнечной системе?',
		answers: ['7', '8', '9', '10']
	}, {
		question: 'Ближайшая к нам галактика Андромеды находится на расстоянии?',
		answers: ['1,5 млн св.лет', '2,5 млн св.лет', '3 млн св.лет']
	}, {
		question: 'Что такое «солнечный ветер»?',
		answers: ['Комплекс явлений, вызванных генерацией сильных магнитных полей на Солнце',
		 'Последняя внешняя оболочка Солнца', 'поток ионизированных частиц, истекающий из солнечной короны в окружающее космическое пространство']
	}, {
		question: 'Облако Оорта – это?',
		answers: ['сферическая область Солнечной системы',
		 'самый большой ураган на Юпитере', 'грозовой фронт на Венере']
	}, {
		question: 'Пояс астероидов расположен: ',
		answers: ['между орбитами Марса и Юпитера', 'за орбитой Плутона', 'между Солнцем и Меркурием']
	}, {
		question: 'Является ли Плутон планетой?',
		answers: ['Да', 'Нет']
	}, {
		question: 'Первооткрывателем законов движения планет Солнечной системы был:',
		answers: ['Николай Коперник', 'Джордано Бруно', 'Жак Кассини', 'Иоганн Кеплер']
	}, {
		question: 'Сколько спутников у Марса?',
		answers: ['их нет', '1', '2', '3']
	}, {
		question: 'Самый большой спутник в Солнечной системе:',
		answers: ['Ио', 'Луна', 'Ганимед', 'Европа']
	}, {
		question: 'К какому типу звезд по спектральной классификации относится Солнце?',
		answers: ['Белый карлик', 'Желтый карлик', 'Красный карлик', 'Белый гигант']
	}];

	var questionText = document.querySelector('.question__text');
	var questionAnswers = document.querySelector('.question__answers');
	var nextBtn = document.querySelector('.question__next-btn');
	var answerRadio = document.querySelector('.question__answer');

	var finishPopup = document.querySelector('.finish-popup');
	var question = document.querySelector('.question');

	var playerAnswers = [];
	var answersKey = [2, 2, 3, 1, 1, 2, 4, 3, 3, 2];
	var questionNumber = 0;

	var checkAnswers = function () {
		var answersRight = 0;

		for (var i = 0; i < answersKey.length; i++) {
			if (answersKey[i] === +playerAnswers[i]) {
				answersRight++
			}
		}
		return answersRight;
	};

	checkAnswers();

	var createFinishPopup = function () {
		var answersRight = checkAnswers();
		var image = finishPopup.querySelector('img');


		finishPopup.classList.remove('finish-popup--hide');
		finishPopup.querySelector('.finish-popup__result').textContent = 
		'Поздравляю, ' + window.playerName + '! Твой результат: ' + answersRight + '/10';

		if (answersRight <= 3) {
			finishPopup.querySelector('.finish-popup__description').textContent = 
			'Блин, ' + window.playerName + ', ты тупой';
			image.setAttribute('src', 'img/debil.jpg');
		}

		if (answersRight > 3 && answersRight <= 5) {
			finishPopup.querySelector('.finish-popup__description').textContent = 
			'Не очень, конечно, но что поделать';
			image.setAttribute('src', 'img/low.jpg');
		}

		if (answersRight > 5 && answersRight < 9) {
			finishPopup.querySelector('.finish-popup__description').textContent = 
			'Неплохо, дружок! Возможно, ты умней какого-нибудь среднестатистического школьника.';
			image.setAttribute('src', 'img/mid.jpg');
		}

		if (answersRight >= 9) {
			finishPopup.querySelector('.finish-popup__description').textContent = 
			'Ты правильно ответил на все или почти все вопросы. И чего ты ждешь? Похвалы? Ну молодец.';
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

	nextBtn.addEventListener('click', function () {
		var playerAnswer = document.querySelector('.question__answer input:checked');

		if (playerAnswer) {
			playerAnswers.push(playerAnswer.value);

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