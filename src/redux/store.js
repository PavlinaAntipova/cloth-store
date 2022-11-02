import { configureStore } from '@reduxjs/toolkit';
import { offersApi } from './api';

export const store = configureStore({
  reducer: {
    [offersApi.reducerPath]: offersApi.reducer
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), offersApi.middleware],
});