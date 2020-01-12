'use strict';

(function () {
  var ADS_COUNT = 5;
  var URL = 'https://js.dump.academy/keksobooking/data';

  var ads = [];

  var form = document.querySelector('.map__filters');
  var filters = form.querySelectorAll('select');

  var typeSelect = form.querySelector('select[name="housing-type"]');
  var priceSelect = form.querySelector('select[name="housing-price"]');
  var roomsSelect = form.querySelector('select[name="housing-rooms"]');
  var guestsSelect = form.querySelector('select[name="housing-guests"]');
  var featuresCheckbox = form.querySelectorAll('input[name="features"]');
  var featuresCheckedList = [];

  var onSuccess = function (data) {
    ads = data;
    window.pins.update(ads.slice(0, ADS_COUNT));
  };

  window.loadAds = function () {
    window.server.load(URL, onSuccess, window.popup.openError);
  };

  var filterPins = function () {
    window.cards.clear();

    var selectedType = typeSelect.value;
    var selectedPrice = priceSelect.value;
    var selectedRooms = roomsSelect.value;
    var selectedGuests = guestsSelect.value;

    var getPriceValue = function (pin) {
      var LOW_PRICE = 10000;
      var HIGH_PRICE = 50000;

      switch (true) {
        case (pin.offer.price < LOW_PRICE): return 'low';
        case (pin.offer.price > HIGH_PRICE): return 'high';
        case (pin.offer.price < HIGH_PRICE && pin.offer.price >= LOW_PRICE): return 'middle';
      }
      return null;
    };

    var checkSelectedFeatures = function (pin) {
      var num = 0;

      featuresCheckedList.forEach(function (el) {
        if (pin.offer.features.includes(el)) {
          num++;
        }
      });

      if (num === featuresCheckedList.length) {
        return true;
      }

      return false;
    };

    var filteredAds = ads.filter(function (pin) {
      var isTypeMatched = selectedType === 'any' ? true : selectedType === pin.offer.type;
      var isPriceMatched = selectedPrice === 'any' ? true : getPriceValue(pin) === selectedPrice;
      var isRoomsMatched = selectedRooms === 'any' ? true : pin.offer.rooms >= +selectedRooms;
      var isGuestsMatched = selectedGuests === 'any' ? true : pin.offer.guests === +selectedGuests;
      var isFeaturesMatched = checkSelectedFeatures(pin);

      return isTypeMatched && isPriceMatched && isRoomsMatched && isGuestsMatched && isFeaturesMatched;
    });

    window.pins.update(filteredAds.slice(0, ADS_COUNT));
  };

  featuresCheckbox.forEach(function (feature) {
    feature.addEventListener('click', function () {
      var featuresCheckedItems = form.querySelectorAll('input[name="features"]:checked');
      featuresCheckedList = Array.from(featuresCheckedItems).map(function (checkbox) {
        return checkbox.value;
      });
      window.debounce(filterPins);
    });
  });

  filters.forEach(function (filter) {
    filter.addEventListener('change', function () {
      window.debounce(filterPins);
    });
  });
})();
