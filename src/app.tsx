import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PrivateRoute } from './components/private-route/private-route';

import { AppRoute, AuthorizationStatus } from './const';
import { LoginPage } from './pages/login-page/login-page';
import { MainPage } from './pages/main-page/main-page';
import { NotFoundPage } from './pages/not-found-page/not-found-page';
import { RegistrationPage } from './pages/registration-page/registration-page';

export const App = (): JSX.Element => {
  return (
    <BrowserRouter>
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
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}>
              <MainPage />
            </PrivateRoute>
          }
        />
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>
    </BrowserRouter>
  );
};
