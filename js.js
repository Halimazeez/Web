//event handlers for heading
document.getElementById("puregymtab").addEventListener("click",function(event) {
    headerloop(headerpure); //pass document id as parameter
});
document.getElementById("dwtab").addEventListener("click",function(event) {
    headerloop(headerdw); //pass document id as parameter
});
document.getElementById("thegymtab").addEventListener("click",function(event) {
    headerloop(headerthe); //pass document id as parameter
});
document.getElementById("anytimetab").addEventListener("click",function(event) {
    headerloop(headerany); //pass document id as parameter
});

// vars to hold document id's (used later for array populate)
var headerpure = document.getElementById("contentpure");
var headerdw = document.getElementById("contentdw");
var headerthe = document.getElementById("contentthegym");
var headerany = document.getElementById("contentanytime")

//similar to marker, takes passed parameter 'x' and changes style to 'block' from
//'none' to display the header on screen.
function headerloop(x) {

  var y = document.getElementById("gymcontent"); //set y to gymcontent section id

  //populate array constant with header ids
  const set = [headerpure, headerdw, headerthe, headerany];

  //*im quite proud of this*
  // set pointer of i to 0 => 1st element of array
  //for loop bounds: [0-3] = 4 elements of the array
  for (var i=0; i < set.length; i++) {
    var a = set[i]; //set a to the current iteration of set element
    if (a.style.display = "block") { //if the header is displayed ->
      a.style.display = "none" // disable the display
    }
    x.style.display = "block" //show header respective to the passed parameter x.
  }
} //end headerloop

//footer repeats on sitemap for headerloop function above
document.getElementById("puregymtab2").addEventListener("click", function(event) {
  headerloop(headerpure); //pass document id as parameter
});
document.getElementById("dwtab2").addEventListener("click", function(event) {
  headerloop(headerdw); //pass document id as parameter
});
document.getElementById("thegymtab2").addEventListener("click", function(event) {
  headerloop(headerthe); //pass document id as parameter
});
document.getElementById("anytimetab2").addEventListener("click", function(event) {
  headerloop(headerany); //pass document id as parameter
});

// google maps

var dmu = {lat: 52.629827, lng: -1.139331}; //dmu location
var puregym = {lat: 52.624935, lng: -1.140422}; //puregym location
var dwgym = {lat: 52.636825, lng: -1.131819}; //dwgym location
var thegym = {lat: 52.637469, lng: -1.136813}; //thegym location
var anytime = {lat: 52.774445, lng: -1.210305}; //anytime location

var map = null;

//init google maps
function initMap() {

  //set the default map to point at dmu as center
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 17,
    center: dmu,
    scrollwheel: false,
    disableDefaultUI: true //disables the google maps ui (click and right click for scroll)
  });

  // plot dmu on map as default
  var marker = new google.maps.Marker({
    position: dmu,
    map: map,
    animation:google.maps.Animation.DROP
  });

  //google map plot function with global parameter
  //spend 6hours writing this small function.....
  function moveMarker(location) {
    map.setCenter(location);
    marker.setPosition(location);
    animation:google.maps.Animation.DROP
  }

  //map listener to re-center from timeout
  map.addListener('center_changed', function() {
    window.setTimeout(function() {
      map.panTo(marker.getPosition());
      map.setZoom(17);
    }, 8000); //8000ms (8sec) delay if untouched map will recentre to current mark and zoom
  });


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

} // end init

//init map on website load (Default is located @ DMU)
google.maps.event.addDomListener(window, "load", initMap());

//responsive centering of map plot for resize (simple get and set method)
google.maps.event.addDomListener(window, "resize", function() {
  var center = map.getCenter();
  google.maps.event.trigger(map, "resize");
  map.setCenter(center);
});
