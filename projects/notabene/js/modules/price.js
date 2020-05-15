const price = () => {
	const buttons = document.querySelectorAll('.price__item span'),
		submenus = document.querySelectorAll('.price__submenu');

	function clean() {
		buttons.forEach(item => item.classList.remove('price__btn--active'));
		submenus.forEach(item => item.classList.remove('price__submenu--active'));
	}

	buttons.forEach((item, i) => {
		item.addEventListener('click', () => {
			if (!item.classList.contains('price__btn--active')) {
				clean();
			}
			
			submenus[i].classList.toggle('price__submenu--active');
			item.classList.toggle('price__btn--active');
		});	
	});

	
};

export default price;