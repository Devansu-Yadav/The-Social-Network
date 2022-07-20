import { configureStore } from '@reduxjs/toolkit';
import authSlice from "redux/slices/authSlice";
import postSlice from 'redux/slices/postSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    post: postSlice
  },
});
