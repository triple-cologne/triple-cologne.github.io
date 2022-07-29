window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__menu-mob'),
    menuItem = document.querySelectorAll('.header__menu-mob__link'),
    hamburger = document.querySelector('.header__hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('header__hamburger_active');
        menu.classList.toggle('header__menu-mob_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('header__hamburger_active');
            menu.classList.toggle('header__menu-mob_active');
        })
    })
})

$('.feedback__carousel').slick({
    centerMode: true,
    centerPadding: '40px',
    slidesToShow: 3,
    arrows: true,
    draggable: false,
    speed: 300,
    responsive: [
      {
        breakpoint: 1441,
        settings: {
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 993,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          draggable: true,
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 769,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          dots: true,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 577,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '10px',
          dots: true,
          slidesToShow: 1
        }
      }
    ]
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