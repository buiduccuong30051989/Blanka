$(document).ready(function () {
  'user strict';

  Date.prototype.toDateInputValue = function () {
    var local = new Date(this);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toJSON().slice(0, 10);
  };

  Date.prototype.toTimeInputValue = function () {
    var local = new Date(this),
        h = local.getHours(),
        m = local.getMinutes();
    if (h < 10) h = '0' + h;
    if (m < 10) m = '0' + m;
    var currentTime = h + ':' + m;
    return currentTime;
  };

  var inputDate = $('.js-input-date');
  var inputTime = $('.js-input-time');

  if (window.mobileAndTabletcheck()) {
    inputDate.get(0).type = 'date';
    inputDate[0].setAttribute('min', new Date().toDateInputValue());
    inputDate.val(new Date().toDateInputValue());
    inputTime.get(0).type = 'time';
    inputTime.val(new Date().toTimeInputValue());
  } else {
    $('.js-input-date').flatpickr({
      dateFormat: 'm/d/Y',
      minDate: 'today'
    });
    $('.js-input-time').flatpickr({
      enableTime: true,
      noCalendar: true,
      dateFormat: 'H:i',
      time_24hr: true
    });
  }
});