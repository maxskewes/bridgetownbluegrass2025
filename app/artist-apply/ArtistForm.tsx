'use client';

import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { artistSendEmail } from '@/utils/artist-send-email';

export type ArtistFormData = {
  name: string;
  hometown: string;
  bio: string;
  website: string;
  email: string;
  phone: number;
  video: string;
  social: string[];
  message: string;
};

const ArtistForm: FC = () => {
  const { register, handleSubmit } = useForm<ArtistFormData>();

  function onSubmit(data: ArtistFormData) {
    artistSendEmail(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='mb-5'>
        <label
          htmlFor='name'
          className='mb-3 block text-base font-medium text-black'
        >
          Name
        </label>
        <input
          type='text'
          placeholder='Full Name'
          className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
          {...register('name', { required: true })}
        />
      </div>
      <div className='mb-5'>
        <label
          htmlFor='email'
          className='mb-3 block text-base font-medium text-black'
        >
          Email Address
        </label>
        <input
          type='email'
          placeholder='example@domain.com'
          className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
          {...register('email', { required: true })}
        />
      </div>
      <div className='mb-5'>
        <label
          htmlFor='phone'
          className='mb-3 block text-base font-medium text-black'
        >
          Phone Number
        </label>
        <input
          type='number'
          placeholder='Phone Number'
          className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
          {...register('phone', { required: true })}
        />
      </div>
      <div className='mb-5'>
        <label
          htmlFor='message'
          className='mb-3 block text-base font-medium text-black'
        >
          Message
        </label>
        <textarea
          rows={4}
          placeholder='Type your message'
          className='w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
          {...register('message', { required: true })}
        ></textarea>
      </div>
      <div>
        <button className='hover:shadow-form rounded-md bg-purple-500 py-3 px-8 text-base font-semibold text-white outline-none'>
          Submit
        </button>
      </div>
    </form>
  );
};

export default ArtistForm;
