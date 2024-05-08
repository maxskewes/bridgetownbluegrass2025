import React from 'react';
import PageContainer from '../components/PageContainer';
import ContactForm from './ContactForm';
import PageTextBox from '../components/PageTextBox';
import CenterTextBox from '../components/CenterTextBox';

const Contact = () => {
  return (
    <PageContainer heading='Contact Bridgetown Org'>
      <div>
        <CenterTextBox>
          Please feel free to contact us with any further questions about the
          festival.
        </CenterTextBox>
      </div>
      <div>
        <CenterTextBox>
          Vendors: please use this form to let us know what your trade is and in
          what capacity you would like to be involved.
        </CenterTextBox>
      </div>

        <ContactForm />
 
    </PageContainer>
  );
};

export default Contact;
