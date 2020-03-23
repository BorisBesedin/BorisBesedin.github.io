'use strict';

(function(){
    let wordsList = document.querySelector('.words-list'),
    wordsCount = document.querySelector('.count');

    function addWord(text) {
        let elements = document.querySelectorAll('.word'),
            words = [];
    
        elements.forEach(function(el) {
            words.push(el.textContent);
        });
    
        if (words !== [] && !words.includes(text)) {
            window.createElem(wordsList, 'li', 'word', text);
        } else {
            window.showMessage('Уже было! Проснись.');
        }    
    }    

    window.searchWord = function(text) {
        const dict = `https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=dict.1.1.20200321T143725Z.1084590be1c43ab6.c9fb7715deda5eadad6c9a6235c8214d24658af4&lang=ru-ru&text=${text}`;
        fetch(dict)
            .then(response => {
                return response.json();
            })
            .then(data => {
                let def = data.def[0].text,
                    pos = data.def[0].pos;

                if (def && pos === 'noun' && text !== 'лекарство') {
                    addWord(def);
                    wordsCount.textContent = wordsList.querySelectorAll('li').length;
                }
    
                if (pos != 'noun') {
                    window.showMessage('Это не существительное, умник');
                }
    
                if (text === 'лекарство') {
                    window.showMessage('Серьезно?');
                }
            })
            .catch(() => {
                window.showMessage('Нет такого слова');
            });
    };
})();