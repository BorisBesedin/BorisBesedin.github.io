'use strict';

(function () {
  var createRequest = function (xhr, onSuccess, onError) {
    var SUCCESS_STATUS = 200; // ms
    var TIMEOUT = 10000; // ms

    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === SUCCESS_STATUS) {
        onSuccess(xhr.response);
      } else {
        onError('Cтатус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Ошибка при загрузке данных с сервера');
    });

    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    xhr.timeout = TIMEOUT;
  };

  window.server = {
    load: function (URL, onSuccess, onError) {
      var xhr = new XMLHttpRequest();

      createRequest(xhr, onSuccess, onError);
      xhr.open('GET', URL);
      xhr.send();
    },
    upload: function (URL, data, onSuccess, onError) {
      var xhr = new XMLHttpRequest();

      createRequest(xhr, onSuccess, onError);
      xhr.open('POST', URL);
      xhr.send(data);
    }
  };
})();
