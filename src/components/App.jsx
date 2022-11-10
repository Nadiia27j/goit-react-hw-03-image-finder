import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { fetchPicture, needValues } from 'services/api';

import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Loader from './Loader';
import Button from './Button';
import Modal from './Modal';

export class App extends React.Component {
  state = {
    pictures: [],
    query: '',
    page: 1,
    error: null,
    isLoading: false,
    showModal: false,
    largeImageURL: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.query;
    const nextQuery = this.state.query;
    const prevPage = prevState.page;
    const page = this.state.page;

    if (prevQuery !== nextQuery || prevPage !== page) {
      this.renderGallery();
    }
  }

  renderGallery = async () => {
    const { query, page } = this.state;
    this.setState({ isLoading: true });

    try {
      const { hits, totalHits } = await fetchPicture(query, page);

      if (totalHits === 0) {
        toast.warn(
          'Sorry, there are no images matching your search query. Please try again.'
        );
      }
      const newPicture = needValues(hits);

      this.setState(({ pictures }) => ({
        pictures: [...pictures, ...newPicture],
        totalHits,
      }));
    } catch (error) {
      this.setState({ error });
      toast.error('Oops... Something went wrong');
    } finally {
      this.setState({ isLoading: false });
    }
  };

  onFormSubmit = query => {
    this.setState({ query, pictures: [], page: 1 });
  };

  onLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  openModal = largeImageURL => {
    this.toggleModal();
    this.setState({
      largeImageURL,
    });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { pictures, largeImageURL, isLoading, showModal, totalHits } =
      this.state;

    const allPictures = pictures.length === totalHits;

    return (
      <>
        <Searchbar onSubmit={this.onFormSubmit} />
        <ImageGallery pictures={pictures} onOpenModal={this.openModal} />
        {isLoading && <Loader />}

        {pictures.length !== 0 && !isLoading && !allPictures && (
          <Button onClick={this.onLoadMore} />
        )}
        {showModal && (
          <Modal onModalClick={this.toggleModal} largeImage={largeImageURL} />
        )}
        <ToastContainer autoClose={3000} />
      </>
    );
  }
}
