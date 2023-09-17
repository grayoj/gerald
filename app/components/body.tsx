import React from 'react';

export const Body = () => {
  return (
    <section>
      <div className='font-bold text-2xl mb-8 tracking-tighter'>
        Hi, I'm Gerald 👋
      </div>
      <p className='prose prose-neutral text-neutral-600 dark:text-neutral-300 dark:prose-invert'>
        I’m Gerald Maduabuchi Okereke, a passionate computer programmer and
        consultant with a penchant for orchestrating the digital world. I am
        heavily invested in working on cool projects within the scope of{' '}
        <span className='border-b border-gray-300 dark:border-gray-700'>
          distributed systems
        </span>
        ,{' '}
        <span className='border-b border-gray-300 dark:border-gray-700'>
          machine learning
        </span>{' '}
        and software engineering in general. I enjoy teaching and working on a
        lot of hobby projects. My journey has led me to collaborate with
        esteemed organizations such as{' '}
        <span className='border-b border-gray-300 dark:border-gray-700'>
          Phillips Consulting
        </span>
        ,{' '}
        <span className='border-b border-gray-300 dark:border-gray-700'>
          Legend Nigeria
        </span>{' '}
        to name a few, to execute several projects. I've also taught the
        engineering teams of huge government parastatals such as{' '}
        <span className='border-b border-gray-300 dark:border-gray-700'>
          Nigerian Pension Commission
        </span>{' '}
        and{' '}
        <span className='border-b border-gray-300 dark:border-gray-700'>
          National Youth Service Corps
        </span>
        , helping them migrate or scale their infrastructure.
      </p>
    </section>
  );
};
