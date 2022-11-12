// import axios from 'axios';

// axios.defaults.baseURL = 'https//pixabay.com/api/';
// axios.defaults.params = {
//   key: '30077711-4b113b89ab0e54a97a0c4d035',
//   image_type: 'photo',
//   orientation: 'horizontal',
//   per_page: 12,
// };

// export const fetchPicture = async (query, page) => {
//   const response = await axios.get(`?q=${query}&page=${page}`);
//   return response.data;
// }

// export function needValues(data) {
//   return data.map(({ id, largeImageURL, webformatURL }) => ({
//     id,
//     largeImageURL,
//     webformatURL,
//   }));
// }


import PropTypes from 'prop-types';
import axios from 'axios';

export default function fetchPicture(query, page) {
  const response = axios.get(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=29355896-24b645639f363894e45fb57cb&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response;
}

fetchPicture.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};