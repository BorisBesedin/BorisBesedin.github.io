const table = document.querySelector('.table'),
	  tableRow = document.createElement('tr'),
	  tableCell = document.createElement('td'),
	  url = 'https://www.consult-info.ru/upload/users.json';

// const getData = async (url) => {
//     let responce = await fetch(url);

//     if (!responce.ok) {
//         throw new Error(`Could not fetch ${url}, status: ${responce.status}`);
//     }

//     return await responce.json();
// };

const renderTable = function (data) {
	const row = tableRow.cloneNode();

	table.appendChild(row);

	for (key in data) {
		const cell = tableCell.cloneNode();
		row.appendChild(cell);
		cell.textContent = data[key];

		if (key === 'avatar') {
			cell.style.background = `URL(${data[key]}) no-repeat`;
			cell.textContent = '';
		}
	}		
};

let data = users;  // getData(url)

data.forEach(function (el) {
	renderTable(el);
});

