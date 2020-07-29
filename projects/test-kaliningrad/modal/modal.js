function Modal(selector, message) {
	const popup = document.querySelector(selector).cloneNode(true),
		  close = popup.querySelector('.popup__close'),
		  text = popup.querySelector('.popup__text'),
		  overlay = document.createElement('div');

	overlay.classList.add('overlay');
	overlay.appendChild(popup)
	document.body.appendChild(overlay);

	text.textContent = message;

	close.addEventListener('click', () => {
		overlay.remove();
	});

	overlay.addEventListener('click', (e) => {
		if (e.target !== popup && e.target.parentElement !== popup) {
			overlay.remove();
		}		
	});
}