//pages
import Home from '../pages/Home';
import LoginPage from '../pages/Login';
import EmpolyeesPage from '../pages/Employees/Employees';
import Trap from '../pages/Trap';
import Device from '../pages/Device';
import Training from '../pages/Training';
import CreateAccount from 'src/pages/CreateAccount';
// Layout
import { DefaultLayout, LoginLayout } from '../components/layout';
const authRoutes = [
  { path: '/', component: Home, layout: DefaultLayout },
  { path: '/trap', component: Trap, layout: DefaultLayout },
  { path: '/device', component: Device, layout: DefaultLayout },
  { path: '/training', component: Training, layout: DefaultLayout },
  { path: '/login', component: LoginPage, layout: LoginLayout },
  { path: '/employees', component: EmpolyeesPage, layout: DefaultLayout },
  { path: '/createaccount', component: CreateAccount, layout: DefaultLayout },
  
];

export { authRoutes };
