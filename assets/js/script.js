$(document).ready(function() {
	$(".gallery").magnificPopup({
		delegate: "a",
		type: "image",
		tLoading: "Loading image #%curr%...",
		mainClass: "mfp-img-mobile",
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
		}
	});
});

var delay = 10000;
$(".progress-bar-striped").each(function(i){
	$(this).delay( delay*i ).animate( { width: $(this).attr('aria-valuenow') + '%' }, delay );

	$(this).prop('Counter',0).animate({
		Counter: $(this).text()
	}, {
		duration: delay,
		easing: 'swing',
		step: function (now) {
			$(this).text(Math.ceil(now)+'%');
		}
	});
});

let members = $(".team__members");
let isHover = false;
function mediaSize() {

	$(members).hover(

		() => {
			if (window.matchMedia('(min-width: 480px)').matches) {
				$(members).removeClass("team__members--show");
				isHover = true;
				console.log('hover');
			}
		},
		() => {
			if (window.matchMedia('(min-width: 480px)').matches) {
				isHover = false;
			}
		}
	);

}

/* Call the function */
mediaSize();
/* Attach the function to the resize event listener */
window.addEventListener('resize', mediaSize, false);