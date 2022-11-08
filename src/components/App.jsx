import React from 'react';
import axios from 'axios';
// import { ToastContainer } from 'react-toastify';
import Searchbar from './Searchbar';
// import ImageGallery from './ImageGallery';
// import ImageGalleryItem from './ImageGalleryItem';
// import Loader from './Loader';
// import Button from './Button';
// import Modal from './Modal';
// import fetchPicture from 'services/api';

axios.defaults.baseURL = 'https//pixabay.com/api/';
const API_KEY = '30077711-4b113b89ab0e54a97a0c4d035';

export class App extends React.Component {
  state = {
    pictures: [],
    // query: '',
    // page: 1,
    // perPage: 12,
    // showModal: false,
    // status: 'idle',
  };

  // componentDidUpdate() {}

  handleQuerySubmit = query => {
    this.setState({ query });
  };

  render() {
    return (
      <>
        <Searchbar handleQuerySubmit={this.handleQuerySubmit} />
        {/* <ImageGallery />
        <ImageGalleryItem />
        <Loader />
        <Button />
        <Modal /> */}
        {/* <ToastContainer autoClose={3000} /> */}
      </>
    );
  }
}

// import React from 'react';
// // import { ToastContainer } from 'react-toastify';
// import Searchbar from './Searchbar';
// // import ImageGallery from './ImageGallery';
// // import ImageGalleryItem from './ImageGalleryItem';
// // import Loader from './Loader';
// // import Button from './Button';
// // import Modal from './Modal';
// import fetchPicture from 'services/api';

// export class App extends React.Component {
//   state = {
//     pictures: [],
//     query: '',
//     page: 1,
//     perPage: 12,
//     showModal: false,
//     status: 'idle',
//   };

//   // componentDidUpdate(prevProps, prevState) {}

//   handleQuerySubmit = query => {
//     this.setState({ query });
//   };

//   render() {
//     const { pictures, error, status } = this.state;
//     return (
//       <>
//         <Searchbar handleQuerySubmit={this.handleQuerySubmit} />
//         {/* <ImageGallery />
//         <ImageGalleryItem />
//         <Loader />
//         <Button />
//         <Modal /> */}
//         <ToastContainer autoClose={3000} />
//       </>
//     );
//   }
// }
