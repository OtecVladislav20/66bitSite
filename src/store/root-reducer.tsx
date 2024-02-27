/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { loadDataProcess } from './load-data-process/load-data-process';


export const rootReducer = combineReducers({
  [NameSpace.Data]: loadDataProcess.reducer,
});
