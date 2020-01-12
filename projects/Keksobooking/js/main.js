'use strict';

(function () {
  var MAIN_PIN_START_COORDS = 'left: 570px; top: 375px;';
  var mapPopup = document.querySelector('.map');
  var mapMainPin = document.querySelector('.map__pin--main');
  var adForm = document.querySelector('.ad-form');
  var isActiveMode;

  var loadData = function () {
    if (!isActiveMode) {
      window.loadAds();
    }
  };

  var setActiveMode = function () {
    loadData();
    window.activeModeHandler(true);
  };

  window.activeModeHandler = function (value) {
    window.form.setAvailability(value);
    window.form.setAdressInput(mapMainPin, value);
    isActiveMode = value;

    if (value) {
      mapPopup.classList.remove('map--faded');
      adForm.classList.remove('ad-form--disabled');

      window.form.validate();
    } else {
      mapPopup.classList.add('map--faded');
      adForm.classList.add('ad-form--disabled');
      adForm.reset();

      mapMainPin.style = MAIN_PIN_START_COORDS;
      window.form.setAdressInput(mapMainPin, value);

      window.pins.clear();
      window.cards.clear();
      window.imageLoading.clear();
    }
  };

  window.activeModeHandler(false);

  mapMainPin.addEventListener('mousedown', setActiveMode);

  mapMainPin.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, setActiveMode);
  });
})();
