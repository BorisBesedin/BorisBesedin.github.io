'use strict';

(function () {
  var fileChooser = document.querySelector('.ad-form__field input');
  var preview = document.querySelector('.ad-form-header__preview img');
  var dropArea = document.querySelector('.ad-form-header__drop-zone');

  fileChooser.addEventListener('change', function () {
    var file = fileChooser.files[0];
    window.imageLoading.load(file, preview);
  });

  window.imageLoading.setDragAndDrop(dropArea);

  dropArea.addEventListener('drop', function (evt) {
    var data = evt.dataTransfer;
    var file = data.files[0];

    window.imageLoading.load(file, preview);
  });
})();
