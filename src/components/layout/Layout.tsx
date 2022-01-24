import React from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';

type Props = {
  children?: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <br />
      {children}
      <br />
      <Footer />
    </>
  );
}
