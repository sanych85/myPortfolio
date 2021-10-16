import { ProjectsPage, Main, About, SingleProjectPage ,NotFoundPage} from '../Pages';
import { AiFillFacebook, AiFillSkype, AiFillGithub } from 'react-icons/ai';
export const socialLinks = [
  {
    id: 1,
    name: 'facebook',
    link: 'https://www.facebook.com/aleks.shatoh',
    component: <AiFillFacebook/>,
    color: "#4867aa",
    colorHover: "#344b7d"
  },
  {
    id: 2,
    name: 'github',
    link: 'https://github.com/sanych85',
    component: <AiFillGithub/>,
    color: "black",
    colorHover: "#5d4545"
  },
  {
    id: 3,
    name: 'Skype',
    link: '',
    component: <AiFillSkype/>,
    color: '#0291d5',
    colorHover: "#066d9e"
  },

];

export const routingLinks = [
  {
    id: 1,
    name: 'main',
    link: '/',
    component: Main,
    exact: true,
  },
  {
    id: 2,
    name: 'about',
    link: '/about',
    component: About,
    exact: true,
  },
  // {
  //   id: 3,
  //   name: 'projects',
  //   link: '/projects',
  //   component: ProjectsPage,
  //   exact: true,
  // },
  {
    id: 4,
    name: 'project',
    link: '/projects/:id',
    component: SingleProjectPage,
    exact: true,
  },
  {
    id: 5,
    name: '404',
    link: '*',
    component: NotFoundPage,
    exact: false,
  },
];

export const navigationLinks = [
  {
    id: 1,
    name: 'main',
    link: '/',

   
  },
  {
    id: 2,
    name: 'education',
    link: '/#education',


  },
  {
    id: 3,
    name: 'advantages',
    link: '/#advantages',
  },
  {
    id: 4,
    name: 'skills',
    link: '/#skills',
  },
  {
    id: 5,
    name: 'projects',
    link: '/#projects',
  },
];


export const eductaionLink = [
  {
    id:1,
    univercityName: "Moscow State Univercity STANKIN",
    degree: "bachelor",
    year: "2002-2006",
    speciality: "mechanical engineering technology"
  },
  {
    id:2,
    univercityName: "Moscow Finance and Law University",
    degree: "specialist",
    year: "2006-2009",
    speciality: "finance and credit"
  }
]