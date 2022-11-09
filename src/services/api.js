import axios from 'axios';

axios.defaults.baseURL = 'https//pixabay.com/api/';
const API_KEY = '30077711-4b113b89ab0e54a97a0c4d035';

export default function fetchPicture(query, page) {
  return axios(`image_type=photo&orientation=horizontal&per_page=12`, {
    params: {
      q: query,
      page: page,
      key: API_KEY,
    },
  });
}
