'use client';
import React from 'react';

interface FormWrapperTypes {
  children: any;
}

const FormWrapper = ({ children }: FormWrapperTypes) => {
  return (
    <div className='w-full max-w-[800px]'>
    <div className='w-full bg-white p-4 rounded-xl shadow-xl mb-12 min-w-[100%] bg-white-200 rounded-xl pb-8'>
      {children}
    </div>
    </div>
  );
};

export default FormWrapper;
