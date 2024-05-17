import React, { ReactNode } from 'react';

type CenterTextBoxProps = {
  children: ReactNode;
};

const CenterTextBox = ({ children }: CenterTextBoxProps) => {
  return (
    <div className='mb-6'>
      <p className='text-center text-sm md:text-base xl:text-lg tracking-normal lg:tracking-wider text-white'>
        {children}
      </p>
    </div>
  );
};

export default CenterTextBox;
