import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';

import { AppRoute, AuthorizationStatus } from './const';
import { AuthContext } from './context/auth-provider';
import { getUserData } from './action/user';
import { LoginPage } from './pages/login-page/login-page';
import { MainPage } from './pages/main-page/main-page';
import { NotFoundPage } from './pages/not-found-page/not-found-page';
import { PopupManager } from './components/popups/popup-manager';
import { PopupType } from './components/popups/popup-type';
import { PrivateRoute } from './components/private-route/private-route';
import { RegistrationPage } from './pages/registration-page/registration-page';

export const App = (): JSX.Element => {
  const { setAuthorizationStatus } = useContext(AuthContext);

  useEffect(() => {
    getUserData()
      .then(() => {
        setAuthorizationStatus(AuthorizationStatus.Auth);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  const [popupOpen, setPopupOpen] = useState(false);
  const [popupType, setPopupType] = useState(PopupType.None);

  const openPopup = (type: PopupType) => {
    setPopupType(type);
    setPopupOpen(true);
  };

  const onClosePopup = () => setPopupOpen(false);

  return (
    <>
      <PopupManager
        onClose={onClosePopup}
        isOpen={popupOpen}
        popupType={popupType}
      />
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Registration}
            element={<RegistrationPage openPopup={openPopup} />}
          />
          <Route
            path={AppRoute.Login}
            element={<LoginPage openPopup={openPopup} />}
          />
          <Route
            path={AppRoute.Main}
            element={
              <PrivateRoute>
                <MainPage openPopup={openPopup} />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
