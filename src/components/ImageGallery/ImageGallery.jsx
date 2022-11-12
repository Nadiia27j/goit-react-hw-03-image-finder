import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem';
import { ImageGalleryList }from './ImageGallery.styled';

export default function ImageGallery({ pictures, onOpenModal }) {
  <ImageGalleryList>
    {pictures.map(({ id, webformatURL, largeImageURL }) => (
      <ImageGalleryItem>
        key={id}
        url={webformatURL}
        largeImageURL={largeImageURL}
        openModal={onOpenModal}
      </ImageGalleryItem>
    ))}
  </ImageGalleryList>;
}

ImageGallery.propTypes = {
  pictures: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ).isRequired,
  onOpenModal: PropTypes.func.isRequired,
};
