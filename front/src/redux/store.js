import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { authSlice } from './states';

const rootReducer = combineReducers({
  auth: authSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
