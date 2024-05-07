import React from 'react'
import PageContainer from '../components/PageContainer'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <PageContainer heading='Contact Bridgetown Org'>
      <div>
        <ContactForm />
      </div>
    </PageContainer>
  )
}

export default Contact