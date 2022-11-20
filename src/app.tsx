import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';

import { AppRoute } from './const';
import { getUserData } from './store/api-action/user';
import { LoginPage } from './pages/login-page/login-page';
import { MainPage } from './pages/main-page/main-page';
import { NotFoundPage } from './pages/not-found-page/not-found-page';
import { PopupManager } from './components/popups/popup-manager';
import { PrivateRoute } from './components/private-route/private-route';
import { RegistrationPage } from './pages/registration-page/registration-page';
import { store } from './store/store';

import browserHistory from './browser-history';
import HistoryRouter from './components/history-router.tsx/history-router';

export const App = (): JSX.Element => {
  useEffect(() => {
    store.dispatch(getUserData());
  }, []);

  return (
    <>
      <PopupManager
      />
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route
            path={AppRoute.Registration}
            element={<RegistrationPage />}
          />
          <Route
            path={AppRoute.Login}
            element={<LoginPage />}
          />
          <Route
            path={AppRoute.Main}
            element={
              <PrivateRoute>
                <MainPage />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </HistoryRouter>
    </>
  );
};
