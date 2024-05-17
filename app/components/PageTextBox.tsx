import React, { ReactNode } from 'react';

type PageTextBoxProps = {
  children: ReactNode;
};

const PageTextBox = ({ children }: PageTextBoxProps) => {
  return (
    <div className='mb-6'>
      <p className='indent-4 md:indent-8 text-justify text-sm md:text-base xl:text-lg tracking-normal lg:tracking-wider text-white'>
        {children}
      </p>
    </div>
  );
};

export default PageTextBox;
