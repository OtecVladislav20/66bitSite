import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { TLoadDataProcess } from '../../components/types/state';
import { fetchEmployeeAction } from '../api-actions';


const initialState: TLoadDataProcess = {
  employee: [],
};

export const loadDataProcess = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchEmployeeAction.fulfilled, (state, action) => {
        state.employee = action.payload;
      });
  }
});
