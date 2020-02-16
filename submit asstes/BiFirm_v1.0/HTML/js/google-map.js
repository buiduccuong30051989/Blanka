$(document).ready(function () {
  'use strict';

  var latitude = -37.817,
      longitude = 144.962,
      map_zoom = 14;
  var locations = [['<div class="infobox"><span>WE ARE ANANCI<span></br><span>Email: contact@ananci.com</span></div>', latitude, longitude, 2]];
  var map = new google.maps.Map(document.getElementById('js-map-canvas'), {
    zoom: map_zoom,
    scrollwheel: false,
    navigationControl: true,
    mapTypeControl: false,
    scaleControl: false,
    draggable: true,
    styles: [{
      featureType: 'all',
      elementType: 'geometry.fill',
      stylers: [{
        weight: '2.00'
      }]
    }, {
      featureType: 'all',
      elementType: 'geometry.stroke',
      stylers: [{
        color: '#9c9c9c'
      }]
    }, {
      featureType: 'all',
      elementType: 'labels.text',
      stylers: [{
        visibility: 'on'
      }]
    }, {
      featureType: 'landscape',
      elementType: 'all',
      stylers: [{
        color: '#f2f2f2'
      }]
    }, {
      featureType: 'landscape',
      elementType: 'geometry.fill',
      stylers: [{
        color: '#ffffff'
      }]
    }, {
      featureType: 'landscape.man_made',
      elementType: 'geometry.fill',
      stylers: [{
        color: '#ffffff'
      }]
    }, {
      featureType: 'poi',
      elementType: 'all',
      stylers: [{
        visibility: 'off'
      }]
    }, {
      featureType: 'road',
      elementType: 'all',
      stylers: [{
        saturation: -100
      }, {
        lightness: 45
      }]
    }, {
      featureType: 'road',
      elementType: 'geometry.fill',
      stylers: [{
        color: '#eeeeee'
      }]
    }, {
      featureType: 'road',
      elementType: 'labels.text.fill',
      stylers: [{
        color: '#7b7b7b'
      }]
    }, {
      featureType: 'road',
      elementType: 'labels.text.stroke',
      stylers: [{
        color: '#ffffff'
      }]
    }, {
      featureType: 'road.highway',
      elementType: 'all',
      stylers: [{
        visibility: 'simplified'
      }]
    }, {
      featureType: 'road.arterial',
      elementType: 'labels.icon',
      stylers: [{
        visibility: 'off'
      }]
    }, {
      featureType: 'transit',
      elementType: 'all',
      stylers: [{
        visibility: 'off'
      }]
    }, {
      featureType: 'water',
      elementType: 'all',
      stylers: [{
        color: '#46bcec'
      }, {
        visibility: 'on'
      }]
    }, {
      featureType: 'water',
      elementType: 'geometry.fill',
      stylers: [{
        color: '#2e363a'
      }]
    }, {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [{
        color: '#ffffff'
      }]
    }, {
      featureType: 'water',
      elementType: 'labels.text.stroke',
      stylers: [{
        color: '#ffffff'
      }]
    }],
    center: new google.maps.LatLng(latitude, longitude),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });
  var infowindow = new google.maps.InfoWindow();
  var marker, i;

  for (i = 0; i < locations.length; i++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i][1], locations[i][2]),
      map: map // icon: 'images/cd-icon-location.png'

    });
    google.maps.event.addListener(marker, 'click', function (marker, i) {
      return function () {
        infowindow.setContent(locations[i][0]);
        infowindow.open(map, marker);
      };
    }(marker, i));
  }
});