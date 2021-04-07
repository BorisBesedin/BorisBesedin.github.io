import slider from './modules/slider'
import mask from './modules/mask';
import menu from '../js/modules/menu'
import popup from '../js/modules/popup'
import inputs from '../js/modules/inputs'
import range from '../js/modules/range'
import calculator from '../js/modules/calculator'
import form from '../js/modules/form'


window.addEventListener('DOMContentLoaded', () => {
	let calculatedData = null

	menu('.menu__toggle', '.menu', '.menu__close');
	slider();
	popup('.popup-btn', '.popup')
	mask('#phone')
	inputs()
	form()
	range('#price', '.calc-inputs__line-move.price', '.calc-inputs__toggle.price', 0, 6000000)
	range('#period', '.calc-inputs__line-move.period', '.calc-inputs__toggle.period', 1, 60)
	range('#procent', '.calc-inputs__line-move.start-pay', '.calc-inputs__toggle.start-pay', 10, 60)
	calculator()
});







	











	



