import React from 'react';
import ReactDOM from 'react-dom/client';

import 'src/styles/ant-custom.scss';
import 'src/styles/global.css';
import 'src/assets/Icons/css/all.css';
import App from './App';
import { Provider } from 'react-redux';
import store, {persistor} from './Redux/store';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <Provider store={store}>
    <PersistGate loading = {null} persistor = {persistor}>
    <App />
    </PersistGate>,
  </Provider>,
);


