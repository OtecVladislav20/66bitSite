import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../components/types/state';
import { AxiosInstance } from 'axios';
import { TEmployee } from '../components/types/employee';


export const fetchEmployeeAction = createAsyncThunk<TEmployee[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchEmployee',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<TEmployee[]>('/api/Employee');
    return data;
  },
);

export const fetchEmployeeIDAction = createAsyncThunk<TEmployee, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchEmployeeID',
  async (id, {extra: api}) => {
    const {data} = await api.get<TEmployee>(`/api/Employee/${id}`);
    return data;
  },
);
