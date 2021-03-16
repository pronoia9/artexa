import anime from 'animejs/lib/anime.es.js';

//------------------------------- PRELOADER ------------------------------//

//----------------------------- PROGRESSBARS -----------------------------//

//--------------------------------- FORM ---------------------------------//
// submit button and form button animation
function formButtonAnimation() {
  var tl = anime.timeline({
    easing: 'easeOutExpo',
  });

  tl.add({
    targets: '.art-submit',
    opacity: 0,
    scale: 0.5,
  }).add({
    targets: '.art-success',
    scale: 1,
    height: '45px',
  });
  return true;
}

export { formButtonAnimation };