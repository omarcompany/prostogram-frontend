import { Header } from '../../../components/header';
import { logout } from '../../../utils';

export const MainHeader = (): JSX.Element => {
  return (
    <Header>
      <button
        className="logout-button button"
        onClick={() => {
          logout();
        }}
      >
        Logout
      </button>
    </Header>
  );
};
