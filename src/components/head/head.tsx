import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

interface IHeadProps {
  title: string;
  isLoading?: boolean;
}

export const Head = ({ title, isLoading }: IHeadProps): JSX.Element => {
  const [titleState, setTitleState] = useState(`${title}`);

  useEffect(() => {
    isLoading ? setTitleState(`${'Loading...'}`) : setTitleState(`${title}`);
  }, [isLoading, title]);

  return (
    <Helmet defer={false}>
      <meta charSet="utf-8" />
      <title>{titleState}</title>
    </Helmet>
  );
};
