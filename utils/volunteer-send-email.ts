import { VolunteerFormData } from '../app/volunteer/VolunteerForm';

export function volunteerSendEmail(data: VolunteerFormData) {
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
