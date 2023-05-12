'use client';

import React from 'react';
import { Popover } from '@headlessui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRightIcon, Bars3Icon } from '@heroicons/react/20/solid';
import { NavButton, PopoverButton } from './NavbarStyles';

const NavigationComponent: React.FC<{}> = () => {
  const pathname = usePathname();
  return (
    <div className='bg-white shadow-md sticky z-50 border-gray-900 border border-1'>
      <div className='flex justify-between items-center px-4 py-4 sm:px-6 md:justify-start md:space-x-10 '>
        <div className='flex justify-start lg:w-0 lg:flex-1'>
          <span className='sr-only'>Gerald.</span>
          <div className='h-8 w-auto sm:h-8'>Gerald.</div>
        </div>
        <div className='-mr-2 -my-2 md:hidden'>
          <Popover.Button className={PopoverButton}>
            <span className='sr-only'>Open menu</span>
            <Bars3Icon className='h-6 w-6' aria-hidden='true' />
          </Popover.Button>
        </div>
        <Popover.Group as='nav' className='hidden md:flex space-x-10'>
          <Link
            href='./'
            className='hover:pb-1 hover:border-b-2 hover:border-gray-900 hover-duration-500 hover:transition text-base font-medium text-black hover:text-gray-900 hover:duration-500'
          >
            Home
          </Link>
          <Link
            href='./about'
            className='hover:pb-1 hover:border-b-2 hover:border-gray-900 hover-duration-500 hover:transition text-base font-medium text-black hover:text-gray-900 hover:duration-500'
          >
            About
          </Link>
          <Link
            href='./experience'
            className='hover:pb-1 hover:border-b-2 hover:border-gray-900 hover-duration-500 hover:transition text-base font-medium text-black hover:text-gray-900 hover:duration-500'
          >
            Experience
          </Link>
          <Link
            href='/'
            className='hover:pb-1 hover:border-b-2 hover:border-gray-900 hover-duration-500 hover:transition text-base font-medium text-black hover:text-gray-900 hover:duration-500'
          >
            Teaching
          </Link>
          <Link
            href='/'
            className='hover:pb-1 hover:border-b-2 hover:border-gray-900 hover-duration-500 hover:transition text-base font-medium text-black hover:text-gray-900 hover:duration-500'
          >
            Speaking
          </Link>
        </Popover.Group>
        <div className='hidden md:flex items-center justify-end md:flex-1 lg:w-0'>
          <div className='hover:pb-1 hover:border-b-2 hover:border-gray-900 hover-duration-500 hover:transition  cursor-pointer hover:text-gray-900'>
            Contact
          </div>
          <div className={NavButton}>
            <Link href='/'>See Blog</Link>
            <ChevronRightIcon className='ml-2 -mr-1 w-5 h-5' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationComponent;
