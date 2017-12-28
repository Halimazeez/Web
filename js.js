
// google maps
var map;

//init for gmaps to point at dmu at default
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 46.980252, lng: 4.987793},
    zoom: 8
  });
}
