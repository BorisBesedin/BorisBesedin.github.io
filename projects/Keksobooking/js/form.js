'use strict';

(function () {
  var MAIN_PIN_WIDTH = 65;
  var MAIN_PIN_HEIGTH = 87;
  var TOO_MATCH_GUESTS_MESSAGE = 'Количество гостей не соответствует количеству комнат';
  var NO_GUESTS_MESSAGE = 'Вероятно, 100 комнат - это не для гостей';
  var URL = 'https://js.dump.academy/keksobooking';

  var adForm = document.querySelector('.ad-form');
  var mapFilters = document.querySelector('.map__filters');
  var resetBtn = adForm.querySelector('.ad-form__reset');

  var adAdressInput = document.querySelector('input[name = "address"]');
  var price = adForm.querySelector('input[name="price"]');

  var roomsNumberSelect = adForm.querySelector('select[name="rooms"]');
  var guestsNumberSelect = adForm.querySelector('select[name="capacity"]');
  var typeSelect = adForm.querySelector('select[name="type"]');

  var timeInSelect = adForm.querySelector('select[name="timein"]');
  var timeOutSelect = adForm.querySelector('select[name="timeout"]');

  var setElementAvailability = function (form, elemetsSelector, desabledValue) {
    var elements = form.querySelectorAll(elemetsSelector);
    for (var i = 0; i < elements.length; i++) {
      if (!desabledValue) {
        elements[i].setAttribute('disabled', 'disabled');
      } else {
        elements[i].removeAttribute('disabled');
      }
    }
  };

  var getCoords = function (elem) {
    return {
      top: Math.floor(elem.offsetTop + MAIN_PIN_HEIGTH / 2),
      left: Math.floor(elem.offsetLeft + MAIN_PIN_WIDTH / 2)
    };
  };

  var setPrice = function () {
    var selectedValue = typeSelect.value;
    var offerAttributes = window.offerType[selectedValue].attributes;
    price.setAttribute('min', offerAttributes.min);
    price.setAttribute('placeholder', offerAttributes.placeholder);
  };

  var setTime = function (el1, el2) {
    el2.selectedIndex = el1.selectedIndex;
  };

  window.form = {
    setAvailability: function (desabledValue) {
      setElementAvailability(adForm, 'input, select', desabledValue);
      setElementAvailability(mapFilters, 'input, select', desabledValue);
      setElementAvailability(adForm, 'button', desabledValue);
    },
    setAdressInput: function (elem, activeMode) {
      if (activeMode) {
        var y = Math.floor(getCoords(elem).top + MAIN_PIN_HEIGTH / 2);
      } else {
        y = getCoords(elem).top;
      }

      var x = getCoords(elem).left;
      adAdressInput.setAttribute('value', x + ', ' + y);
    },
    validate: function () {
      var roomsSelected = roomsNumberSelect.value;
      var guestsSelected = guestsNumberSelect.value;

      guestsNumberSelect.setCustomValidity('');

      if (+guestsSelected > +roomsSelected) {
        guestsNumberSelect.setCustomValidity(TOO_MATCH_GUESTS_MESSAGE);
      }

      if (guestsSelected !== '0' && roomsSelected === '100') {
        guestsNumberSelect.setCustomValidity(NO_GUESTS_MESSAGE);
      }
    }
  };

  var onSubmit = function () {
    window.activeModeHandler(false);
    mapFilters.reset();
    window.popup.openSuccess();
  };

  guestsNumberSelect.addEventListener('change', window.form.validate);
  roomsNumberSelect.addEventListener('change', window.form.validate);
  typeSelect.addEventListener('change', setPrice);

  timeInSelect.addEventListener('change', function () {
    setTime(timeInSelect, timeOutSelect);
  });
  timeOutSelect.addEventListener('change', function () {
    setTime(timeOutSelect, timeInSelect);
  });

  adForm.addEventListener('submit', function (evt) {
    window.server.upload(URL, new FormData(adForm), onSubmit, window.popup.openError);
    evt.preventDefault();
  });

  resetBtn.addEventListener('click', function () {
    window.activeModeHandler(false);
  });
})();
