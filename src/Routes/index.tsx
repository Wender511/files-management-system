//pages
import Home from '../pages/Home';
import LoginPage from '../pages/Login';
import EmpolyeesPage from '../pages/Empolyees';
import Trap from '../pages/Trap';
import Device from '../pages/Device';
import Training from '../pages/Training';
// Layout
import { DefaultLayout, LoginLayout } from '../components/layout';

const authRoutes = [
  { path: '/', component: Home, layout: DefaultLayout },
  { path: '/trap', component: Trap, layout: DefaultLayout },
  { path: '/device', component: Device, layout: DefaultLayout },
  { path: '/training', component: Training, layout: DefaultLayout },
  { path: '/login', component: LoginPage, layout: LoginLayout },
  { path: '/employees', component: EmpolyeesPage, layout: DefaultLayout },
  
];

export { authRoutes };
