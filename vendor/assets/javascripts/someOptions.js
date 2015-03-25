/* ==============================================
Preloader
=============================================== */
$(window).load(function() { // makes sure the whole site is loaded
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(350).css({'overflow':'visible'});
})
/* ==============================================
FullScreen Image
=============================================== */
function autosize_homepage_image(){
		var height = jQuery( window ).height();
		jQuery('#home .full').css('height', height + 'px');
	}
	jQuery( function(){
		autosize_homepage_image();
		jQuery( window ).resize( function(){
			autosize_homepage_image();
		})
	});
/* ==============================================
NavBar Target
=============================================== */
$('body').scrollspy({ target: '.navbar-default' })

/* ==============================================
Sticky NavBar
=============================================== */
$(document).ready(function(){
	$("#sticker").sticky({topSpacing:0});
});


/* ==============================================
Tabs
=============================================== */
//mCustomScrollbar.concat
$(document).ready(function(){
	$(window).load(function(){
		$("#slideTabs").mCustomScrollbar({
			horizontalScroll:true
		});
		$(".content.inner").mCustomScrollbar({
			scrollButtons:{
				enable:true
			}
		});
	});
});

/* ==============================================
owlCarousel
=============================================== */
$(document).ready(function() {

  var owl = $("#owl-demo");

  owl.owlCarousel({
      items : 3, //10 items above 1000px browser width
      itemsDesktop : [1000,5], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,3], // betweem 900px and 601px
      itemsTablet: [600,2], //2 items between 600 and 0
      itemsMobile : [479,1] // itemsMobile disabled - inherit from itemsTablet option
  });

  // Custom Navigation Events
  $(".next").click(function(){
    owl.trigger('owl.next');
  })
  $(".prev").click(function(){
    owl.trigger('owl.prev');
  })
  $(".play").click(function(){
    owl.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
  })
  $(".stop").click(function(){
    owl.trigger('owl.stop');
  })

});

/* ==============================================
LightBox Popup
=============================================== */
$('.popup-link').magnificPopup({
	  type: 'image'
		// other options
});
/* ==============================================
Filter PortFolio
=============================================== */
$(function () {

	var filterList = {

		init: function () {

			// MixItUp plugin
			// http://mixitup.io
			$('#portfoliolist').mixitup({
				targetSelector: '.portfolio',
				filterSelector: '.filter',
				effects: ['scale'],
				easing: 'smooth',
				// call the hover effect
				onMixEnd: filterList.hoverEffect()
			});

		},

		hoverEffect: function () {

			// Simple parallax effect
			$('#portfoliolist .portfolio').hover(
				function () {

				},
				function () {

				}
			);

		}

	};

	// Run the show!
	filterList.init();
});



//	Google Map	/////////////////////////////////////////////
function resize_map(){
	var mapWidth = $('.googleMapWrap .img-right').width();
	var mapHeight = $('.googleMapWrap .theContentLeft').height();
	$('#googlemap').css('width', mapWidth).attr('width', mapWidth);
	$('#googlemap').css('height', (mapHeight)).attr('height', (mapHeight));
}
$( function(){
	resize_map();
	$( window ).resize( function(){
		resize_map();
	});
});

//	Contact Form	/////////////////////////////////////////////
jQuery( function(){
	jQuery("#contact").submit( function(e){
		var name = ( jQuery("input[name='name']") );
		var email = ( jQuery("input[name='email']") );
		var message = ( jQuery("textarea[name='message']") );
		var _continue = true;

		jQuery( '.contact_form_msg' ).remove();
		jQuery( name ).removeClass('empty');
		jQuery( email ).removeClass('empty');
		jQuery( "textarea[name='message']" ).removeClass('empty');

		if( jQuery.trim( jQuery( name ).val() ) == '' ){

			jQuery( name ).addClass("empty");
			_continue = false;
		} else { _continue = true; }

		if( jQuery.trim( jQuery( email ).val() ) == '' ){
			jQuery( email ).addClass("empty");
			_continue = false;
		} else { _continue = true; }

		if( jQuery.trim( jQuery( message ).val() ) == '' ){
			jQuery( message ).addClass("empty");
			_continue = false;
		} else { _continue = true; }

		if( _continue == true ){
			// Send Email
			jQuery(".peThemeContactForm .button").text("Loading...");

			jQuery.ajax({
				url: "mail.php",
				type: "POST",
				data: jQuery(".peThemeContactForm").serialize(),
				success: function( payload ){
					var json = jQuery.parseJSON( payload );
					jQuery(".peThemeContactForm .button").text("Send Message");

					if( json.status == "empty" ){
						jQuery( '.peThemeContactForm' ).append('<div class="contact_form_msg error" style="display: none;"><p>Please, Make sure you enter all the form fields.</p></div>');
					} else if( json.status == "invalid_email" ){
						jQuery( '.peThemeContactForm' ).append('<div class="contact_form_msg error" style="display: none;"><p>Your email address is invalid.</p></div>');
					} else if( json.status == "success" ){
						jQuery( '.peThemeContactForm' ).append('<div class="contact_form_msg success" style="display: none;"><p>Your email was sent successfully. I will respond asap.</p></div>');
					} else if( json.status == "error" ) {
						jQuery( '.peThemeContactForm' ).append('<div class="contact_form_msg error" style="display: none;"><p>Sorry, There was an error during your submission.</p></div>');
					}
					jQuery( '.peThemeContactForm .contact_form_msg' ).fadeIn( 350 );
				}
			});
		} else {
			jQuery( '.peThemeContactForm' ).append('<div class="contact_form_msg" style="display: none;"><p>Please, Make sure you enter all the form fields.</p></div>');
			jQuery( '.peThemeContactForm .contact_form_msg' ).fadeIn( 350 );
		}

		return false;
	});
});

/* ==============================================
Parallax Effect
=============================================== */
$(document).ready(function(){
	$('#nav').localScroll(800);

	//.parallax(xPosition, speedFactor, outerHeight) options:
	//xPosition - Horizontal position of the element
	//inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
	//outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
	$('.parallax-1').parallax("50%", 0.7);
	$('.parallax-2').parallax("50%", 0.3);
	$('.parallax-3').parallax("50%", 0.1);
})
