'use client';
import React from 'react';

type cardProps = {
  name: String;
  icon: React.ReactNode;
};

const Card: React.FC<cardProps> = ({ name, icon }: any) => {
  return (
    <div className='overflow-hidden transform hover:scale-105 transition-all duration-500 flex gap-x-2 p-2 m-10 rounded-lg bg-white items-center'>
      <svg
        height='50px'
        width='50px'
        viewBox='0 0 256 331'
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
        preserveAspectRatio='xMidYMid'
      >
        {icon}
      </svg>
      <p className='text-gray-800 text-lg font-medium pb-5'>{name}</p>
    </div>
  );
};

export default Card;
