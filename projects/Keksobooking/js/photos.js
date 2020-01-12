'use strict';

(function () {
  var fileChooser = document.querySelector('.ad-form__upload input');
  var image = document.createElement('img');
  var imageContainer = document.querySelector('.ad-form__photo');
  var dropArea = document.querySelector('.ad-form__drop-zone');

  var addPhotos = function (files) {
    Array.from(files).forEach(function (file) {
      var newElement = imageContainer.cloneNode(true);
      var newImage;

      imageContainer.before(newElement);
      newImage = newElement.querySelector('img');

      window.imageLoading.load(file, newImage);
    });
  };

  image.setAttribute('width', '70px');
  image.setAttribute('height', '70px');

  imageContainer.appendChild(image);

  fileChooser.addEventListener('change', function () {
    var files = fileChooser.files;
    addPhotos(files);
  });

  window.imageLoading.setDragAndDrop(dropArea);

  dropArea.addEventListener('drop', function (evt) {
    var data = evt.dataTransfer;
    var files = data.files;
    addPhotos(files);
  });
})();
