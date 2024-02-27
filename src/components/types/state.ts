import { store } from '../../store';
import { TEmployee } from './employee';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type TLoadDataProcess = {
  employee: TEmployee[];
}
