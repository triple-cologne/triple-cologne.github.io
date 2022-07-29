// HAMBURGER
window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
      menuItem = document.querySelectorAll('.menu__link'),
     hamburger = document.querySelector('.hamburger');

    // Добавляет класс активности при клике
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('menu_active');
    });
    
    // Убирает класс активности при клике на меню-айтем
    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    })
})



// ADD ACTIVE TO SAFARI
$('body *').on('touchstart', function (){});

if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
  console.log('this is a touch device');
} else {
  console.log('this is not a touch device');
	document.body.classList.add('no-touch');
}



// SLOWSCROLL
$(document).ready(function(){
  $("a").on('click', function(event) {
  
    if (this.hash !== "") {
    event.preventDefault();
  
    const hash = this.hash;
  
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){
  
      window.location.hash = hash;
    });
    }
  });
});