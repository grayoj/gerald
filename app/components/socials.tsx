'use client';

import React from 'react';
import { LogoGithub, LogoTwitter, Mail } from 'react-ionicons';

export const SocialSection = () => {
  return (
    <div className='flex space-x-2 my-8'>
      <LogoTwitter //@ts-ignore
        className='cursor-pointer'
        color='#a3a3a3'
      />
      <LogoGithub //@ts-ignore
        className='cursor-pointer'
        color='#a3a3a3'
      />
      <Mail //@ts-ignore
        className='cursor-pointer'
        color='#a3a3a3'
      />
    </div>
  );
};
