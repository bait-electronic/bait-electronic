import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./BECarousel.scss";

function BECarousel({ imagesList, classname = "" }) {
  // original: LOGO,
  // thumbnail: LOGO,
  // renderItem: () => (<></>)

  return (
    <div className={"be-carousel " + classname}>
      <ImageGallery
        items={imagesList}
        showFullscreenButton={false}
        isRTL={true}
        showBullets={true}
        showIndex={false}
        showThumbnails={true}
        lazyLoad={true}
        showNav={true}
        showPlayButton={false}
        autoPlay={true}
        slideInterval={5000}
        preventDefaultTouchmoveEvent={true}
        autoSize={true}
      />
    </div>
  );
}

export default BECarousel;
