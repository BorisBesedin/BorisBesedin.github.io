const price = () => {
	const buttons = document.querySelectorAll('.price__item span');

	buttons.forEach((item, i) => {
		item.addEventListener('click', () => {
			let submenus = document.querySelectorAll('.price__submenu');

			submenus[i].classList.toggle('price__subitem--active');
			item.classList.toggle('price__btn--active');
		});	
	});

	
};

export default price;