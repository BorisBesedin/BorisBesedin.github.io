'use strict';

(function(){
    window.showMessage = function(text) {
        let popup = document.querySelector('.message-popup'),
            message = popup.querySelector('.message'),
            closeBtn = popup.querySelector('.close-btn');
    
        popup.style.display = "block";
        message.textContent = text;
    
        closeBtn.addEventListener('click', () => {
            popup.style.display = 'none';
        });
    };
})();