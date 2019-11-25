$(document).ready(function () {
  var $form = $('#contact-form');
  $form.on('submit', function (event) {
    $('.custom-alert').hide();
    var valid = true;
    $(this).serializeArray().forEach(function (field) {
      if (!field.value || (field.name === 'name' && field.value.length < 3) || (field.name === 'message' && field.value.length <= 10)) {
        valid = false;
        $('#'+field.name).siblings('.custom-alert').show();
      }
    });
    if (!valid) {
      event.preventDefault();
    }
  });
});
