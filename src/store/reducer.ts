import { createSlice } from '@reduxjs/toolkit';

type TInitialState = {
    x: string;
}

const initialState: TInitialState = {
    x: 'dsfsdf',
}

export const reducer = createSlice({
  name: 'reducer', 
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      // .addCase();
  }
});
