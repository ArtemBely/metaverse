import Main from './Main';
import Registration from './Registration';
import Download from './Download';
import Mistake from './Mistake';
import Enter from './Enter';
import Start from './Start';

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
  },
  {
    path: '/enter',
    exact: true,
    component: Enter
  },
  {
    path: ['/start', '/start/map', '/start/details', '/start/chat'],
    exact: true,
    component: Start
  }
]

export default routes;
