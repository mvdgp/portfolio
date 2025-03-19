import Home from '../pages/Home';
import Creations from '../pages/Creations';
import Profile from '../pages/Profile';
import Contact from '../pages/Contact';

export const routes = [
  { path: '/home', component: Home, EN: 'Home', NL: 'Home' },
  { path: '/creations', component: Creations, EN: 'Creations', NL: 'Creaties' },
  { path: '/profile', component: Profile, EN: 'Profile', NL: 'Profiel' },
  { path: '/contact', component: Contact, EN: 'Contact', NL: 'Contact' },
];