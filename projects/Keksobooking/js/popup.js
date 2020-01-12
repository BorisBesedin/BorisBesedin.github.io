'use strict';

(function () {
  var errorPopupTemplate = document.querySelector('#error').content.querySelector('.error');
  var successPopupTemplate = document.querySelector('#success').content.querySelector('.success');
  var main = document.querySelector('main');

  var closePopup = function (popup) {
    popup.remove();
  };

  window.popup = {
    openError: function (message) {
      var popup = errorPopupTemplate.cloneNode(true);
      var fragment = document.createDocumentFragment();
      var button = popup.querySelector('.error__button');

      fragment.appendChild(popup);
      main.appendChild(fragment);
      popup.querySelector('.error__message').textContent = message;

      button.addEventListener('click', function () {
        closePopup(popup);
      });

      document.addEventListener('keydown', function (evt) {
        window.util.isEscEvent(evt, closePopup(popup));
      });
    },
    openSuccess: function () {
      var popup = successPopupTemplate.cloneNode(true);
      var fragment = document.createDocumentFragment();

      fragment.appendChild(popup);
      main.appendChild(fragment);

      document.addEventListener('click', function () {
        closePopup(popup);
      });

      document.addEventListener('keydown', function (evt) {
        window.util.isEscEvent(evt, function () {
          closePopup(popup);
        });
      });
    }
  };
})();
