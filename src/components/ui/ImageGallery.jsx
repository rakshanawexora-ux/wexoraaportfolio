'use client';

import { useRef } from 'react';

/** The portfolio's only client component: click any image to enlarge it. */
export default function ImageGallery({ images, title, mobile = false }) {
  const dialogRef = useRef(null);
  const enlargedImageRef = useRef(null);

  function openImage(src, imageNumber) {
    enlargedImageRef.current.src = src;
    enlargedImageRef.current.alt = `${title} — image ${imageNumber}`;
    dialogRef.current.showModal();
  }

  function closeOnBackdrop(event) {
    if (event.target === dialogRef.current) {
      dialogRef.current.close();
    }
  }

  return (
    <>
      <div className={`gallery${mobile ? ' phone-gallery' : ''}`}>
        {images.map((src, index) => (
          <button
            key={src}
            onClick={() => openImage(src, index + 1)}
            aria-label={`Enlarge ${title} image ${index + 1}`}
          >
            <img
              src={src}
              alt={`${title} — original portfolio image ${index + 1}`}
              loading="lazy"
            />
            <span className="zoom" aria-hidden="true">
              ↗
            </span>
          </button>
        ))}
      </div>
      <dialog ref={dialogRef} onClick={closeOnBackdrop} aria-label={`${title} enlarged image`}>
        <button
          className="close"
          onClick={() => dialogRef.current.close()}
          aria-label="Close image"
        >
          ✕
        </button>
        <img ref={enlargedImageRef} alt="" />
      </dialog>
    </>
  );
}
