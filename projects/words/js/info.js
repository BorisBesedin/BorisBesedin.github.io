(function(){
    let popup = document.querySelector('.word-info'),
        closeBtn = popup.querySelector('.close-btn'),
        word = popup.querySelector('.word-text'),
        text = popup.querySelector('.word-description');

    function openPopup(data) {
        popup.style.display = 'block';
        let defs = data.def[0].tr,
            description = '';

        defs.forEach(element => {
            description += ' <' + element.text + '> ';
            text.textContent = description;
        });

        word.textContent = data.def[0].text;


        closeBtn.addEventListener('click', () => {
            popup.style.display = 'none';
        });
    }

    window.showInfo = function(text) {
        const dict = `https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=dict.1.1.20200321T143725Z.1084590be1c43ab6.c9fb7715deda5eadad6c9a6235c8214d24658af4&lang=ru-ru&text=${text}`;
        fetch(dict)
            .then(response => {
                return response.json();
            })
            .then(data => {
                openPopup(data);
            })
            .catch(() => {
                window.showMessage('Нет такого слова');
            });
    };
})();