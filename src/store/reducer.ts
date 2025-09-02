import { createSlice } from '@reduxjs/toolkit';
import { TEmployee } from '../utils/types';
import { fetchEmployee, fetchEmployees } from './actions';


type TInitialState = {
  employees: TEmployee[];
  employee: TEmployee;
}

const initialState: TInitialState = {
  employees: [],
  employee: {} as TEmployee,
};

export const reducer = createSlice({
  name: 'reducer',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.employees = action.payload;
      })
      .addCase(fetchEmployee.fulfilled, (state, action) => {
        state.employee = action.payload;
      });
  }
});
