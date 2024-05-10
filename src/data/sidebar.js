export const sidebar = {
  profile: {
    name: 'Jay Ansin',
    nameLink: '/',
    subtitle: ['Full-Stack Developer,', 'Avid pet lover 🐶'],
    available: true,
    avatar: '/images/shalom.png',
  },

  about: [
    { id: 1, title: 'Nationality:', subtitle: 'U.S.' },
    { id: 2, title: 'Location', subtitle: 'Atlanta, GA' },
  ],

  languages: [
    { id: '1', language: 'English', level: 100 },
    // { id: '3', language: 'Turkish', level: 60 },
    { id: '2', language: 'French', level: 20 },
    { id: '2', language: 'Japanese', level: 10 },
  ],

  skills: {
    hard: [
      {
        title: 'HTML',
        description: `A weaver of the web's foundational tapestry, crafting structured elegance that dances across the digital realm, guiding users on a visual journey of enchantment.`,
        level: 85,
      },
      {
        title: 'CSS',
        description: `A virtuoso of style and form, fashioning the visual symphony that adorns the web's canvas, harmonizing colors, layouts, and animations to create an immersive experience.`,
        level: 70,
      },
      {
        title: 'JavaScript',
        description: `An alchemist of interactivity, infusing life into web applications with spells of dynamic functionality, casting spells that engage and captivate users at every turn.`,
        level: 90,
      },
      {
        title: 'React',
        description: `A maestro of user interfaces, conducting the orchestration of reusable components and state management, composing harmonies that resonate with seamless efficiency.`,
        level: 85,
      },
      {
        title: 'Three.js',
        description: `A magician of the third dimension, conjuring captivating realms of 3D wonder, where pixels transcend their flat nature and come alive in a dance of depth and immersion.`,
        level: 60,
      },
    ],

    soft: [
      // Frontend
      [
        { title: 'Vite', description: ``, level: 0 },
        { title: 'Redux', description: ``, level: 0 },
        { title: 'Zustand', description: ``, level: 0 },
        { title: 'ContextAPI', description: ``, level: 0 },
        { title: 'React Hooks', description: ``, level: 0 },
      ],
      // Backend
      [
        { title: 'Next.js', description: ``, level: 0 },
        {
          title: 'Node.js',
          description: `A guardian of the server-side, standing steadfast as a sentinel, wielding the power of Node.js to build scalable and robust backends, ensuring a steady flow of mystical energy to power web applications.`,
          level: 60,
        },
        { title: 'Express', description: ``, level: 0 },
        {
          title: 'MongoDB, Mongoose, PostgreSQL',
          description: `Keepers of digital knowledge, guardians of data's secrets, enabling the storage, retrieval, and manipulation of information that shapes the destiny of web applications.`,
          level: 60,
        },
      ],
      // Tools
      [
        { title: 'Git', description: ``, level: 0 },
        { title: 'GitHub', description: ``, level: 0 },
        { title: 'Docker', description: ``, level: 0 },
        { title: 'Bash/Zsh', description: ``, level: 0 },
        { title: 'RESTful API', description: ``, level: 0 },
        { title: 'Postman', description: ``, level: 0 },
        { title: 'Rapid API', description: ``, level: 0 },
      ],
      // Style/Animation Libs
      [
        { title: 'Styled Components', description: ``, level: 0 },
        { title: 'Tailwind CSS', description: ``, level: 0 },
        { title: 'Bootstrap', description: ``, level: 0 },
        { title: 'shadcn', description: ``, level: 0 },
        { title: 'Framer Motion', description: ``, level: 0 },
        { title: 'GSAP', description: ``, level: 0 },
        { title: 'React Spring', description: ``, level: 0 },
      ],
      // 3D
      [
        {
          title: 'React Three Fiber',
          description: `A sorcerer of integration, seamlessly merging the realms of React and Three.js, casting spells that empower the creation of interactive and enchanting 3D web applications.`,
          level: 70,
        },
        {
          title: 'Blender',
          description: `A visionary artist, wielding the brush of creativity to mold digital clay into breathtaking 3D masterpieces, breathing life into virtual sculptures that transcend imagination.`,
          level: 60,
        },
        { title: 'Spline', description: ``, level: 30 },
      ],
      // Design/Prototyping/Organization
      [
        { title: 'Figma', description: ``, level: 20 },
        {
          title: 'Photoshop',
          description: `A brush-wielding virtuoso, harnessing the power of pixels to shape digital realms, seamlessly blending artistry and technical prowess to create visually stunning masterpieces that captivate the senses.`,
          level: 20,
        },
        { title: 'Canva', description: ``, level: 75 },
        { title: 'Notion', description: '', level: 0 },
      ],
      // AI/ML
      [
        { title: 'ChatGPT', description: ``, level: 0 },
        { title: 'Claude', description: ``, level: 0 },
        { title: 'Gemini', description: ``, level: 0 },
        { title: 'Meta', description: ``, level: 0 },
        { title: 'Perplexity', description: ``, level: 0 },
        { title: 'Leonardo', description: ``, level: 0 },
      ],
    ],
  },

  strengths: [
    'Curious',
    'Quick learner',
    'Problem solver',
    'Logical thinking',
    'Detail oriented',
    'Organizational',
    'Flexible',
    'Adaptable',
    'Dedicated',
    'Focused',
    'Caring',
    'Loyal',
    'Punctual',
    'Strong work ethic',
    'Communicating',
    'Team oriented',
  ],

  resume: {
    title: 'Download Resume',
    url: '/resume/resume.pdf',
  },

  social: [
    { platform: 'github', url: 'https://github.com/pronoia9/' },
    { platform: 'linkedin', url: 'https://www.linkedin.com/in/jayansin/' },
    // { platform: 'facebook', url: 'https://www.facebook.com/victoriouswaffles' },
    // { platform: 'snapchat', fancybox: true, url: '/images/snapchat.png' },
    { platform: 'discord', fancybox: true, url: '/images/discord.gif' },
  ],
};
