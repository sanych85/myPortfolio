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
import { v4 as uuidv4 } from 'uuid';

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
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi libero eaque laboriosam officiis doloribus quibusdam harum non a, natus iste voluptas laborum, atque cumque fuga quas iure facilis veritatis sequi!',
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
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus corrupti dicta deleniti, consectetur suscipit ad. Voluptatibus inventore quisquam culpa vero fuga voluptas! Deserunt quas id perferendis neque facere, voluptatibus error.',
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
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eius esse voluptate excepturi assumenda corporis, error natus sint illo, fuga vitae itaque temporibus eveniet debitis. Explicabo illo minima rerum sunt.',
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
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur minus doloribus maiores, ullam facere voluptatem quod eaque ad, quos qui sequi tempora corporis suscipit ipsam ducimus, error laudantium officiis quas?',
      technologies: ['HTML', 'CSS', 'React', 'styled components', 'JEST'],
      releasedYear: 2021
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
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, sunt, similique iusto voluptatum dolorem repudiandae sed beatae sit aperiam totam praesentium quaerat. Unde vel temporibus, soluta necessitatibus cum consectetur iste!',
      technologies: ['HTML', 'CSS', 'React', 'styled components'],
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
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae deleniti quos molestias beatae delectus veniam quia cum similique facilis? Quo obcaecati blanditiis saepe veritatis excepturi minima soluta rem? Dolor, facere!',
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
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim voluptatem doloribus maxime ullam. Fugiat, reiciendis exercitationem illo quod nobis, commodi dolorum ipsam molestiae eaque adipisci corporis est animi? Perspiciatis, expedita?',
      technologies: ['HTML', 'CSS', 'Sass', 'Wordpress', 'Webpack', 'JS'],
      releasedYear: 2019
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
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt ad facere aspernatur ipsa ab, est similique id totam quis incidunt voluptatum laudantium soluta iusto molestias eligendi nostrum veritatis. Aperiam, temporibus!',
      technologies: ['HTML', 'CSS', 'Sass', 'Wordpress', 'Webpack', 'JS'],
      releasedYear: 2019
    },
  },
];
