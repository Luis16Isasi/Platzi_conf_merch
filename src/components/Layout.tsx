import * as React from 'react';

import Header from './Header';
import Fotter from './Footer';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Fotter />
    </div>
  );
};

export default Layout;
