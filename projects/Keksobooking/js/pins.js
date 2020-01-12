'use strict';

(function () {
  var PIN_WIDTH = 50;
  var PIN_HEIGTH = 70;

  var mapPins = document.querySelector('.map__pins');
  var pinTemplate = document.querySelector('#pin').content.querySelector('.map__pin');

  var getPinElement = function (ad) {
    var pin = pinTemplate.cloneNode(true);
    var pinX = (ad.location.x - PIN_WIDTH / 2);
    var pinY = (ad.location.y - PIN_HEIGTH);

    pin.style = 'left: ' + pinX + 'px; top: ' + pinY + 'px;';
    pin.querySelector('img').setAttribute('src', ad.author.avatar);
    pin.querySelector('img').setAttribute('alt', ad.offer.title);
    return pin;
  };

  var renderPin = function (ad) {
    var fragment = document.createDocumentFragment();

    fragment.appendChild(getPinElement(ad));
    mapPins.appendChild(fragment);
  };

  var renderPins = function (ads) {
    ads.forEach(function (el) {
      renderPin(el);
    });
  };

  window.pins = {
    update: function (data) {
      window.pins.clear();
      renderPins(data);
      window.cards.render(data);
    },
    clear: function () {
      var pinsList = mapPins.querySelectorAll('.map__pin');
      pinsList.forEach(function (el) {
        if (!el.classList.contains('map__pin--main')) {
          el.remove();
        }
      });
    }
  };
})();
