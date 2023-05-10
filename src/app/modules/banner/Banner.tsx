'use client';

import React, { useContext } from 'react';
import { XMarkIcon } from '@heroicons/react/20/solid';
import { ExitBannerContext } from '../../context/ExitBannerContext';

const Banner: React.FC = () => {
  const { isOpen, setIsOpen } = useContext(ExitBannerContext);

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <div>
      {isOpen && (
        <div className='hover:bg-gray-900  hover:color-gray-50  transition duration-500 border-1 border border-gray-900 relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-800 px-6 py-2.5 sm:px-3.5 sm:before:flex-1'>
          <div
            className='absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl'
            aria-hidden='true'
          >
            <div className='aspect-[577/310] w-[36.0625rem]' />
          </div>
          <div className='flex flex-wrap items-center gap-x-4 gap-y-2'>
            <p className='text-md leading-6 text-gray-50 hover:text-gray-50 transition duration-500'>
              Interested in my projects?
              <strong className='pl-1 font-bold cursor-pointer'>
                Check them out on Github
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
                className='h-5 w-5 text-gray-50 hover:text-gray-50 hover:bg-gray-70'
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
