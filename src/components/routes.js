import Main from './Main';
import Registration from './Registration';
import Download from './Download';
import Mistake from './Mistake';

const routes = [
  {
    path: '/',
    exact: true,
    component: Main
  },
  {
    path: '/registration',
    exact: true,
    component: Registration
  },
  {
    path: '/download',
    exact: true,
    component: Download
  },
  {
    path: '/mistake',
    exact: true,
    component: Mistake
  }
]

export default routes;
