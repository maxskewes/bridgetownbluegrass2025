'use client';
import React from 'react';

interface FormWrapperTypes {
  children: any;
}

const FormWrapper = ({ children }: FormWrapperTypes) => {
  return (
    <div className='w-full md:w-[800px] px-1 sm:px-2 md:px-8'>
    <div className='w-full bg-white p-4 px-8 rounded-xl shadow-xl mb-12 min-w-[100%] bg-white-200 rounded-xl pb-8'>
      {children}
    </div>
    </div>
  );
};

export default FormWrapper;
