import React from 'react';
// import axios from 'axios';
// import { ToastContainer } from 'react-toastify';
import Searchbar from './Searchbar';
// import ImageGallery from './ImageGallery';
// import ImageGalleryItem from './ImageGalleryItem';
// import Loader from './Loader';
// import Button from './Button';
// import Modal from './Modal';
// import fetchPicture from 'services/api';

export class App extends React.Component {
  state = {
    pictures: [],
    // query: '',
    // page: 1,
    // perPage: 12,
    // showModal: false,
    // status: 'idle',
  };

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
