'use client';

import { useContext } from 'react';
import { ExitBannerContext } from '../context/ExitBannerContext';

export const useEditBanner = () => useContext(ExitBannerContext);
