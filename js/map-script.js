"use strict";


function goMap () {
  if ($('#map').length) {
        // Styles a map in night mode.
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 27.589477, lng: 75.178129},
          zoom: 12,
          scrollwheel: false,

        });

		// To add the marker to the map 
		  var image = 'images/logo/map.png';
		  var beachMarker = new google.maps.Marker({
		    position: {lat: 27.589477, lng:75.178129},
		    map: map,
		    icon: image,
		    title:"BipPro Office!",
		    infoWindow: {
	            content: '<h6>Bizpro office</h6> <p>Gazipur,Dhaka</p>'
	          }
		  });
  };
};


// Dom Ready Function
jQuery(document).on('ready', function () {
	(function ($) {
		// add your functions
		goMap()
	})(jQuery);
});