'use strict';

(function () {
  var FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

  window.imageLoading = {
    load: function (file, imgArea) {
      var fileName = file.name.toLowerCase();

      if (file) {
        var matches = FILE_TYPES.some(function (it) {
          return fileName.endsWith(it);
        });

        if (matches) {
          var reader = new FileReader();

          reader.addEventListener('load', function () {
            imgArea.src = reader.result;
          });

          reader.readAsDataURL(file);
        }
      }
    },
    setDragAndDrop: function (dropArea) {
      var DRAG_EVENTS = ['dragenter', 'dragover', 'dragleave', 'drop'];

      var highlight = function () {
        dropArea.classList.add('highlight');
      };

      var unhighlight = function () {
        dropArea.classList.remove('highlight');
      };

      var preventDefaults = function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
      };

      DRAG_EVENTS.forEach(function (eventName) {
        dropArea.addEventListener(eventName, preventDefaults);

        if (eventName === 'dragenter' || eventName === 'dragover') {
          dropArea.addEventListener(eventName, highlight);
        }

        if (eventName === 'dragleave' || eventName === 'drop') {
          dropArea.addEventListener(eventName, unhighlight);
        }
      });
    },
    clear: function () {
      var avatar = document.querySelector('.ad-form-header__preview img');
      var photos = document.querySelectorAll('.ad-form__photo');

      avatar.setAttribute('src', 'img/muffin-grey.svg');

      for (var i = 0; i < photos.length - 1; i++) {
        photos[i].remove();
      }
    }
  };
})();
