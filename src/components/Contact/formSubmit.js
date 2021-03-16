import anime from 'animejs/lib/anime.es.js';

// $('#form').submit(function () {
//   $.ajax({
//     type: 'POST',
//     url: 'mail.php',
//     data: $(this).serialize(),
//   })
export default function submitForm() {
  // validation

  // if successful
  successAnimation();
}

function successAnimation() {
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