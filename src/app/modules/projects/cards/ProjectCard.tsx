'use client';

import React from 'react';
import { projects } from './ProjectsData';
import Card from './Card';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
const ProjectCard: React.FC<{}> = () => {
  return (
    <div className='border-gray-900 border bg-gray-50'>
      <div className='m-14 flex flex-wrap justify-center'>
        {projects.map((project) => (
          <div className='w-full sm:w-1/2 lg:w-1/3 p-4' key={project.id}>
            <Card project={project} />
          </div>
        ))}
      </div>
      <div className='flex justify-center p-4'>
        <div className='bg-gray-900 p-4 rounded-md cursor-pointer flex items-center'>
          <p className='text-white mr-2'>
            I have much more projects that you can check out here
          </p>
          <ChevronRightIcon className='h-5 w-5 text-white' />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
