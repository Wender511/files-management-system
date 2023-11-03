//pages
import Home from '../pages/Home';
import MorePage from '../pages/More';
import Login from '../pages/Login'
import EmpolyeesPage from '../pages/Empolyees';
// Layout
import { DefaultLayout } from '../components/layout';

const publicRoutes = [
  { path: '/', component: Home },
  { path: '/more', component: MorePage, layout: DefaultLayout },
  {path: './login', component:Login, layout: DefaultLayout},
  { path: '/employees', component: EmpolyeesPage, layout: DefaultLayout },
];


export { publicRoutes };
