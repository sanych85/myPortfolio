import { ProjectsPage, Main, About, SingleProjectPage } from '../Pages';

export const socialLinks = [
  {
    id: 1,
    name: 'vk',
    link: '',
  },
  {
    id: 2,
    name: 'facebook',
    link: '',
  },
  {
    id: 3,
    name: 'github',
    link: '',
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
