console.log("Script loaded");

//variable declarations page info containers
var apikey = 'at_tLaXMmat8Wh7kg4yNffBOfDX5jrv3';

var ipAdd = document.getElementById("ip-add");
let ipBtn = document.getElementById("ip-comm-btn");

let ipOutAdd = document.getElementById("desc-ip");
let ipOutLoc = document.getElementById("desc-loc");
let ipOutTz = document.getElementById("desc-tz");
let ipOutIsp = document.getElementById("desc-isp");

$.getJSON("https://api.ipify.org?format=json", function (data) {//This function automatically shows all the infomation related to the IP address of the user.
    var currentIP = data.ip;

    $.ajax({
        url: "https://geo.ipify.org/api/v1",
        data: { apiKey: apikey, ipAddress: ipAdd.value },
        success: function (data) {
            //console.log(JSON.stringify(data, "", 2));

            ipOutAdd.innerHTML = data.ip;
            ipOutLoc.innerHTML = data.location.city + ", " + data.location.region + ", " + data.location.country;
            ipOutTz.innerHTML = data.location.timezone;
            ipOutIsp.innerHTML = data.isp;

            map.setView([data.location.lat, data.location.lng]);
            L.marker([data.location.lat, data.location.lng], { icon: locIcon }).addTo(map);
        }
    });
})

ipBtn.addEventListener("click", function () {//This event will trigger after user clicks the submit button
    if (ipAdd == "") {
        alert("Please enter an IP Address!!");
    }
    else {
        $.ajax({
            url: "https://geo.ipify.org/api/v1",
            data: { apiKey: apikey, ipAddress: ipAdd.value },
            success: function (data) {
                //console.log(JSON.stringify(data, "", 2));

                ipOutAdd.innerHTML = data.ip;
                ipOutLoc.innerHTML = data.location.city + ", " + data.location.region + ", " + data.location.country;
                ipOutTz.innerHTML = data.location.timezone;
                ipOutIsp.innerHTML = data.isp;

                map.setView([data.location.lat, data.location.lng]);
                L.marker([data.location.lat, data.location.lng], { icon: locIcon }).addTo(map);
            }
        });
    }

});

let locIcon = L.icon({
    iconUrl: "/images/icon-location.svg",//To change the default leaflet js marker icon
})
var mapOptions = {
    zoomControl: false,
}

var map = L.map('map', {
    'center': [6.9271, 79.8612],
    'zoom': 15,
    'zoomControl': false,//Zoom control buttons disabled
    'dragging': false,//Map movement by fingers or mouse enabled
    'scrollWheelZoom': false,//Map scrolling by mouse enabled
    'layers': [L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    })]
})