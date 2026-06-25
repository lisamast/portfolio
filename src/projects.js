const imagePath = (fileName) => `${import.meta.env.BASE_URL}images/${fileName}`;

const projects = [
  {
    id: 1,
    name: 'Information website',
    category: 'HTML & CSS',
    info: 'During the first period of my education, I created a website with HTML and CSS. The goal was to inform parents about the school and the Software Development course during a parent evening.',
    gitLink: 'https://github.com/lisamast/ouderavond-project',
    images: [imagePath('informatie1.png'), imagePath('informatie2.png')],
  },
  {
    id: 2,
    name: 'JavaScript game',
    category: 'HTML, CSS & JavaScript',
    info: 'In the second period of my education, I worked with JavaScript to create a game on a website. This project helped me practise logic, interaction and improving a web page with code.',
    gitLink: 'https://github.com/TechniekCollegeRotterdam/project-games-for-good-sod1a-antillen',
    images: [imagePath('game1.png'), imagePath('game2.png')],
  },
  {
    id: 3,
    name: 'Escaperoom',
    category: 'JavaScript & PHP',
    info: 'In this project I combined HTML, CSS, JavaScript and PHP to create an escape room website. I learned more about working with different techniques in one project.',
    gitLink: 'https://github.com/TechniekCollegeRotterdam/project-escape-room-project-p3-escaperoom',
    images: [imagePath('escaperoom1.png'), imagePath('escaperoom2.png')],
  },
  {
    id: 4,
    name: 'Webshop',
    category: 'PHP & SQL',
    info: 'In the last period of my first year, I worked with PHP and SQL to create a bakery webshop. This project helped me practise databases, login functionality and CRUD actions.',
    gitLink: 'https://github.com/TechniekCollegeRotterdam/projectp4-crud-login-sod1a-cvba',
    images: [imagePath('webshop1.png'), imagePath('webshop2.png')],
  },
  {
    id: 5,
    name: 'App design',
    category: 'Figma',
    info: 'For an optional subject, I created an app design for an Italian restaurant in Figma. I focused on layout, user flow and making the design clear for users.',
    images: [imagePath('appdesign.png'), imagePath('appdesign1.png'), imagePath('appdesign2.png'), imagePath('appdesign3.png')],
  },
  {
    id: 6,
    name: 'OOP project',
    category: 'PHP OOP',
    info: 'This was my first OOP project and my only back-end project in my second year. I created a website for a fictional theater and practised writing more structured code.',
    gitLink: 'https://gitlab.com/techniek-college-rotterdam/schiedam/2026/projects/oop-lisa-mischa/oopproject',
    images: [imagePath('oop-1.png'), imagePath('oop-2.png')],
  },
  {
    id: 7,
    name: 'Offtrack',
    category: 'React Native',
    info: 'For an optional subject, I worked with React Native to create a mobile app where people can log their trips. This project was made for practice and helped me learn more about mobile development.',
    gitLink: 'https://github.com/lisamast/OffTrack',
    images: [imagePath('offtrack.png'), imagePath('offtrack1.png'), imagePath('offtrack2.png'), imagePath('offtrack3.png'), imagePath('offtrack4.png')],
  },
  {
    id: 8,
    name: 'Teachers lunch app',
    category: 'React Native',
    info: 'For my exam, I created a React Native app that teachers can use to order lunch at school. I focused on making the app clear and practical to use.',
    gitLink: 'https://github.com/lisamast/Docentenlunch',
    images: [imagePath('lunch.jpg'), imagePath('lunch1.jpg'), imagePath('lunch2.jpg'), imagePath('lunch3.jpg'), imagePath('lunch4.jpg')],
  },
  {
    id: 9,
    name: 'Barbershop',
    category: 'Next.js',
    info: 'The last project I made in my second year was for a practice exam. I created a website for a fictional barbershop and used Next.js for this project.',
    gitLink: 'https://github.com/lxuiejane/Barbershop-Examen',
    images: [imagePath('barber1.png'), imagePath('barber2.png')],
  },
];

export default projects;
