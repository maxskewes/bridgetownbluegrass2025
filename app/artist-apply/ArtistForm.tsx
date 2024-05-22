'use client';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { artistSendEmail } from '@/utils/artist-send-email';
import SubmitButton from '../components/SubmitButton';
import FormWrapper from '../components/FormWrapper';
import GridWrapper from '../components/GridWrapper';

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
    <FormWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <GridWrapper>
          <div className='col-span-1 md:col-span-1'>
            <label
              htmlFor='name'
              className='mb-2 block text-base font-medium text-black'
            >
              Name of Act
            </label>
            <input
              type='text'
              placeholder="Performer(s)'s Name"
              className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
              {...register('name', { required: true })}
            />
          </div>
          <div className='col-span-1 md:col-span-1'>
            <label
              htmlFor='hometown'
              className='mb-2 block text-base font-medium text-black'
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

          <div className='col-span-1 md:col-span-2'>
            <label
              htmlFor='bio'
              className='mb-2 block text-base font-medium text-black'
            >
              Short Bio
            </label>
            <textarea
              rows={4}
              placeholder='Bio'
              className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
              {...register('bio', { required: true })}
            />
          </div>

          <div className='col-span-1 md:col-span-1'>
            <label
              htmlFor='website'
              className='mb-2 block text-base font-medium text-black'
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

          <div className='col-span-1 md:col-span-1'>
            <label
              htmlFor='video'
              className='mb-2 block text-base font-medium text-black'
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

          <div className='col-span-1 md:col-span-1'>
            <label
              htmlFor='email'
              className='mb-2 block text-base font-medium text-black'
            >
              Contact Email
            </label>
            <input
              type='email'
              placeholder='Contact Email'
              className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
              {...register('email', { required: true })}
            />
          </div>
          <div className='col-span-1 md:col-span-1'>
            <label
              htmlFor='phone'
              className='mb-2 block text-base font-medium text-black'
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

          <div className='col-span-1 md:col-span-2'>
            <label
              htmlFor='social'
              className='mb-2 block text-base font-medium text-black'
            >
              Social Media Links
            </label>
            <textarea
              rows={2}
              placeholder='Social Media Links'
              className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
              {...register('social', { required: true })}
            />
          </div>
          <div className='col-span-1 md:col-span-2'>
            <label
              htmlFor='message'
              className='mb-2 block text-base font-medium text-black'
            >
              Message
            </label>
            <textarea
              rows={4}
              placeholder='Message'
              className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
              {...register('message', { required: true })}
            />
          </div>

          <SubmitButton>Send Artist Application</SubmitButton>
        </GridWrapper>
      </form>
    </FormWrapper>
  );
};

export default ArtistForm;
