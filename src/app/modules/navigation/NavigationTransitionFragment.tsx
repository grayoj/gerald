import { ChevronRightIcon } from '@heroicons/react/20/solid';
import { PopoverLink, PopoverStyle } from './NavbarStyles';
import Link from 'next/link';
import { Transition, Popover } from '@headlessui/react';
import React, { Fragment } from 'react';

const NavigationTransitionFragment: React.FC<{}> = () => {
  return (
    <Transition
      as={Fragment}
      enter='duration-200 ease-out'
      enterFrom='opacity-0 scale-95'
      enterTo='opacity-100 scale-100'
      leave='duration-100 ease-in'
      leaveFrom='opacity-100 scale-100'
      leaveTo='opacity-0 scale-95'
    >
      <Popover.Panel focus className={PopoverStyle}>
        <div className='shadow-md border border-gray-900 bg-white absolute bg-opacity-10 min-h-screen h-full w-full z-50 inset-0 block'>
          <div className='pt-5 pb-6 px-5'>
            <div className='flex items-center justify-between'>
              <div></div>
              <div className='-mr-2'></div>
            </div>
          </div>
          <div className='my-20 py-6 px-10'>
            <div className='grid grid-rows gap-7'>
              <div className='py-2 flex justify-between'>
                <Link
                  href='/'
                  className='hover:pb-1 hover:border-b-2 hover:border-gray-900 hover-duration-500 hover:transition text-base font-medium hover:text-gray-900 hover:duration-500'
                >
                  Home
                </Link>
              </div>
              <div className='py-2 flex justify-between'>
                <Link
                  href='/'
                  className='hover:pb-1 hover:border-b-2 hover:border-gray-900 hover-duration-500 hover:transition text-base font-medium hover:text-gray-900 hover:duration-500'
                >
                  About
                </Link>
              </div>
              <div className='py-2 flex justify-between'>
                <Link
                  href='/'
                  className='hover:pb-1 hover:border-b-2 hover:border-gray-900 hover-duration-500 hover:transition text-base font-medium hover:text-gray-900 hover:duration-500'
                >
                  Experience
                </Link>
              </div>
              <div className='py-2 flex justify-between'>
                <Link
                  href='/'
                  className='hover:pb-1 hover:border-b-2 hover:border-gray-900 hover-duration-500 hover:transition text-base font-medium hover:text-gray-900 hover:duration-500'
                >
                  Teaching
                </Link>
              </div>{' '}
              <div className='py-2 flex justify-between'>
                <Link
                  href='/'
                  className='hover:pb-1 hover:border-b-2 hover:border-gray-900 hover-duration-500 hover:transition text-base font-medium hover:text-gray-900 hover:duration-500'
                >
                  Speaking
                </Link>
              </div>
            </div>
            <div className='mt-6'>
              <Link href='' className={PopoverLink}>
                Contact
                <ChevronRightIcon className='ml-2 -mr-1 w-5 h-5' />
              </Link>
              <p className='hover:pb-1 hover:border-b-2 hover:border-gray-900 hover-duration-500 hover:transition mt-6 text-center text-base font-semibold cursor-pointer text-gray-900'>
                Interested in my blog? See here.
              </p>
            </div>
          </div>
        </div>
      </Popover.Panel>
    </Transition>
  );
};

export default NavigationTransitionFragment;
