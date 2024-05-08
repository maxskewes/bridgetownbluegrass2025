'use client';

import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { volunteerSendEmail } from '@/utils/volunteer-send-email';
import SubmitButton from '../components/SubmitButton';
import GridWrapper from '../components/GridWrapper';
import FormWrapper from '../components/FormWrapper';

export type VolunteerFormData = {
  name: string;
  email: string;
  phone: number;
  message: string;
};

const VolunteerForm: FC = () => {
  const { register, handleSubmit } = useForm<VolunteerFormData>();

  function onSubmit(data: VolunteerFormData) {
    volunteerSendEmail(data);
  }

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <GridWrapper>
          <div className='col-span-1 md:col-span-2'>
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
          <div className='col-span-1 md:col-span-1'>
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
          <div className='col-span-1 md:col-span-1'>
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
          <div className='col-span-1 md:col-span-2'>
            <label
              htmlFor='message'
              className='mb-3 block text-base font-medium text-black'
            >
              Message
            </label>
            <textarea
              rows={4}
              placeholder='Message, available times, etc.'
              className='w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
              {...register('message', { required: true })}
            ></textarea>
          </div>

          <SubmitButton>Send Message to Volunteer Crew</SubmitButton>
        </GridWrapper>
      </form>
    </FormWrapper>
  );
};

export default VolunteerForm;
