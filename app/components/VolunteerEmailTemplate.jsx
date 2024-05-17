'use client';
import React from 'react';

export const VolunteerEmailTemplate = ({
  name,
  email,
  message,
}) => {
  return (
    <div className='flex flex-col justify-center items-center bg-blue-200 text-white p-8 m-4'>
      <div className='text-xl'>{name}</div>
      <div className='text-md'>{email}</div>
      <div className='text-sm'>{message}</div>
      <div className='text2xl'>Take that lads!!!</div>
    </div>
  );
};


