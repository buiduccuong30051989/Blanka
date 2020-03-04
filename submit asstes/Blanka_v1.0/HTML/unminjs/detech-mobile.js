window.mobileAndTabletcheck = function () {
  var isMobile = false; //initiate as false
  // device detection

  if (/Mobi|Android/i.test(navigator.userAgent)) {
    isMobile = true;
  }

  return isMobile;
};