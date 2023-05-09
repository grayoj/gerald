'use client';

import { useState } from 'react';
import { ExitBannerContext } from '../context/ExitBannerContext';

type ExitBannerProviderProps = {
  children: React.ReactNode;
};

export const EditBannerProvider: React.FC<ExitBannerProviderProps> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <ExitBannerContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </ExitBannerContext.Provider>
  );
};
