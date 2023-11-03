import { configureStore } from '@reduxjs/toolkit';

import useReducer from './login';

const store = configureStore({
  reducer: {
    checkLogin: useReducer,
  }
});

export default store;