'use client';
import React from 'react';
import PageContainer from '../components/PageContainer';
import VolunteerForm from './VolunteerForm';

const Volunteer = () => {
  return (
    <PageContainer heading='Volunteer'>
      <div>
        <VolunteerForm />
      </div>
    </PageContainer>
  );
};

export default Volunteer;
