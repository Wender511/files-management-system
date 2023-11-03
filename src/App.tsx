import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { publicRoutes } from './Routes';
import { DefaultLayout } from './components/layout';
import { rootReducer } from './types';

function App() {
  const login = useSelector((state: rootReducer) => state.checkLogin);
  return (
    <Router>
      <>
        <Routes>
          {publicRoutes.map((route, index) => {
            let Layout = DefaultLayout;
            const Page = route.component;
            if (route.layout) {
              Layout = route.layout;
            } else {
              Layout = DefaultLayout;
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
      </>
    </Router>
  );
}

export default App;
