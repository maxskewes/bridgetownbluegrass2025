'use client';
import React from 'react';

interface GridWrapperTypes {
  children: any;
}

const GridWrapper = ({ children }: GridWrapperTypes) => {
  return (
    <div className='grid w-full grid-cols-1 md:grid-cols-2 gap-4'>
      {children}
    </div>
  );
};

export default GridWrapper;
