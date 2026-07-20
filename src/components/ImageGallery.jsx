import { useMemo, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function ImageGallery({
  images,
  alt,
  className = "",
  layout = "grid",
  showCaption = false,
  captions = [],
}) {
  const [index, setIndex] = useState(-1);
  const slides = useMemo(() => images.map((image) => ({ src: image.src })), [images]);

  if (!images.length) return null;

  return (
    <>
      <div className={`${layout === "masonry" ? "masonry-gallery" : "image-grid"} ${className}`}>
        {images.map((image, imageIndex) => (
          <button
            className="image-tile"
            key={image.path}
            type="button"
            aria-label={`${alt} ${imageIndex + 1}`}
            onClick={() => setIndex(imageIndex)}
          >
            <img
              src={image.src}
              alt={`${alt} ${imageIndex + 1}`}
              loading="lazy"
              decoding="async"
              style={{ aspectRatio: "auto" }}
            />
            {showCaption ? (
              <span className="image-caption">{captions[imageIndex % captions.length]}</span>
            ) : null}
          </button>
        ))}
      </div>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={slides}
      />
    </>
  );
}
