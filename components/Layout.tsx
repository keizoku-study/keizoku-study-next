import { ReactNode } from 'react';

type AppProps = {
  children: ReactNode;
};

export default function Layout({ children }: AppProps): JSX.Element {
  return (
    <>
      <div>header</div>
      <div>{children}</div>
      <div>footer</div>
    </>
  );
}
