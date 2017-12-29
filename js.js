// google maps

var dmu = {lat: 52.629827, lng: -1.139331}; //dmu location
var puregym = {lat: 52.624935, lng: -1.140422}; //puregym location
var dwgym = {lat: 52.636825, lng: -1.131819}; //dwgym location
var thegym = {lat: 52.637469, lng: -1.136813}; //thegym location
var anytime = {lat: 52.774445, lng: -1.210305}; //anytime location


//init google maps
function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: dmu,
    scrollwheel: false,
    disableDefaultUI: true
  });

  // plot dmu on map as default
  var marker = new google.maps.Marker({
    position: dmu,
    map: map,
    animation:google.maps.Animation.DROP
  });

  //google map plot function with global parameter
  //(this script has literally taken me a whole night to configure...)
  function moveMarker(location) {
    map.setCenter(location);
    marker.setPosition(location);
    animation:google.maps.Animation.DROP
  }

  //event handlers for figure click, calling above function with
  //parameter respectively
  document.getElementById("puregymtab").addEventListener("click", function(event) {
    moveMarker(puregym);
  });
  document.getElementById("dwtab").addEventListener("click", function(event) {
    moveMarker(dwgym);
  });
  document.getElementById("thegymtab").addEventListener("click", function(event) {
    moveMarker(thegym);
  });
  document.getElementById("anytimetab").addEventListener("click", function(event) {
    moveMarker(anytime);
  });

  //footer repeats for sitemap
  document.getElementById("puregymtab2").addEventListener("click", function(event) {
    moveMarker(puregym);
  });
  document.getElementById("dwtab2").addEventListener("click", function(event) {
    moveMarker(dwgym);
  });
  document.getElementById("thegymtab2").addEventListener("click", function(event) {
    moveMarker(thegym);
  });
  document.getElementById("anytimetab2").addEventListener("click", function(event) {
    moveMarker(anytime);
  });
}

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

//Headings show
function myFunction() {
  var purecontent = document.getElementById("content-pure");
  purecontent.className += " show";
}

document.getElementById("puregymtab").addEventListener("click", myFunction());
