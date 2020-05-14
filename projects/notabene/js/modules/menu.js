const menu = () => {
	const toggle = document.querySelector('.navigation__toggle'),
		menu = document.querySelector('.navigation'),
		menuItems = document.querySelectorAll('.navigation__link');

	toggle.addEventListener('click', () => {
		if (menu.classList.contains('navigation--opened')) {
			menu.classList.remove('navigation--opened');
			menu.classList.add('navigation--closed');
		} else if (menu.classList.contains('navigation--closed')) {
			menu.classList.remove('navigation--closed');
			menu.classList.add('navigation--opened');
		}
	});

	menuItems.forEach(item => {
		item.addEventListener('click', () => {
			toggle.click();
		});
	});
};

export default menu;