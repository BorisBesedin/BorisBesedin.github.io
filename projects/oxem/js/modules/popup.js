const popup = (triggerSelector, popupSelector) => {
	const triggers = document.querySelectorAll(triggerSelector),
		popup = document.querySelector(popupSelector),
		close = popup.querySelector('.popup__close'),
		overlay = document.querySelector('.overlay');

	function openPopup() {
		popup.classList.remove('slideDown');
		popup.style.display = 'block';
		popup.classList.add('slideUp');

		overlay.style.display = 'block';
		document.body.style.overflow = 'hidden';
	}

	function closePopup() {
		popup.classList.remove('slideUp');
		popup.classList.add('slideDown');
		setTimeout(() => {
			popup.style.display = 'none';
			overlay.style.display = 'none';
			document.body.style.overflow = 'scroll';
		}, 350)
	}

	triggers.forEach(item => {
		item.addEventListener('click', openPopup);
	});

	close.addEventListener('click', closePopup);
};

export default popup;