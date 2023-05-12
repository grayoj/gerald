'use client';

import React from 'react';
import Image from 'next/image';
import Photo from '../../../../public/gerald.jpeg';
import { Twitter, GitHub, Email, LinkedIn } from '@mui/icons-material';

const Hero: React.FC<{}> = () => {
  return (
    <div className='bg-gray-100 py-16 border border-gray-900'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-48 flex flex-col md:flex-row items-center justify-center'>
        <div className='md:w-1/2 md:pr-12 mb-8 md:mb-0 flex items-center justify-center'>
          <div className='rounded-full h-80 w-80 flex items-center justify-center bg-black overflow-hidden'>
            <Image
              className='h-full w-full object-cover'
              src={Photo}
              alt='Profile'
            />
          </div>
        </div>
        <div className='md:w-1/2'>
          <h1 className='text-3xl font-bold text-gray-900 mb-4'>
            I attempt to craft elegant solutions with code.
          </h1>
          <div className='text-gray-900 text-lg mb-8 '>
            Building small to complex software kind of excites me. Competitive
            programming fascinates me. I teach programming and write Java,
            C/C++, Python, and TypeScript. I also experiment with Go. My
            interests include databases, distributed systems, compilers,
            operating systems, and machine learning.{' '}
          </div>
          <div className='flex items-center justify-center md:justify-start'>
            <a href='#' className='text-gray-600 hover:text-gray-900 mx-2'>
              <Twitter />
            </a>
            <a href='#' className='text-gray-600 hover:text-gray-900 mx-2'>
              <GitHub />
            </a>
            <a href='#' className='text-gray-600 hover:text-gray-900 mx-2'>
              <Email />
            </a>
            <a href='#' className='text-gray-600 hover:text-gray-900 mx-2'>
              <LinkedIn />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
