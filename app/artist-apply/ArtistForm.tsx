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
  social: string;
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
          placeholder='Name'
          className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
          {...register('name', { required: true })}
        />
      </div>
      <div className='mb-5'>
        <label
          htmlFor='hometown'
          className='mb-3 block text-base font-medium text-black'
        >
          Hometown
        </label>
        <input
          type='text'
          placeholder='Hometown'
          className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
          {...register('hometown', { required: true })}
        />
      </div>

      <div className='mb-5'>
        <label
          htmlFor='bio'
          className='mb-3 block text-base font-medium text-black'
        >
          Short Bio
        </label>
        <input
          type='text'
          placeholder='Bio'
          className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
          {...register('bio', { required: true })}
        />
      </div>

      <div className='mb-5'>
        <label
          htmlFor='website'
          className='mb-3 block text-base font-medium text-black'
        >
          Website
        </label>
        <input
          type='text'
          placeholder='Website'
          className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
          {...register('website', { required: true })}
        />
      </div>

      <div className='mb-5'>
        <label
          htmlFor='email'
          className='mb-3 block text-base font-medium text-black'
        >
          Email
        </label>
        <input
          type='email'
          placeholder='Email'
          className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
          {...register('email', { required: true })}
        />
      </div>

      <div className='mb-5'>
        <label
          htmlFor='phone'
          className='mb-3 block text-base font-medium text-black'
        >
          Contact Phone Number
        </label>
        <input
          type='text'
          placeholder='Contact Phone Number'
          className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
          {...register('phone', { required: true })}
        />
      </div>

      <div className='mb-5'>
        <label
          htmlFor='video'
          className='mb-3 block text-base font-medium text-black'
        >
          Video URL (provide one)
        </label>
        <input
          type='text'
          placeholder='Video URL'
          className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
          {...register('video', { required: true })}
        />
      </div>

      <div className='mb-5'>
        <label
          htmlFor='social'
          className='mb-3 block text-base font-medium text-black'
        >
          Social Media Links
        </label>
        <input
          type='text'
          placeholder='Social Media Links'
          className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
          {...register('social', { required: true })}
        />
      </div>

      <div className='mb-5'>
        <label
          htmlFor='message'
          className='mb-3 block text-base font-medium text-black'
        >
          Message
        </label>
        <input
          type='text'
          placeholder='Message'
          className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
          {...register('message', { required: true })}
        />
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
