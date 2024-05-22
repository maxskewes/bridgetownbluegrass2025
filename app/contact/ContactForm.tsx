'use client';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { contactSendEmail } from '@/utils/contact-send-email';
import SubmitButton from '../components/SubmitButton';
import GridWrapper from '../components/GridWrapper';
import FormWrapper from '../components/FormWrapper';
import FormFieldWrapper from '../components/FormFieldWrapper';

export type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

const ContactForm: FC = () => {
  const { register, handleSubmit } = useForm<ContactFormData>();

  function onSubmit(data: ContactFormData) {
    contactSendEmail(data);
  }

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <GridWrapper>
          <FormFieldWrapper label={'Your Name'} hFor='name' colSpan={2}>
            <input
              type='text'
              className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
              {...register('name', { required: true })}
            />
          </FormFieldWrapper>
          <FormFieldWrapper label={'Email Address'} hFor='email' colSpan={2}>
            <input
              type='email'
              placeholder='example@domain.com'
              className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
              {...register('email', { required: true })}
            />
          </FormFieldWrapper>
          <FormFieldWrapper label={'Message'} hFor='message' colSpan={2}>
            <textarea
              rows={4}
              className='w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
              {...register('message', { required: true })}
            />
          </FormFieldWrapper>

          <SubmitButton>CONTACT BB&FF CREW</SubmitButton>
        </GridWrapper>
      </form>
    </FormWrapper>
  );
};

export default ContactForm;
