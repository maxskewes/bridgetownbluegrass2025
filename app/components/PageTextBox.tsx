import React from 'react';

type PageTextBoxProps = {
  children: any;
};

const PageTextBox = ({ children }: PageTextBoxProps) => {
  return (
    <div className='max-w-[300px] sm:max-w-[400px] sm:min-w-[400px] lg:min-w-[800px] lg:w-[800px] xl:w-[100px] mb-6'>
      <p className='text-center text-sm md:text-base xl:text-lg tracking-normal lg:tracking-wider text-white'>
        {children}
      </p>
    </div>
  );
};

export default PageTextBox;
