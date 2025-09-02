import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';
import axios from 'axios';

export const store = configureStore({
  reducer: {
    reducer: reducer.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: axios,
      },
    }),
});
