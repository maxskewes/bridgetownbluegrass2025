import { ArtistFormData } from '../app/artist-apply/ArtistForm';

export function artistSendEmail(data: ArtistFormData) {
  const apiEndpoint = '/api/artist';

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
