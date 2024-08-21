import { configureStore } from '@reduxjs/toolkit';
import chatReducer from './chatSlice';



const store = configureStore({
  reducer: {
    chat: chatReducer
  },
  devTools: process.env.NODE_ENV !== 'production' // Enable DevTools in development mode
});

export default store;
