var experienceBtn = document.querySelector('.certificate_btn');
var experienceList = document.querySelector('.certificate_list');
console.log('[eq');

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