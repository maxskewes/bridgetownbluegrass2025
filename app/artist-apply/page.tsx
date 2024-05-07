'use client';
import React from 'react';
import PageContainer from '../components/PageContainer';
import ArtistForm from './ArtistForm';

const ArtistApply = () => {
  return (
    <PageContainer heading='Artist Apply'>
      <div>
        <ArtistForm />
      </div>
    </PageContainer>
  );
};

export default ArtistApply;
