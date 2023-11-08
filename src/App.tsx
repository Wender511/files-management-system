import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Fragment } from 'react';

import { authRoutes } from './Routes';
import { DefaultLayout } from './components/layout';
import LoginPage from './pages/Login';

interface rootReducer {
  auth: boolean;
}
function App() {
  const loginInfo: any = useSelector((state: rootReducer) => state.auth);
  return (
    <>
      <Router>
        <Routes>
          {authRoutes.map((route, index) => {
            let Layout;
            let Page = LoginPage;
            if (loginInfo.user) {
              Page = route.component;
            }

            if (route.layout) {
              Layout = route.layout;
            } else {
              Layout = Fragment;
            }
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              ></Route>
            );
          })}
        </Routes>
      </Router>
    </>
  );
}

export default App;
