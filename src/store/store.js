import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import productsReducer from './slices/productsSlice';
import crudReducer from './slices/crudSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productsReducer,
    crud: crudReducer,
  },
});

