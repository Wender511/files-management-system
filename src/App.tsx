import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { publicRoutes } from './Routes';
import { DefaultLayout } from './components/layout';
import { useDispatch, useSelector } from "react-redux";
import { rootReducer } from './interface';
import LoginPage from './pages/Login';

function App() {
  const login:any = useSelector((state: rootReducer) => state.checkLogin);
  const check = login.login
  return (<>
        {check == true ? <>
    <Router>
      <Routes>
          {publicRoutes.map((route, index) => {
            let Layout = DefaultLayout;
            const Page = route.component;
            if (route.layout) {
              Layout = route.layout;
            } else {
              Layout = DefaultLayout;
            }
            return <Route key={index} path={route.path} element={<Layout><Page /></Layout>}></Route>
          })}
         </Routes>
      </Router>
        </> : <>
            <LoginPage/>
        </>}
  </>
      );
}

      export default App;
