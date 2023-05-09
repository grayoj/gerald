'use client';

import React from "react";

interface ExitBannerContextProps {
 isOpen: boolean;
 setIsOpen: (isOpen: boolean) => void;
}

export const ExitBannerContext = React.createContext<ExitBannerContextProps>({
 isOpen: false,
 setIsOpen: () => { },
});


