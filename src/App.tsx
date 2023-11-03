import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './Routes';
import { DefaultLayout } from './components/layout';
import { useDispatch, useSelector } from "react-redux";
import { rootReducer } from './interface';
import Login from './page/Login';





function App() {
  const login = useSelector((state:rootReducer) => state.checkLogin);
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

            if(login){

              return <Route key={index} path={route.path} element={<Layout><Page/></Layout>}></Route>
            }else if(login == false){
              return <Route key={index} path="/login" element={<Login></Login>}></Route>
            }
          })}
        </Routes>
      </>
    </Router>
  );
}

export default App;