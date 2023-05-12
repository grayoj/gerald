'use client';

import React from 'react';
import { cardsData } from './CardsData';
import Card from './Card';
import { ChevronRightIcon } from '@heroicons/react/20/solid';

const ToolCard: React.FC<{}> = () => {
  return (
    <div className='border-gray-900 border'>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-5'>
        {cardsData.map((card, index) => (
          <Card key={index} name={card.name} icon={card.icon} />
        ))}
      </div>
      <div className='flex justify-center p-4'>
        <div className='bg-gray-900 p-4 rounded-md cursor-pointer flex items-center'>
          <p className='text-white mr-2'>
            I have much more skillsets that you can check them out here
          </p>
          <ChevronRightIcon className='h-5 w-5 text-white' />
        </div>
      </div>
    </div>
  );
};

export default ToolCard;
