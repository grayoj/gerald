import React, { ReactNode } from 'react';

interface props {
  children: ReactNode;
}

const Layout: React.FC<props> = ({ children }) => {
  return <div className='max-w-7xl mx-auto'>{children}</div>;
};

export default Layout;
