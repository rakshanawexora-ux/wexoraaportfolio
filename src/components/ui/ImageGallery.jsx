'use client';

import { useRef } from 'react';
import ArrowIcon from './ArrowIcon';

/** Open original screenshots in a keyboard-accessible image viewer. */
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
              <ArrowIcon />
            </span>
          </button>
        ))}
      </div>
      <dialog
        ref={dialogRef}
        onClick={closeOnBackdrop}
        aria-label={`${title} enlarged image`}
        data-lenis-prevent=""
      >
        <button
          className="close"
          onClick={() => dialogRef.current.close()}
          aria-label="Close image"
        >
          <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <path d="m6 6 12 12M6 18 18 6" />
          </svg>
        </button>
        <img ref={enlargedImageRef} alt="" />
      </dialog>
    </>
  );
}
