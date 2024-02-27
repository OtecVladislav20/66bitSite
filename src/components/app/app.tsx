import { Route, Routes } from 'react-router-dom';
import { MainPage } from '../../pages/main-page';
import { InfoPage } from '../../pages/info-page';
import { AppRoute } from '../../const';


export function App() {
  return (
    <Routes>
      <Route
        path={AppRoute.Main}
        element={<MainPage/>}
      />
      <Route
        path={AppRoute.Info}
        element={<InfoPage/>}
      />
    </Routes>
  );
}
