'use client';
import React from 'react';

interface SubmitButtonTypes {
  children: any;
}

const SubmitButton = ({ children }: SubmitButtonTypes) => {
  return (
    <button className='col-span-1 md:col-span-2 justify-center items-center pt-6'>
      <div className='w-full h-auto cursor-pointer rounded-lg bg-gradient-to-l from-blue-900 via-blue-600 to-blue-900 hover: bg-gradient-to-l from-blue-600 via-blue-400 to-blue-600'>
        <p className='p-2 text-white font-semibold tracking-wider leading-6 whitespace-normal uppercase'>
          {children}
        </p>
      </div>
    </button>
  );
};

export default SubmitButton;
