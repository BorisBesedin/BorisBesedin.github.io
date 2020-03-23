(function() {
    let popup = document.querySelector('.results'),
        count = popup.querySelector('.results-count'),
        wordsList = popup.querySelector('.results-words'),
        resultsBtn = document.querySelector('.results-btn'),
        saveBtn = document.querySelector('.save-btn'),
        clearBtn = document.querySelector('.clear-results-btn'),
        storage = localStorage;

    resultsBtn.addEventListener('click', showResults);
    saveBtn.addEventListener('click', saveWords);

    clearBtn.addEventListener('click', clear);

    function clear() {
        count.textContent = '0';
        wordsList.textContent = '';
        storage.clear();
    }

    function showResults(data) {
        let closeBtn = popup.querySelector('.results .close-btn'),
            results = JSON.parse(storage.getItem("results"));
        
        wordsList.textContent = '';

        popup.style.display = 'block';

        if (results) {
            count.textContent = results.length;
            results.forEach(item => wordsList.textContent += '<' + item + '>');
        }       

        closeBtn.addEventListener('click', () => {
            popup.style.display = 'none';
        });
    }

    function saveWords() {
        let words = document.querySelectorAll('.word'),
            resultsArr = [];

        words.forEach(function(item) {
            resultsArr.push(item.textContent);
        });

        storage.setItem("results", JSON.stringify(resultsArr));

        window.showMessage('Результат сохранен!');
    }
})();