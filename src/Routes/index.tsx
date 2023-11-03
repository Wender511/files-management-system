//pages
import EmpolyeesPage from 'src/page/Empolyees';

import Home from '../page/Home';
import MorePage from '../page/More';
// Layout
import { DefaultLayout } from '../components/layout';

const publicRoutes = [
  { path: '/', component: Home },
  { path: '/more', component: MorePage, layout: DefaultLayout },
  { path: '/employees', component: EmpolyeesPage, layout: DefaultLayout },
];

export { publicRoutes };
