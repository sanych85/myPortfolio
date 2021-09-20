import dompredkovImg from "../img/screenshot portfolio/mainPages/dompredkov.png"
import cc4biznessImg from "../img/screenshot portfolio/mainPages/cc4bizness.png"
import coctailImg from "../img/screenshot portfolio/mainPages/coctail.png"
import countryImg from "../img/screenshot portfolio/mainPages/country.png"
import eCommerceIinteriorImg from "../img/screenshot portfolio/mainPages/e-commerce-interior.png"
import githubusersImg from "../img/screenshot portfolio/mainPages/githubusers.png"
import hackerImg from "../img/screenshot portfolio/mainPages/hacker.png"
import natoursImg from "../img/screenshot portfolio/mainPages/natours.png"
export const projects = [
  {
    id: 1,
    name: 'Country',
    repo: 'https://github.com/sanych85/country-app',
    live: '',
    technologies: ['HTML', 'CSS', 'React', 'styled components'],
    imgs: [],
    mainImg:countryImg
  },
  {
    id: 2,
    name: 'E-commerce tours',
    repo: 'https://github.com/sanych85/natours',
    live: '',
    technologies: ['HTML', 'CSS', 'React', 'styled components'],
    imgs: [],
    mainImg:natoursImg
  },
  {
    id: 3,
    name: 'Github Users',
    repo: 'https://github.com/sanych85/react-search-github-user',
    live: 'https://react-search-users.netlify.app/',
    technologies: ['HTML', 'CSS', 'React', 'styled components'],
    imgs: [],
    mainImg:githubusersImg
  },
  {
    id: 4,
    name: 'Hacker news',
    repo: 'https://github.com/sanych85/test-avito-final',
    live: '',
    technologies: ['HTML', 'CSS', 'React', 'styled components'],
    imgs: [],
    mainImg:hackerImg
  },
  {
    id: 5,
    name: 'E-commerce shop',
    repo: 'https://github.com/sanych85/e-commerce-appartment',
    live: 'https://e-commerce-enterior.netlify.app/',
    technologies: ['HTML', 'CSS', 'React', 'styled components'],
    imgs: [],
    mainImg:eCommerceIinteriorImg
  },
  {
    id: 6,
    name: 'Coctail',
    repo: 'https://github.com/sanych85/cocktail-proj',
    live: 'https://cocktail-pages.netlify.app/',
    technologies: ['HTML', 'CSS', 'React', 'styled components'],
    imgs: [],
    mainImg:coctailImg
  },
  {
    id: 7,
    name: 'Genealogia site',
    repo: '',
    live: 'http://dompredkov.ru/',
    imgs: [],
    mainImg:dompredkovImg
  },
  {
    id:8,
    name: 'Consulting site',
    repo: '',
    live: 'https://cc4biznes.ru/',
    imgs: [],
    mainImg:cc4biznessImg
  },
];
