export const technologies = {
  title: 'Technologies | Libraries',
  message: 'Read More',
  list: [
    {
      id: 'styled-components',
      title: 'Styled Components',
      subtitle: 'Styling your way with speed, strong typing, and flexibility.',
      link: 'https://styled-components.com',
    },
    {
      id: 'framer-motion',
      title: 'Framer Motion',
      subtitle: 'https://www.framer.com/motion/',
      link: 'A production-ready motion library for React.',
    },
    {
      id: 'threejs',
      title: 'Threejs',
      subtitle:
        'A cross-browser JavaScript library and application programming interface used to create and display animated 3D computer graphics in a web browser using WebGL.',
      link: 'https://threejs.org/',
    },
    {
      id: 'react-three-fiber',
      title: 'React Three Fiber',
      subtitle: 'A React renderer for threejs. Build scenes declaratively with re-usable, self-contained components.',
      link: 'https://docs.pmnd.rs/react-three-fiber',
    },
    {
      id: 'react-three-drei',
      title: 'React Three Drei',
      subtitle: 'A growing collection of useful helpers and fully functional, ready-made abstractions for @react-three/fiber.',
      link: 'https://github.com/pmndrs/drei',
    },
    {
      id: 'fancybox',
      title: 'Fancybox',
      subtitle: 'JavaScript lightbox library for presenting various types of media.',
      link: 'https://fancyapps.com/fancybox/',
    },
    {
      id: 'typedjs',
      title: 'Typedjs',
      subtitle: 'A JavaScript Typing Animation. Typed.js is a library that types.',
      link: 'https://github.com/mattboldt/typed.js/',
    },
    {
      id: 'swiper',
      title: 'Swiper',
      subtitle: 'Modern mobile touch slider with transitions and amazing behavior.',
      link: 'https://swiperjs.com/',
    },
    {
      id: 'formik',
      title: 'Formik',
      subtitle: 'Formik makes debugging, testing, and reasoning about your forms a breeze.',
      link: 'https://formik.org/',
    },
    {
      id: 'emailjs',
      title: 'EmailJS',
      subtitle: 'EmailJS helps to send emails using client-side technologies...',
      link: 'https://www.emailjs.com/',
    },
    {
      id: 'smooth-scrollbar',
      title: 'Smooth Scrollbar',
      subtitle: '',
      link: 'https://idiotwu.github.io/smooth-scrollbar/',
    },
    {
      id: 'axios',
      title: 'Axios',
      subtitle: 'A JavaScript Plugin that allows customizing high perfermance scrollbars cross browsers.',
      link: 'https://idiotwu.github.io/smooth-scrollbar/',
    },
    {
      id: 'gsap',
      title: 'GSAP',
      subtitle: 'An industry standard JavaScript animation library that crafts high-performance animations that work in every major browser.',
      link: 'https://gsap.com/',
    },
    {
      id: 'vite',
      title: 'Vite',
      subtitle: 'https://vitejs.dev/',
      link: 'Instant Server Start · Lightning Fast HMR · Rich Features · Optimized Build · Universal Plugins · Fully Typed APIs',
    },
    {
      id: 'bitmoji',
      title: 'Bitmoji',
      subtitle: 'https://www.bitmoji.com/',
      link: 'Create an expressive cartoon avatar, choose from a growing library of moods and stickers - featuring YOU!',
    },
    {
      id: 'font-awesome',
      title: 'Font Awesome',
      subtitle: 'An icon library and toolkit, used by millions of designers, developers, and content creators.',
      link: 'https://fontawesome.com/',
    },
    // {
    //   id: 'animated-cursor',
    //   title: 'Animated Cursor',
    //   subtitle: '',
    //   link: '',
    // },
    {
      id: 'countup',
      title: 'CountUp',
      subtitle: 'A lightweight JavaScript class that can be used to quickly create animations that display numerical data in a more interesting way.',
      link: 'https://inorganik.github.io/countUp.js/',
    },
    {
      id: 'react-router',
      title: 'React Router',
      subtitle: 'A lightweight, fully-featured routing library for the React JavaScript library.',
      link: 'https://reactrouter.com/',
    },
    {
      id: 'progressbar',
      title: 'Progressbar.js',
      subtitle: `With ProgressBar.js, it's easy to create responsive and stylish progress bars for the web.`,
      link: 'https://kimmobrunfeldt.github.io/progressbar.js/',
    },
    {
      id: 'poimandres',
      title: 'Poimandres',
      subtitle: 'Bread n butter utility for component-tied mouse/touch gestures in React and Vanilla Javascript.',
      link: 'https://github.com/pmndrs',
    },
    {
      id: 'nextjs',
      title: 'Nextjs',
      subtitle: 'An open-source framework providing React-based web applications with server-side rendering and static website generation.',
      link: 'https://nextjs.org/',
    },
    {
      id: 'spline',
      title: 'Spline',
      subtitle: '',
      link: '',
    },
    {
      id: 'appwrite',
      title: 'Appwrite',
      subtitle: '',
      link: '',
    },
    {
      id: 'mailchimp',
      title: 'Mailchimp',
      subtitle: '',
      link: '',
    },
    {
      id: 'figma',
      title: 'Figma',
      subtitle: '',
      link: '',
    },
    {
      id: 'sentry',
      title: 'Sentry',
      subtitle: '',
      link: '',
    },
    {
      id: 'zod',
      title: '',
      subtitle: '',
      link: '',
    },
    {
      id: '',
      title: '',
      subtitle: '',
      link: '',
    },
    {
      id: '',
      title: '',
      subtitle: '',
      link: '',
    },
    {
      id: '',
      title: '',
      subtitle: '',
      link: '',
    },
  ]
    .filter((obj) => Object.values(obj).filter((val) => val.length).length === Object.entries(obj).length)
    .sort((a, b) => {
      var textA = a.id.toUpperCase();
      var textB = b.id.toUpperCase();
      return textA < textB ? -1 : textA > textB ? 1 : 0;
    }),
};
