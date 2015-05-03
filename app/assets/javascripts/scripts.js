var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var map;

function initialize() {
  directionsDisplay = new google.maps.DirectionsRenderer();
  var taste = new google.maps.LatLng(42.3856997, -71.1848005);
  var mapOptions = {
    zoom: 14,
    center: taste
  };

  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  directionsDisplay.setMap(map);
   var marker = new google.maps.Marker({
      position: taste,
      map: map
  });
}

function calcRoute() {
  var start = document.getElementById('start').value;
  var end = "382 trapelo road, Belmont, Ma";
  var request = {
      origin:start,
      destination:end,
      travelMode: google.maps.TravelMode.DRIVING
  };
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
    }
  });
}

google.maps.event.addDomListener(window, 'load', initialize);

