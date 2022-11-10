import axios from 'axios';

axios.defaults.baseURL = 'https//pixabay.com/api/';
axios.defaults.params = {
  key: '30077711-4b113b89ab0e54a97a0c4d035',
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};

export async function fetchPicture(query, page) {
  const response = await axios.get(`?q=${query}&page=${page}`);
  console.log(response.data);
  return response.data;
}

export function needValues(data) {
  return data.map(({ id, largeImageURL, webformatURL }) => ({
    id,
    largeImageURL,
    webformatURL,
  }));
}
