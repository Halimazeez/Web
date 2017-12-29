// google maps


//init google maps
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: dmu,
    scrollwheel: true,
    disableDefaultUI: true
  });

  // plot dmu on map as default
  var marker = new google.maps.Marker({
    position: dmu,
    map: map,
    animation:google.maps.Animation.DROP
  });


//init map on website load (Default is located @ DMU)
google.maps.event.addDomListener(window, "load", initMap());

//responsive centering of map plot for resize (simple get and set method)
google.maps.event.addDomListener(window, "resize", function() {
    var center = map.getCenter();
    google.maps.event.trigger(map, "resize");
    map.setCenter(center);
});

/*function responsivecenter() { // old
  center = map.getCenter();
}*/
