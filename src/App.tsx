import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { authRoutes } from './Routes';
import LoginPage from './pages/Login';
import { LoginLayout } from './components/layout';

interface rootReducer {
  auth: boolean;
}
function App() {
  const loginInfo: any = useSelector((state: rootReducer) => state.auth);
  console.log('this is a', loginInfo.userData.user);

  return (
    <Router>
      <Routes>
        {authRoutes.map((route, index) => {
          let Layout;
          let Page = LoginPage;
          if (loginInfo.userData.data) {
            Page = route.component;
          } else if (loginInfo.userData.user == null) {
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <LoginLayout>
                    <Page />
                  </LoginLayout>
                }
              />
            );
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
            />
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;
