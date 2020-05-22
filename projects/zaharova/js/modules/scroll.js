import smoothscroll from 'smoothscroll-polyfill';

const scroll = () => {
	smoothscroll.polyfill();
	const scrollTo = function (element) {
		let coord = element.offsetTop;

		window.scrollTo({
		    top: coord,
		    behavior: "smooth"
		});
	};

	const setScroll = function (triggerSelector) {
		let triggers = document.querySelectorAll(triggerSelector);

		triggers.forEach(item => {
			item.addEventListener('click', (e) => {
				e.preventDefault();
				let element = document.querySelector(`.${item.getAttribute('data-scrollid')}`);
				setTimeout(() => {
					scrollTo(element);
				}, 400);
				
			});
		});
	};

	setScroll('.navigation__link');
	
};
export default scroll;

