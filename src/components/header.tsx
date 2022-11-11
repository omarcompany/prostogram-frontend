export const Header = ({
  children,
}: {
  children?: JSX.Element;
}): JSX.Element => {
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
        {children}
      </div>
      <div className="header-line"></div>
    </header>
  );
};
