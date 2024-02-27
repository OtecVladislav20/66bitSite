import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../components/types/state';
import { AxiosInstance } from 'axios';
// import { APIRoute } from '../const';
// import { TComments, TFilmPromo, TFilms, TFilmsFilmId } from '../components/types/films';


export const fetchEmployeeAction = createAsyncThunk<string, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchEmployee',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<string>('/api/Employee');
    return data;
  },
);

// export const fetchFilmsAction = createAsyncThunk<TFilms[], undefined, {
//   dispatch: AppDispatch;
//   state: State;
//   extra: AxiosInstance;
// }>(
//   'films/fetchFilms',
//   async (_arg, {extra: api}) => {
//     const {data} = await api.get<TFilms[]>(APIRoute.Films);
//     return data;
//   },
// );

// export const fetchFilmPromoAction = createAsyncThunk<TFilmPromo, undefined, {
//   dispatch: AppDispatch;
//   state: State;
//   extra: AxiosInstance;
// }>(
//   'films/fetchFilmPromo',
//   async (_arg, {extra: api}) => {
//     const {data} = await api.get<TFilmPromo>(APIRoute.FilmPromo);
//     return data;
//   },
// );

// export const fetchSimilarFilmsAction = createAsyncThunk<TFilms[], string, {
//   dispatch: AppDispatch;
//   state: State;
//   extra: AxiosInstance;
// }>(
//   'data/fetchSimilarFilms',
//   async (id, {extra: api}) => {
//     const {data} = await api.get<TFilms[]>(`${APIRoute.Films}/${id}/similar`);
//     return data;
//   },
// );

// export const fetchFilmsFilmIdAction = createAsyncThunk<TFilmsFilmId, string, {
//   dispatch: AppDispatch;
//   state: State;
//   extra: AxiosInstance;
// }>(
//   'data/fetchFilmsFilmId',
//   async (id, {extra: api}) => {
//     const {data} = await api.get<TFilmsFilmId>(`${APIRoute.Films}/${id}`);
//     return data;
//   },
// );

// export const fetchMyList = createAsyncThunk<TFilms[], undefined, {
//   dispatch: AppDispatch;
//   state: State;
//   extra: AxiosInstance;
// }>(
//   'data/fetchMyList',
//   async (_arg, { extra: api }) => {
//     const { data } = await api.get<TFilms[]>('/favorite');
//     return data;
//   }
// );

// export const fetchCommentsAction = createAsyncThunk<TComments[], string, {
//   dispatch: AppDispatch;
//   state: State;
//   extra: AxiosInstance;
// }>(
//   'data/fetchComments',
//   async (id, {extra: api}) => {
//     const {data} = await api.get<TComments[]>(`${APIRoute.Comments}/${id}`);
//     return data;
//   },
// );
