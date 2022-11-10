console.log("Script loaded");

//variable declarations page info containers
var ipAdd = document.getElementById("ip-add");
let ipBtn = document.getElementById("ip-comm-btn");

let ipOutAdd = document.getElementById("desc-ip").innerHTML;
let ipOutLoc = document.getElementById("desc-loc").innerHTML;
let ipOutTz = document.getElementById("desc-tz").innerHTML;
let ipOutIsp = document.getElementById("desc-isp").innerHTML;

ipBtn.addEventListener("click", function () {
    console.log(ipAdd.value);
});

let locIcon = L.icon({
    iconUrl: "/images/icon-location.svg",//To change the default leaflet js marker icon
})
var mapOptions = {
    zoomControl: false,
}

/*var map = L.map('map', mapOptions).setView([6.9271, 79.8612], 16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([6.9271, 79.8612], { icon: locIcon }).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .closePopup();
*/

const map = L.map('map', {
    'center': [42, 42],
    'zoom': 16,
    'layers': [L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    })]
})
L.marker([6.9271, 79.8612], { icon: locIcon }).addTo(map);
