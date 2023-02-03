import React from 'react';
import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

export const linksPublic = [
  {
    id: 1,
    url: '/',
    text: 'Accueil',
  },
  {
    id: 2,
    url: '/about',
    text: 'À propos',
  },
  {
    id: 3,
    url: '/plantations',
    text: 'Plantations',
  },
  {
    id: 4,
    url: '/ressources',
    text: 'ressources',
    sublinks: [{ id: 1, url: '/resources/articles', text: 'articles' }],
  },
  {
    id: 5,
    url: '/contact',
    text: 'Nous rejoindre',
  },
  {
    id: 6,
    url: '/login',
    text: 'mon jardin',
  },
];
export const linksPrivate = [
  {
    id: 1,
    url: '/todo',
    text: 'ma todo',
  },
  {
    id: 2,
    url: '/plantations',
    text: 'Plantations',
  },
  {
    id: 3,
    url: '/ressources',
    text: 'ressources',
    sublinks: [{ id: 1, url: '/resources/articles', text: 'articles' }],
  },
  {
    id: 4,
    url: '/tools',
    text: 'outilsthèque',
  },
];

//*ajout social possible

export const vegetables = [
  {
    name: 'aubergine',
    id: 1,
    img: 'https://images.pexels.com/photos/7195208/pexels-photo-7195208.jpeg?auto=compress&cs=tinysrgb&w=600',
    plantation: 'fin mars-avril (sous abri), mai(pleine terre)',
    recolte: 'de mi mai à octobre',
  },
  {
    name: 'tomate',
    id: 2,
    img: '',
    plantation: 'bientôt',
    recolte: 'bientôt',
  },
  {
    name: 'poivron',
    id: 3,
    img: '',
    plantation: 'bientôt',
    recolte: 'bientôt',
  },
  {
    name: 'courgette',
    id: 4,
    img: '',
    plantation: 'bientôt',
    recolte: 'bientôt',
  },
  {
    name: 'cornichon',
    id: 5,
    img: '',
    plantation: 'bientôt',
    recolte: 'bientôt',
  },
];
