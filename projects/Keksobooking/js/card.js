'use strict';

(function () {
  var pins;
  var mapPopup = document.querySelector('.map');
  var cardTemplate = document.querySelector('#card').content.querySelector('.map__card');

  window.offerType = {
    'palace': {
      label: 'Дворец',
      attributes: {
        min: 10000,
        placeholder: 10000
      }
    },
    'flat': {
      label: 'Квартира',
      attributes: {
        min: 1000,
        placeholder: 1000
      }
    },
    'house': {
      label: 'Дом',
      attributes: {
        min: 5000,
        placeholder: 5000
      }
    },
    'bungalo': {
      label: 'Бунгало',
      attributes: {
        min: 0,
        placeholder: 0
      }
    }
  };

  var renderCardElement = function (ad) {
    var card = cardTemplate.cloneNode(true);

    var setFeatures = function () {
      var popupFeaturesList = card.querySelector('.popup__features');
      var popupFeaturesItems = card.querySelectorAll('.popup__feature');

      if (!ad.offer.features.length) {
        popupFeaturesList.remove();
      }

      for (var i = 0; i < popupFeaturesItems.length; i++) {
        ad.offer.features.forEach(function (el) {
          if (popupFeaturesItems[i].classList.contains('popup__feature--' + el)) {
            popupFeaturesList.appendChild(popupFeaturesItems[i].cloneNode());
          }
          popupFeaturesItems[i].remove();
        });
      }
    };

    var addPhotos = function () {
      var photo = card.querySelector('.popup__photo');
      var container = card.querySelector('.popup__photos');

      ad.offer.photos.forEach(function (el) {
        var addedPhoto = photo.cloneNode();

        container.appendChild(addedPhoto);
        addedPhoto.setAttribute('src', el);
      });
      photo.remove();
    };

    card.querySelector('.popup__title').textContent = ad.offer.title;
    card.querySelector('.popup__text--address').textContent = ad.offer.adress;
    card.querySelector('.popup__text--price').textContent = ad.offer.price;
    card.querySelector('.popup__type').textContent = window.offerType[ad.offer.type].label;
    card.querySelector('.popup__text--capacity').textContent = ad.offer.rooms + ' комнаты для ' + ad.offer.guests + ' гостей';
    card.querySelector('.popup__text--time').textContent = 'Заезд после ' + ad.offer.checkin + ', ' + 'выезд до ' + ad.offer.checkout;
    card.querySelector('.popup__description').textContent = ad.offer.description;
    card.querySelector('.popup__avatar').setAttribute('src', ad.author.avatar);

    setFeatures(ad);
    addPhotos(ad);

    return card;
  };

  var renderAdCard = function (ad) {
    var fragment = document.createDocumentFragment();
    fragment.appendChild(renderCardElement(ad));
    mapPopup.appendChild(fragment);
  };

  window.cards = {
    render: function (adsData) {
      pins = Array.from(document.querySelectorAll('.map__pin')).filter(function (el) {
        return !el.classList.contains('map__pin--main');
      });
      var closeBtn;
      var card;

      pins.forEach(function (pin) {
        pin.addEventListener('click', function () {
          window.cards.clear();
          renderAdCard(adsData[pins.indexOf(pin)]);
          pin.classList.add('map__pin--active');
          card = mapPopup.querySelector('.map__card');
          closeBtn = card.querySelector('.popup__close');

          closeBtn.addEventListener('click', function () {
            window.cards.clear();
          });
        });
      });

      document.addEventListener('keydown', function (evt) {
        window.util.isEscEvent(evt, function () {
          window.cards.clear();
        });
      });
    },
    clear: function () {
      var card = mapPopup.querySelector('.map__card');
      var activePin = document.querySelector('.map__pin--active');

      if (card) {
        card.remove();
      }

      if (activePin) {
        activePin.classList.remove('map__pin--active');
      }
    }
  };
})();
