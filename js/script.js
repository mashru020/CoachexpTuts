$(document).ready(function() {
	$('.popup-gallery').each(function() { // the containers for all your galleries
	    $(this).magnificPopup({
	        delegate: 'a.icon', // the selector for gallery item
	        type: 'image',
	        gallery: {
	          enabled:true
	        }
	    });
	});
	new WOW().init();
});