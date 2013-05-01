function googleMap(){
	var style=[
		{featureType: "water",elementType: "all",stylers: [{ hue: "#65b2df" }, { saturation: 30 }, { lightness: -16 }]},
		{featureType: "transit",elementType: "all",stylers: [{ saturation: -100 }]},
		{featureType: "road",elementType: "all",stylers: [{ saturation: -100 }]},
		 {featureType: "poi",elementType: "all",stylers: [{ saturation: +100 }]},
		{featureType: "poi",elementType: "all",stylers: [{ visibility: "off" }]},
		// {featureType: "landscape",elementType: "all",stylers: [{ saturation: -100 }]}
		{featureType: "landscape.man_made",elementType: "all",stylers: [ { visibility: "simplified" }, { saturation: -100 },{ lightness: 0 }]},
		{featureType: "landscape.natural",elementType: "all",stylers: [{ saturation: -100 }]},
		]     

    var mapOptions = {
      zoom: 12,
      'styles':style,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("map"),
        mapOptions);

    var geocoder = new google.maps.Geocoder();
		geocoder.geocode ( {'address':"Paris" }, function(data,status) {
		if (status=='OK') {
			map.setCenter(data[0].geometry.location);
			var marker = new google.maps.Marker({ position: data[0].geometry.location,map:map })
		}
		else {
		}
	});
}