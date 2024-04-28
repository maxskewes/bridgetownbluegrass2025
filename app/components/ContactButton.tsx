import React from 'react';

type ContactButtonProps = {
      buttonText: string;
  };

const ContactButton = ({ buttonText }: ContactButtonProps) => {
  return (
    <div>
      <button className='bg-gradient-to-l from-blue-900 0% to-blue-600 to-blue-900 hover:bg-gradient-to-l from-blue-600 0% to-blue-400 to-blue-600 cursor-pointer'
        // isLoading={isLoading}
        // disabled={disabled}
        // onClick={onClick}
      >
        <p className='text-white font-semibold tracking-wide'>
          {buttonText}
        </p>
      </button>
    </div>
  );
};

export default ContactButton;
