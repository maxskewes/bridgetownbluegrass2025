'use client';
import React from 'react';

interface FormGridWrapperTypes {
  children: any;
}

const FormGridWrapper = ({ children }: FormGridWrapperTypes) => {
  return (
    <div className='bg-white p-4 px-8 rounded-xl shadow-xl mb-12 min-w-[100%]'>
    <div className='grid w-full grid-cols-1 md:grid-cols-2 gap-4 bg-white-200 rounded-xl pb-8'>
      {children}
    </div>
    </div>
  );
};

export default FormGridWrapper;
