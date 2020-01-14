var experienceBtn = document.querySelector('.certificate_btn');
var experienceList = document.querySelector('.certificate_list');

var portfolioButton = document.querySelector('.portfolio_button');

var portfolioSection = document.querySelector('.portfolio');

var scroll = function (element) {
	var coord = element.offsetTop;
	window.scrollTo({
	    top: coord,
	    behavior: "smooth"
	});
};

experienceBtn.addEventListener('click', function () {
	console.log('[eq');
	if (experienceList.classList.contains('certificate_list--closed')) {
		experienceList.classList.remove('certificate_list--closed');
		experienceBtn.textContent = 'Скрыть сертификаты';
		experienceBtn.classList.add('certificate_btn--active');
		
	} else {
		experienceList.classList.add('certificate_list--closed');
		experienceBtn.textContent = 'Показать сертификаты';
		experienceBtn.classList.remove('certificate_btn--active');
	}
});

portfolioButton.addEventListener('click', function () {
	scroll(portfolioSection);
});
