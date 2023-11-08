import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { publicRoutes } from './Routes';
import { DefaultLayout } from './components/layout';
import { useDispatch, useSelector } from "react-redux";
import LoginPage from './pages/Login';

interface rootReducer{
  checkLogin:boolean
}
function App() {
  const login:any = useSelector((state: rootReducer) => state.checkLogin);
  const check = login.login
  return (<>
    <Router>
      <Routes>
          {publicRoutes.map((route, index) => {
            let Layout = DefaultLayout;
            let Page = LoginPage;
            console.log(check);
            
            if(check){
              Page = route.component
            }
            console.log(Page);
            
            if (route.layout) {
              Layout = route.layout;
            } else {
              Layout = DefaultLayout;
            }
            return <Route key={index} path={route.path} element={<Layout><Page /></Layout>}></Route>
          })}
         </Routes>
      </Router>
  </>
      );
}

      export default App;
