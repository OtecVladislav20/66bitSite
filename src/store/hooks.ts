import { TypedUseSelectorHook, useDispatch, useSelector, useStore } from 'react-redux';
import { store } from './store';


export type TAppStore = typeof store;
export type TRootState = ReturnType<TAppStore['getState']>;
export type TAppDispatch = TAppStore['dispatch'];

export const useAppDispatch: () => TAppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;
export const useAppStore: () => TAppStore = useStore;

