'use strict';

(function () {
  var MAP_WIDTH = 1200;
  var MAP_MAX_Y = 630;
  var MAP_MIN_Y = 130;

  var MAIN_PIN_WIDTH = 62;
  var MAIN_PIN_HEIGHT = 84;

  var MAIN_PIN_Y_MIN = MAP_MIN_Y - MAIN_PIN_HEIGHT;
  var MAIN_PIN_Y_MAX = MAP_MAX_Y - MAIN_PIN_HEIGHT;

  var MAIN_PIN_X_MAX = MAP_WIDTH - MAIN_PIN_WIDTH / 2;
  var MAIN_PIN_X_MIN = 0 - MAIN_PIN_WIDTH / 2;

  var mainPin = document.querySelector('.map__pin--main');

  mainPin.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      if (mainPin.offsetTop <= MAIN_PIN_Y_MAX && mainPin.offsetTop >= MAIN_PIN_Y_MIN) {
        mainPin.style.top = (mainPin.offsetTop - shift.y) + 'px';
      } else if (mainPin.offsetTop > MAIN_PIN_Y_MAX) {
        mainPin.style.top = MAIN_PIN_Y_MAX + 'px';
      } else if (mainPin.offsetTop < MAIN_PIN_Y_MIN) {
        mainPin.style.top = MAIN_PIN_Y_MIN + 'px';
      }

      if (mainPin.offsetLeft <= MAIN_PIN_X_MAX && mainPin.offsetLeft >= MAIN_PIN_X_MIN) {
        mainPin.style.left = (mainPin.offsetLeft - shift.x) + 'px';
      } else if (mainPin.offsetLeft > MAIN_PIN_X_MAX) {
        mainPin.style.left = MAIN_PIN_X_MAX + 'px';
      } else if (mainPin.offsetLeft < MAIN_PIN_X_MIN) {
        mainPin.style.left = MAIN_PIN_X_MIN + 'px';
      }

      window.form.setAdressInput(mainPin, true);
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
})();
