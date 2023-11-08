//pages
import Home from '../pages/Home';
import MorePage from '../pages/More';
import LoginPage from '../pages/Login';
import EmpolyeesPage from '../pages/Empolyees';
// Layout
import { DefaultLayout, LoginLayout } from '../components/layout';

const authRoutes = [
  { path: '/', component: Home, layout: DefaultLayout },
  { path: '/more', component: MorePage, layout: DefaultLayout },
  { path: '/login', component: LoginPage, layout: LoginLayout },
  { path: '/employees', component: EmpolyeesPage, layout: DefaultLayout },
];

export { authRoutes };
