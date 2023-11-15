import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./authSlice";

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth']
}
const reducer = combineReducers({
  auth: authReducer,
})
const persistedReducer = persistReducer(persistConfig, reducer)


const store = configureStore({
  reducer: persistedReducer
});

export const persistor = persistStore(store)

export default store;
