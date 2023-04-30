import { configureStore } from '@reduxjs/toolkit';
import userReducer from './users/userSlice';

const store = configureStore({
  reducer: {
    users: userReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
