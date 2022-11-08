import axios from 'axios';

const BASE_URL = 'https//pixabay.com/api/';
const API_KEY = '30077711-4b113b89ab0e54a97a0c4d035';

function fetchPicture(query, page, perPage) {
  const params = {
    q: query,
    page: page,
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: perPage,
  };

  return fetch(`${BASE_URL}?${params}`).then(response => {
    if (response.ok) {
      console.log(response);
      return response.json();
    }
    return Promise.reject(new Error('Woops, nothing found for your request'));
  });
}
c;
