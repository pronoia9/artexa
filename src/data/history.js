export const history = {
  timeline: ['education', 'courses'],
  education: [
    {
      title: 'Seneca College',
      subtitle: 'Computer Programming and Analysis',
      dates: [new Date('May 2016'), new Date('May 2019')],
      description: `Embarking on a thrilling three-year adventure at Seneca College, I delved into the captivating realm of Computer Programming and Analysis. Armed with programming languages, design wizardry, and system sorcery, I honed my skills in crafting dynamic web applications across diverse operating systems. Alongside, I ventured into the realm of advanced option courses, unlocking hidden levels of technical prowess.`,
      image: '/images/history/sc.png',
    },
    {
      title: 'The Complete Web Developer',
      subtitle: 'by Andrei Neagoie, Senior Software Developer',
      dates: [new Date('April 29, 2022'), new Date('June 6, 2022')],
      description: `Behold, an extraordinary opportunity to walk in the footsteps of a Silicon Valley sage and a Toronto tech titan. This immersive course takes you on a whimsical adventure, unraveling the secrets of web development's enchanted arts. Unleash your creativity, master the crafts of HTML, CSS, and JavaScript, and ascend to new heights in the digital realm.`,
      image: '/images/history/ztm-tcwd.jpg',
    },
    {
      title: 'Web Development Bootcamp',
      subtitle: 'by Dr. Angela Yu, Developer and Lead Instructor',
      dates: [new Date('February 16, 2021'), new Date('March 10, 2021')],
      description: `Step into the mystical realm of web development under the guidance of Dr. Angela Yu, the lead enchantress at the App Brewery. Brace yourself for a whirlwind of incantations and coding charms as you journey through the realms of HTML, CSS, and JavaScript. Join a league of extraordinary developers and unlock the secrets to conjuring captivating web experiences.`,
      image: '/images/history/tab-wdb.png',
    },
    // {
    //   title: 'Complete React Developer with Redux, Hooks, GraphQL',
    //   subtitle: 'by Andrei Neagoie, Senior Software Developer',
    //   dates: [new Date('June 7, 2022'), 'Ongoing'],
    //   description: `Immerse yourself in the mystical realm of React.js mastery with the guidance of the revered React.js sages. Together, we unravel the secrets of Redux, dance with React Hooks, wield GraphQL's power, and summon the mighty Context API. Brace yourself as we embark on an epic journey, conquering Firebase, Redux-Saga, Stripe, and more, crafting enchanting and powerful web applications from scratch.`,
    //   link: 'https://zerotomastery.io/courses/learn-react/',
    // },
  ].sort((a, b) => b?.dates[1] - a?.dates[1]),
  courses: [
    {
      title: 'ThreeJS Journey',
      subtitle: 'by Bruno Simon',
      dates: [new Date('August 16, 2022'), new Date('May 20, 2023')],
      description: `Unleashed the magic of WebGL and became a 3D web virtuoso. Mastered Three.js sorcery, crafting captivating websites with style. From mind-bending particles to physics interactions, advanced techniques became second nature. Even delved into the realm of Blender sorcery, conjuring mesmerizing 3D models. A certified web-weaver of visual wonders!`,
      link: 'https://threejs-journey.com',
    },
    {
      title: 'Become A 3D Illustrator',
      subtitle: 'by Polygon Runway',
      dates: [new Date('May 3, 2023')],
      description: `Became a skilled 3D modeler through an immersive Blender course. Mastered controls, geometry modeling, lighting, and rendering. Explored advanced tools, texture painting, and ambient lighting for captivating effects. Created diverse projects, from low-poly to isometric rooms. Proficient in realistic material rendering and smooth modeling techniques. Ready to bring innovative concepts to life.`,
      link: 'https://polygonrunway.com/p/become-a-3d-illustrator',
    },
    {
      title: 'Blender Donut Series (v3)',
      subtitle: 'by Blender Guru',
      dates: [new Date('May 5, 2023'), new Date('May 9, 2023')],
      description: `Blender Donut Tutorial series by Blender Guru: Mastered the art of crafting tantalizing digital donuts, honing skills in modeling, texturing, lighting, and rendering under the guidance of Blender Guru's wit and charm. Transformed into a skilled donut virtuoso, capable of creating visually captivating treats.`,
      link: 'https://www.youtube.com/playlist?list=PLjEaoINr3zgFX8ZsChQVQsuDSjEqdWMAD',
    },
  ].sort((a, b) => b?.dates[1] - a?.dates[1]),
  activities: [
    {
      title: 'Destination Imagination',
      subtitle: 'Participant',
      dates: [new Date('April 2013')],
      description: `Embarked on a daring quest with the illustrious Destination Imagination crew, where creativity and problem-solving intertwined in magical harmony. Our fellowship of imaginative minds tackled challenges, bending reality to unravel ingenious solutions. Through the alchemy of teamwork and innovation, we honed our skills as future visionaries and master problem solvers.`,
    },
    {
      title: 'Caretakers of the Environment',
      subtitle: 'Volunteer',
      dates: [new Date('August 2011')],
      description: `Ventured into the realm of environmental guardianship, donning the cape of a Caretaker of the Environment. In this noble quest, I joined forces with a league of eco-warriors, embracing the responsibility of protecting our precious planet. Together, we shaped awareness, wielded education, and championed sustainable development, leaving a trail of green footsteps in our wake.`,
      image: '/images/history/cei.jpg',
    },
  ].sort((a, b) => b?.dates[1] - a?.dates[1]),
  experience: [
    {
      title: 'NewAge Consultancy LLC',
      subtitle: 'Frontend Developer',
      dates: [new Date('April 2024')],
      description: ``, // TODO
    },
  ],
};
