'use client';
import React from 'react';

const ProjectsBanner: React.FC = () => {
  return (
    <div className='hover:bg-gray-900 hover:text-gray-50 transition duration-500 border-1 border-gray-900 relative isolate flex justify-center items-center overflow-hidden bg-gray-900 px-6 py-2.5'>
      <div className='text-md text-center leading-6 text-gray-50 hover:text-gray-50 transition duration-500'>
        Recent Projects
      </div>
    </div>
  );
};

export default ProjectsBanner;
