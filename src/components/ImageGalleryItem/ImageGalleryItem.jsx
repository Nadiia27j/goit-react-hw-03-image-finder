import PropTypes from 'prop-types';

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
  tag: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};
