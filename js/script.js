const hamburger = document.querySelector('.header__hamburger'),
	  menu = document.querySelector('.menu'),
	  menuLink = document.querySelectorAll('.menu__link')
	  closeElem = document.querySelector('.menu__close');
	  overlay = document.querySelector('.menu__overlay')
const percent = document.querySelectorAll('.skills__prog-bar__percent'),
	  progbar = document.querySelectorAll('.skills__prog-bar__bar span');

hamburger.addEventListener('click', () => {
	menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
	menu.classList.remove('active');
});

menuLink.forEach (item => {
	item.addEventListener('click', () => {
		menu.classList.remove('active');
	});
});

overlay.addEventListener('click', () => {
	menu.classList.remove('active');
});

window.addEventListener("keydown", (e) => {
	if (e.key == 'Escape') {
				menu.classList.remove('active');
	}
});

percent.forEach( (item, i) => {
	progbar[i].style.width = item.innerHTML;
});

function validateForms(form){
	$(form).validate({
		rules: {
			name: {
				required: true,
				minlength: 2
			},
			email: {
				required: true,
				email: true
			}
		},
		messages: {
			name: {
				required:  "Please enter your name",
				minlength: jQuery.validator.format("Please enter {0} or more characters.")
			  },
			email: {
			  required: "Please enter your e-mail",
			  email: "Incorrect e-mail address"
			}
		},
	});
};

validateForms('#contacts-form');

$( '#send-invite-form' ).on('submit', function(e) {
	if($( 'input[class^="invitation-friends"]:checked' ).length === 0) {
	   e.preventDefault();
	}
 });

$('body *').on('touchstart', function (){});

if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
	console.log('this is a touch device');
  } else {
	console.log('this is not a touch device');
	document.body.classList.add('no-touch');
  }

  $(document).ready(function(){
	// Add smooth scrolling to all links
	$("a").on('click', function(event) {
  
	  // Make sure this.hash has a value before overriding default behavior
	  if (this.hash !== "") {
		// Prevent default anchor click behavior
		event.preventDefault();
  
		// Store hash
		var hash = this.hash;
  
		// Using jQuery's animate() method to add smooth page scroll
		// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
		$('html, body').animate({
		  scrollTop: $(hash).offset().top
		}, 800, function(){
  
		  // Add hash (#) to URL when done scrolling (default click behavior)
		  window.location.hash = hash;
		});
	  } // End if
	});
  });

  $(window).scroll(function() {
	if ($(this).scrollTop() > 3600) {
		$('.pageup').fadeIn();
	} else {
		$('.pageup').fadeOut();
	}
});
