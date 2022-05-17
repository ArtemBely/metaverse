import Main from './Main';
//import Registration from './Registration';
import Download from './Download';
import Mistake from './Mistake';
import Enter from './Enter';
import Start from './Start';

const routes = [
  {
    path: ['/', '/de', '/en', '/de', '/ru'],
    exact: true,
    component: Main
  },
  {
    path: ['/download', '/:id/download'],
    exact: true,
    component: Download
  },
  {
    path: ['/:id/mistake', '/mistake'],
    exact: true,
    component: Mistake
  },
  {
    path: ['/enter', '/:id/enter'],
    exact: true,
    component: Enter
  },
  {
    path: ['/start', '/ru/start', '/en/start', '/de/start',
     '/start/map', '/ru/start/map', '/en/start/map', '/de/start/map',
     '/start/details', '/ru/start/details', '/en/start/details', '/de/start/details',
     '/start/chat', '/ru/start/chat', '/en/start/chat', '/de/start/chat'],
    exact: true,
    component: Start
  },
  /*
  {
    path: '/registration',
    exact: true,
    component: Registration
  },*/
]

export default routes;
