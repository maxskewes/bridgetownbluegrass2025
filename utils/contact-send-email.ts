import { ContactFormData } from '../app/contact/ContactForm';

export function contactSendEmail(data: ContactFormData) {
  const apiEndpoint = '/api/contact';

  fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      alert(response.message);
    })
    .catch((err) => {
      alert(err);
    });
}
