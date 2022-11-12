import PropTypes from 'prop-types';
import { ImageGalleryItemCard, ImageGalleryItemImage} from './imageGalleryItem.styled';

export default function ImageGalleryItem({ url, openModal, largeImageURL }) {
  return (
    <ImageGalleryItemCard>
      <ImageGalleryItemImage
        src={url}
        onClick={() => openModal(largeImageURL)}
      />
    </ImageGalleryItemCard>
  );
}

ImageGalleryItem.propTypes = {
  url: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};
