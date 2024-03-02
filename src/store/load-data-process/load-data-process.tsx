import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { TLoadDataProcess } from '../../components/types/state';
import { fetchEmployeeAction, fetchEmployeeIDAction } from '../api-actions';
import { TEmployee } from '../../components/types/employee';


const initialState: TLoadDataProcess = {
  employee: [],
  employeeID: {} as TEmployee,
  theme: true,
};

export const loadDataProcess = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    changeThemeAction: (state, action: PayloadAction<boolean>) => {
      state.theme = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchEmployeeAction.fulfilled, (state, action) => {
        state.employee = action.payload;
      })
      .addCase(fetchEmployeeIDAction.fulfilled, (state, action) => {
        state.employeeID = action.payload;
      });
  }
});

export const {changeThemeAction} = loadDataProcess.actions;
