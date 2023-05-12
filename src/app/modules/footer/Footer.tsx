'use client';
import React from 'react';
import { navigation } from './FooterData';
const Footer: React.FC<{}> = () => {
  return (
    <footer className='bg-white border border-gray-900'>
      <div className='max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8'>
        <nav
          className='-mx-5 -my-2 flex flex-wrap justify-center'
          aria-label='Footer'
        >
          {navigation.main.map((item) => (
            <div key={item.name} className='px-5 py-2'>
              <a
                href={item.href}
                className='hover:pb-1 hover:border-b-2 hover:border-gray-900 hover-duration-500 hover:transition text-base text-gray-900'
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <div className='mt-8 flex justify-center space-x-6'>
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className='text-gray-900 hover:text-gray-900'
            >
              <span className='sr-only'>{item.name}</span>
              <item.icon className='h-6 w-6' aria-hidden='true' />
            </a>
          ))}
        </div>
        <p className='mt-8 text-center text-base text-gray-400'>
          Gerald Maduabuchi - Software Engineer.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
