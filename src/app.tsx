import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import StaffList from './pages/staff-list-page';
import { AppRoute } from './utils/const';
import Staff from './pages/staff-page';


export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate replace to={AppRoute.StaffList} />} />
        <Route path={AppRoute.StaffList} element={<StaffList/>}/>
        <Route path={AppRoute.Staff} element={<Staff/>}/>
      </Routes>
    </BrowserRouter>
  );
}
