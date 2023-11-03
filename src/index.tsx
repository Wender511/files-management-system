import React from 'react';
import ReactDOM from 'react-dom/client';

import 'src/styles/ant-custom.scss';
import 'src/styles/global.css';
import 'src/assets/Icons/css/all.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './Redux/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);


