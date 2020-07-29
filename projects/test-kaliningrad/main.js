const data = {
	optionList: [
	{
		id: 1,
		value: 'vue'
	},
	{
		id: 2,
		value: 'react'
	},
	{
		id: 3,
		value: 'angular'
	}
	],
	openPopup: function (data) {
		console.log(data);
		let overlay = document.querySelector('.overlay');
		if (overlay) {
			overlay.remove();
		}
		const modal = new Modal('.text-popup', `Выбрано: ${data.value}`);		
	}
}

window.addEventListener('DOMContentLoaded', () => {
	const frameworks = new Select('.select', data.optionList, data.openPopup);
});