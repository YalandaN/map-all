var mapAll = L.map('map2').setView([29.644298,-82.352237], 14.06);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/dark-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoieWFsYW5kYW4iLCJhIjoiY2tpNWFpamgxMDAwMjJybXFkczJvMjEwZiJ9._uQpAVvfoICvw7woiZH8Og'
}).addTo( mapAll );

for ( let i = 0; i < places.length; i++ ){
  L.marker( [places[i].lat, places[i].long ] )
  .bindPopup( '<h3>' + places[i].placeName + '</h3>' + '<p>' + places[i].description + '</p>')
  .addTo( mapAll );
};
