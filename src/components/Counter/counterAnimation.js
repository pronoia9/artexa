import anime from 'animejs/lib/anime.es.js';

export default function counterAnimation() {
  anime({
    targets: '.art-counter-frame',
    opacity: [0, 1],
    duration: 800,
    delay: 2300,
    easing: 'linear',
  });

  // anime({
  //   targets: '.art-counter',
  //   delay: 1300,
  //   opacity: [1, 1],
  //   complete: function (anim) {
  //     // const elements = document.getElementsByClassName('art-counter');
  //     // console.log(elements);
  //     // for (let i = 0; i < elements.length; i++) {
  //     //   console.log(elements[i].innerHTML);
  //     //   //(method) Animatable.animate(keyframes: Keyframe[] | PropertyIndexedKeyframes, options?: number | KeyframeAnimationOptions): Animation
  //     //   elements[i].animate(
  //     //     { Counter: elements[i].innerHTML },
  //     //     {
  //     //       duration: 2000,
  //     //       easing: 'linear',
  //     //       step: function (now) {
  //     //         elements[i].innerHTML = Math.ceil(now);
  //     //       },
  //     //     }
  //     //   );
  //     // }
  //     // const counters = document.querySelectorAll('.art-counter');
  //     // const speed = 200;

  //     // counters.forEach((c) => {
  //     //   const updateCount = () => {
  //     //     const target = c.getAttribute('data-target');
  //     //   }
  //     // });
  //   },
  // });
}

// document.getElementsByClassName('.art-counter').forEach((c) => {
//   c.prop('Counter', 0).animate(
//     { Counter: c.text() },
//     {
//       duration: 2000,
//       easing: 'linear',
//       step: function (now) {
//         c.text(Math.ceil(now));
//       },
//     }
//   );
// });
