import { createAsyncThunk } from '@reduxjs/toolkit';
import { TEmployee } from '../utils/types';
import { TAppDispatch, TRootState } from './hooks';
import { AxiosInstance } from 'axios';

export const fetchEmployees = createAsyncThunk<TEmployee[], undefined, {
  dispatch: TAppDispatch;
  state: TRootState;
  extra: AxiosInstance;
}>(
  'data/fetchEmployees',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<TEmployee[]>('https://frontend-test-api.stk8s.66bit.ru/api/Employee?Page=1&Count=20');
    return data;
  },
);

export const fetchEmployee = createAsyncThunk<TEmployee, string, {
  dispatch: TAppDispatch;
  state: TRootState;
  extra: AxiosInstance;
}>(
  'data/fetchEmployee',
  async (id, {extra: api}) => {
    const {data} = await api.get<TEmployee>(`https://frontend-test-api.stk8s.66bit.ru/api/Employee/${id}`);
    return data;
  },
);

