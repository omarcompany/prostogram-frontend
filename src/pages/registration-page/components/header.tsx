export const Header = (): JSX.Element => {
  return (
    <header className="header">
      <div className="header-actions-wrapper">
        <a
          className="header-logo"
          href=""
          target="_top"
          rel="noopener noreferrer"
        >
          Prostogram
        </a>
        <button className="sign-in-button">Sign in</button>
      </div>
      <div className="header-line"></div>
    </header>
  );
};
