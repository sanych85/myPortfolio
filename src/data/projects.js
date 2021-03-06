import dompredkovImg from '../img/screenshot portfolio/mainPages/dompredkov.png';
import cc4biznessImg from '../img/screenshot portfolio/mainPages/cc4bizness.png';
import coctailImg from '../img/screenshot portfolio/mainPages/coctail.png';
import countryImg from '../img/screenshot portfolio/mainPages/country.png';
import eCommerceIinteriorImg from '../img/screenshot portfolio/mainPages/e-commerce-interior.png';
import githubusersImg from '../img/screenshot portfolio/mainPages/githubusers.png';
import hackerImg from '../img/screenshot portfolio/mainPages/hacker.png';
import natoursImg from '../img/screenshot portfolio/mainPages/natours.png';

import ScreenShot1 from '../img/screenshot portfolio/cc4bizness/Screenshot_6.png';
import ScreenShot2 from '../img/screenshot portfolio/cc4bizness/Screenshot_7.png';
import ScreenShot3 from '../img/screenshot portfolio/cc4bizness/Screenshot_8.png';
import ScreenShot4 from '../img/screenshot portfolio/cc4bizness/Screenshot_9.png';


export const projects = [
  {
    id: 1,
    name: 'Country',
    repo: 'https://github.com/sanych85/country-app',
    live: '',
    mainImg: countryImg,
    detailedInfo: {
      imgs: [ScreenShot1, ScreenShot2, ScreenShot3, ScreenShot4],
      description:
        'the application allows you to get information about countries, as well as play an interesting game of guessing the country depending on its flag ',
      technologies: ['HTML', 'CSS', 'React', 'styled components', 'redux'],
      releasedYear: 2020
    },
  },
  {
    id: 2,
    name: 'E-commerce tours',
    repo: 'https://github.com/sanych85/natours',
    live: '',
    mainImg: natoursImg,
    detailedInfo: {
      imgs: [ScreenShot1, ScreenShot2, ScreenShot3, ScreenShot4],
      description:
        'The app was created by taking the Node js course on Udemy. Allows you to order a tour and pay for the tour',
      technologies: ['HTML', 'CSS', 'Node js', 'pug'],
      releasedYear: 2021
    },
  },
  {
    id: 3,
    name: 'Github Users',
    repo: 'https://github.com/sanych85/react-search-github-user',
    live: 'https://react-search-users.netlify.app/',
    mainImg: githubusersImg,
    detailedInfo: {
      imgs: [ScreenShot1, ScreenShot2, ScreenShot3, ScreenShot4],
      description:
        'Application for finding information about github repositories. Allows you to build various statistical graphs',
      technologies: ['HTML', 'CSS', 'React'],
      releasedYear: 2021
    },
  },
  {
    id: 4,
    name: 'Hacker news',
    repo: 'https://github.com/sanych85/test-avito-final',
    live: '',
    mainImg: hackerImg,
    detailedInfo: {
      imgs: [ScreenShot1, ScreenShot2, ScreenShot3, ScreenShot4],
      description:
        'The application was created during a test interview in the Avito company. Allows you to receive various news, as well as multi-stage comments to them',
      technologies: ['HTML', 'CSS', 'React', 'styled components', 'JEST'],
      releasedYear: 2021
    },
  },

  {
    id: 6,
    name: 'Coctail',
    repo: 'https://github.com/sanych85/cocktail-proj',
    live: 'https://cocktail-pages.netlify.app/',

    mainImg: coctailImg,
    detailedInfo: {
      imgs: [ScreenShot1, ScreenShot2, ScreenShot3, ScreenShot4],
      description:
        'simple cocktail selection project',
      technologies: ['HTML', 'CSS', 'React', 'JS'],
      releasedYear: 2021
    },
  },
  {
    id: 7,
    name: 'Genealogia site',
    repo: '',
    live: 'http://dompredkov.ru/',

    mainImg: dompredkovImg,
    detailedInfo: {
      imgs: [ScreenShot1, ScreenShot2, ScreenShot3, ScreenShot4],
      description:
        'Production project, fully working genealogy responsive website. A separate theme was created, which was then stretched over the CPM Wordpress',
      technologies: ['HTML', 'CSS', 'Sass', 'Wordpress', 'Webpack', 'JS'],
      releasedYear: 2021
    },
  },
  {
    id: 8,
    name: 'Consulting site',
    repo: '',
    live: 'https://cc4biznes.ru/',

    mainImg: cc4biznessImg,
    detailedInfo: {
      imgs: [ScreenShot1, ScreenShot2, ScreenShot3, ScreenShot4],
      description:
        'Production project, fully working consulting responsive website. A separate theme was created, which was then stretched over the CPM Wordpress',
      technologies: ['HTML', 'CSS', 'Sass', 'Wordpress', 'Webpack', 'JS'],
      releasedYear: 2019
    },
  },

  {
    id: 5,
    name: 'E-commerce shop',
    repo: 'https://github.com/sanych85/e-commerce-appartment',
    live: 'https://e-commerce-enterior.netlify.app/',
    mainImg: eCommerceIinteriorImg,
    detailedInfo: {
      imgs: [ScreenShot1, ScreenShot2, ScreenShot3, ScreenShot4],
      description:
        'Complete e-commerce project for home interior design!',
      technologies: ['HTML', 'CSS', 'React', 'styled components'],
      releasedYear: 2021
    },
  },
];
