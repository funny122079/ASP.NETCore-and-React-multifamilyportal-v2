import React from "react";
import Lightbox from "react-18-image-lightbox";
import 'react-18-image-lightbox/style.css';


interface dataType {
  images: any;
  setIsOpen: any;
  photoIndex: any;
  setPhotoIndex: any;
}

const ImagePopup = ({ images, setIsOpen, photoIndex, setPhotoIndex }: dataType) => {
  return (
    <React.Fragment>
      <Lightbox
        mainSrc={images[photoIndex].src} // Assuming that `src` is the property containing the image URL
        nextSrc={images[(photoIndex + 1) % images.length].src}
        prevSrc={images[(photoIndex + images.length - 1) % images.length].src}
        onCloseRequest={() => setIsOpen(false)}
        onMovePrevRequest={() =>
          setPhotoIndex((photoIndex + images.length - 1) % images.length)
        }
        onMoveNextRequest={() =>
          setPhotoIndex((photoIndex + 1) % images.length)
        }
      />
    </React.Fragment>
  );
};

export default ImagePopup;
