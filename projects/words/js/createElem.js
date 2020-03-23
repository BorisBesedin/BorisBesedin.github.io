'use strict';

(function(){
    window.createElem = function(parent, tag, className, text) {
        let elem = document.createElement(tag);
    
        elem.classList.add(className);
        elem.textContent = text;
    
        parent.appendChild(elem);
    };
})();