import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import { SWRConfig } from 'swr';
import { Spin } from 'antd';

import { authRoutes } from './Routes';
import LoginPage from './pages/Login';
import { LoginLayout } from './components/layout';
import { request } from './api/config';

interface rootReducer {
  auth: boolean;
}
const fetcher = (url: string) => request(url).then(res => res.data);
function App() {
  const loginInfo: any = useSelector((state: rootReducer) => state.auth);
  return (
    <SWRConfig
      value={{
        refreshInterval: 5 * 60 * 1000,
        refreshWhenHidden: true,
        fetcher: fetcher,
        onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
          if (error.status === 404) return;
          if (error.status === 403) return;

          if (retryCount >= 0) return;

          setTimeout(() => revalidate({ retryCount }), 5000);
        },
      }}
    >
      <SnackbarProvider
        maxSnack={3}
        autoHideDuration={4000}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <React.Suspense
          fallback={
            <div className='flex-center min-h-screen'>
              <Spin size='large' />
            </div>
          }
        >
          <Router>
            <Routes>
              {authRoutes.map((route, index) => {
                let Layout;
                let Page = route.component;
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
        </React.Suspense>
      </SnackbarProvider>
    </SWRConfig>
  );
}

export default App;
