import { Link } from 'react-router-dom';

import { AppRoute } from '../const';

export const Header = ({
  children,
}: {
  children?: JSX.Element;
}): JSX.Element => {
  return (
    <header className="header">
      <div className="header-actions-wrapper">
        <Link
          className="header-link header-logo"
          to={AppRoute.Main}
          target="_top"
          rel="noopener noreferrer"
        >
          Prostogram
        </Link>
        {children}
      </div>
      <div className="header-line"></div>
    </header>
  );
};
