import Home from '../pages/Home';
import Portfolio from '../pages/Portfolio';
import Experience from '../pages/Experience';
import Connect from '../pages/Connect';

export const routes = [
  { path: '/home', component: Home, EN: 'Home', NL: 'Home' },
  { path: '/portfolio', component: Portfolio, EN: 'Portfolio', NL: 'Creaties' },
  { path: '/experience', component: Experience, EN: 'Experience', NL: 'Ervaring' },
  { path: '/connect', component: Connect, EN: 'Connect', NL: 'Contact' },
];