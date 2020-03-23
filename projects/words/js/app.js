'use strict';

// render main word

const mainWord = 'Лекарство';

let mainWordBlock = document.querySelector('.main-word'),
    letters = mainWord.toLowerCase().split('');

letters.forEach(function(item) {
    window.createElem(mainWordBlock, 'button', 'word-letter', item);
});

// add letter to new word

let lettersBtn = document.querySelectorAll('.word-letter'),
    wordInput = document.querySelector('.new-word input'),
    addBtn = document.querySelector('.add-word-btn'),
    cleatBtn = document.querySelector('.clear-word-btn');

lettersBtn.forEach(function(item) {
    item.addEventListener('click', () => {
        wordInput.value += item.textContent;
    });
});

cleatBtn.addEventListener('click', () => {
    wordInput.value = '';
});


// add word to list

function addWord() {
    let word = wordInput.value;

    if (word) {
        window.searchWord(word);
        wordInput.value = '';
    } else {
        window.showMessage('Пустая строка, мужик!');
    } 
}

addBtn.addEventListener('click', addWord);

wordInput.addEventListener('keydown', function(evt){
    if (evt.keyCode === 13) {
        addWord();
    }
});

// show word info

let wordsList = document.querySelector('.words-list');

wordsList.addEventListener('click', function(evt) {
    let target = evt.target;

    if (target.classList.contains('word')) {
        window.showInfo(target.textContent);
    }
});


