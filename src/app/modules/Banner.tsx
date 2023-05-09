'use client';

import React, { useContext } from 'react';
import { XMarkIcon } from '@heroicons/react/20/solid';
import { ExitBannerContext } from '../context/ExitBannerContext';

const Banner: React.FC = () => {
  const { isOpen, setIsOpen } = useContext(ExitBannerContext);

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <div>
      {isOpen && (
        <div className='relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1'>
          <div
            className='absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl'
            aria-hidden='true'
          >
            <div className='aspect-[577/310] w-[36.0625rem]' />
          </div>
          <div className='flex flex-wrap items-center gap-x-4 gap-y-2'>
            <p className='text-sm leading-6 text-gray-900'>
              Interested in my projects?
              <strong className='pl-1 font-bold cursor-pointer'>
                <u>Check them out on Github</u>
              </strong>
            </p>
          </div>
          <div className='flex flex-1 justify-end'>
            <button
              type='button'
              className='-m-3 p-3 focus-visible:outline-offset-[-4px]'
            >
              <span className='sr-only'>Dismiss</span>
              <XMarkIcon
                onClick={handleClose}
                className='h-5 w-5 text-gray-900'
                aria-hidden='true'
              />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Banner;
