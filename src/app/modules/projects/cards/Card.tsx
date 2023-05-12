'use client';
import { ArrowUpRightIcon } from '@heroicons/react/20/solid';
import React from 'react';
type props = {
  project: any;
};

const Card: React.FC<props> = ({ project }) => {
  return (
    <div className='flex flex-col h-full bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-all duration-500'>
      <div className='relative'>
        <img
          className='w-full h-32 object-cover'
          src={project.image}
          alt={project.name}
        />
      </div>
      <div className='flex-grow p-4'>
        <h3 className='font-bold text-lg mb-2'>{project.name}</h3>
        <p className='text-gray-700 text-base'>{project.description}</p>
      </div>
      <div className='flex justify-end p-4'>
        <a
          href={project.link}
          className='flex px-4 py-2 text-white bg-gray-900 hover:border rounded hover:bg-transparent hover:border-gray-900 hover:text-gray-900 transition-all duration-500'
        >
          See project
          <ArrowUpRightIcon className='ml-2 -mr-1 w-5 h-6' />
        </a>
      </div>
    </div>
  );
};

export default Card;
