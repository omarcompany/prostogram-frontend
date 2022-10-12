export function Header(): JSX.Element {
  return (
    <header className="header">
      <a
        className="header-logo"
        href=""
        target="_top"
        rel="noopener noreferrer"
      >
        <img
          className="header-logo-image"
          src="images/logo.svg"
          alt="logotype"
        />
      </a>
      <div className="header-line"></div>
    </header>
  );
}
