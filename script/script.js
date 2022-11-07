console.log("Script loaded");

let locIcon = L.icon({
    iconUrl: "/images/icon-location.svg",//To change the default leaflet js marker icon
})
var mapOptions = {
    zoomControl: false,
    zIndex: 5
}
var map = L.map('map', mapOptions).setView([6.9271, 79.8612], 16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([6.9271, 79.8612], { icon: locIcon }).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .closePopup();