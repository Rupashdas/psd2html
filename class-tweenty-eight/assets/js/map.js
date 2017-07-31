
var placeselector = {lat: 23.758063, lng:90.3844153};

$('#map').gmap3({
    zoom: 15,
    center: placeselector,
    scrollwheel: false,
    mapTypeId: "shadeOfGrey",
    mapTypeIds: [google.maps.MapTypeId.ROADMAP, "shadeOfGrey"],
    mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.ROADMAP, "shadeOfGrey"]
    }
})
    .styledmaptype(
    "shadeOfGrey",
    [
        {"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#9C9C9C"},{"lightness":40}]},
        {"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#fffff"},{"lightness":16}]},
        {"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"on"}]},
        {"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#3913d8"},{"lightness":20}]},
        {"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},
        {"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":20}]},
        {"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":21}]},
        {"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#fff"},{"lightness":17}]},
        {"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#FFEBAF"},{"lightness":29},{"weight":0.2}]},
        {"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},
        {"featureType":"transit","elementType":"geometry","stylers":[{"color":"#fff"},{"lightness":19}]},
        {"featureType":"water","elementType":"geometry","stylers":[{"color":"#28ae5f"},{"lightness":17}]}
    ],
    {name: "Shades of Grey"}
)
    .infowindow({
    position: placeselector,
    content: '<div style="background: #06d6a0; color: #fff; padding: 15px;"> <h4 style="color: #fff">Address </h4> <br/> <p>470 Lucy Forks, Patriciafurt, YC7B 3UT</p> <br/> <br/> <h4 style="color: #fff">Phone Number</h4> <br/><p>(0161) 347 8854 (0117) 900 9463</p></div>'
})
    .then(function (infowindow) {
    infowindow.open(this.get(0)); // this.get(0) return the map (see "get" feature)
});