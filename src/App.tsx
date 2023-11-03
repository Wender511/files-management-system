import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './Routes';
import { DefaultLayout } from './components/layout';
import More from './page/More';
import Home from './page/Home';

function App() {
  return (
    <Router>
      <>
        <Routes>
          {publicRoutes.map((route, index) => {
            let Layout = DefaultLayout
            const Page = route.component
            if(route.layout){
              Layout = route.layout;
            }else{
              Layout = DefaultLayout;
            }

            return <Route key={index} path={route.path} element={<Layout><Page/></Layout>}></Route>
          })}
        </Routes>
      </>
    </Router>
  );
}

export default App;