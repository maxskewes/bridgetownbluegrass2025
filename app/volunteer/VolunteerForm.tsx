'use client';

import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { volunteerSendEmail } from '@/utils/volunteer-send-email';
import SubmitButton from '../components/SubmitButton';
import GridWrapper from '../components/GridWrapper';
import FormWrapper from '../components/FormWrapper';
import FormFieldWrapper from '../components/FormFieldWrapper';

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
          <FormFieldWrapper label='Your Name' hFor='name' colSpan={2}>
            <input
              type='text'
              className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
              {...register('name', { required: true })}
            />
          </FormFieldWrapper>
          <FormFieldWrapper label='Email Address' hFor='email' colSpan={1}>
            <input
              type='email'
              placeholder='example@domain.com'
              className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
              {...register('email', { required: true })}
            />
          </FormFieldWrapper>
          <FormFieldWrapper label='Phone Number' hFor='phone' colSpan={1}>
            <input
              type='tel'
              placeholder='ex: 503 555-2025'
              className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
              {...register('phone', { required: true })}
            />
          </FormFieldWrapper>
          <FormFieldWrapper label={'Message'} hFor='message' colSpan={2}>
            <textarea
              rows={4}
              placeholder='Message with available times, desired position, all relevant info, etc.'
              className='w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
              {...register('message', { required: true })}
            />
          </FormFieldWrapper>

          <SubmitButton>Send Message to Volunteer Crew</SubmitButton>
        </GridWrapper>
      </form>
    </FormWrapper>
  );
};

export default VolunteerForm;
