'use client';
import React, { ButtonHTMLAttributes, ReactNode } from 'react';

interface SubmitButtonTypes extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const SubmitButton = ({ children, ...props }: SubmitButtonTypes) => {
  return (
    <button
      {...props}
      className='col-span-1 md:col-span-2 justify-center items-center w-full h-auto cursor-pointer rounded-lg transition ease-in-out delay-50 bg-gradient-to-l from-blue-900 via-blue-500 to-blue-900 hover:scale-105 hover:bg-gradient-to-l hover:from-blue-800 hover:via-blue-500 hover:to-blue-800 duration-50 focus:bg-gradient-to-l focus:from-blue-100 focus:via-red-500 focus:to-blue-100 duration-50'
    >
      <p className='p-2 text-white font-semibold tracking-widest leading-6 whitespace-normal uppercase'>
        {children}
      </p>
    </button>
  );
};

export default SubmitButton;
