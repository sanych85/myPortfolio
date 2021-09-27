import { ProjectsPage, Main, About, SingleProjectPage } from '../Pages';
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
    exact: false,
  },
  {
    id: 3,
    name: 'projects',
    link: '/projects',
    component: ProjectsPage,
    exact: false,
  },
  {
    id: 4,
    name: 'project',
    link: '/:id',
    component: SingleProjectPage,
    exact: true,
  },
];

export const navigationLinks = [
  {
    id: 1,
    name: 'main',
    link: '/',

    exact: true,
  },
  {
    id: 2,
    name: 'about',
    link: '/about',

    exact: false,
  },
  {
    id: 3,
    name: 'projects',
    link: '/projects',
  },
];
