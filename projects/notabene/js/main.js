import menu from './modules/menu';
import price from './modules/price';
import slider from './modules/slider';
import timer from './modules/timer';
import scroll from './modules/scroll';
import checkTextInputs from './modules/checkTextInputs';
import mask from './modules/mask';
import form from './modules/form';

window.addEventListener('DOMContentLoaded', () => {
	let deadline = document.querySelector('#timer').getAttribute('data-deadline');

	menu();
	price();
	slider();
	timer('#timer', deadline);
	scroll();
	mask('[name="phone"]');
	checkTextInputs('[name="name"]');
	form();
});







	



