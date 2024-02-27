import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app/app';
import { Provider } from 'react-redux';
import { store } from './store';
import HistoryRouter from './components/history-router/history-router';
import { browserHistory } from './components/services/browser-history';
import { ToastContainer } from 'react-toastify';
import { fetchEmployeeAction } from './store/api-actions';


store.dispatch(fetchEmployeeAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HistoryRouter history={browserHistory}>
        <ToastContainer/>
        <App />
      </HistoryRouter>
    </Provider>
  </React.StrictMode>
);
