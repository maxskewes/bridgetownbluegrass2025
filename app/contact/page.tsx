import PageContainer from '../components/PageContainer';
import ContactForm from './ContactForm';
import CenterTextBox from '../components/CenterTextBox';

const Contact = () => {
  return (
    <PageContainer heading='Contact Bridgetown Org'>
      <CenterTextBox>
        Please feel free to contact us with any further questions about the
        festival.
      </CenterTextBox>
      <CenterTextBox>
        VENDORS:
        <br />
        Please use this form to let us know what your trade is and in what
        capacity you would like to be involved.
      </CenterTextBox>
      <ContactForm />
    </PageContainer>
  );
};

export default Contact;
