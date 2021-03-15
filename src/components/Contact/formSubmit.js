function validate() {
  //
}

export default function submit(form) {
  // some validations
  // say its correct
  return true;
}

// // Contact form
// $('.art-input').keyup(function () {
//   if ($(this).val()) {
//     $(this).addClass('art-active');
//   } else {
//     $(this).removeClass('art-active');
//   }
// });

// $('#form').submit(function () {
//   $.ajax({
//     type: 'POST',
//     url: 'mail.php',
//     data: $(this).serialize(),
//   }).done(function () {
//     var tl = anime.timeline({
//       easing: 'easeOutExpo',
//     });

//     tl.add({
//       targets: '.art-submit',
//       opacity: 0,
//       scale: 0.5,
//     }).add({
//       targets: '.art-success',
//       scale: 1,
//       height: '45px',
//     });
//   });
//   return false;
// });