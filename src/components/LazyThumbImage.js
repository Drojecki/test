import { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

export default function LazyThumbImage({ src, alt, onLoad, onError, className = '', forceLargest = false }) {
  const [dimensions, setDimensions] = useState({ width: 400, height: 400 });
  
  const baseSrc = src.replace(/\.(png|jpg|jpeg|webp)$/, '');

  const sizes = forceLargest ? '1920px' : '(max-width: 768px) 100vw, 50vw';

  const srcSet = `
    ${baseSrc}-400.webp 400w,
    ${baseSrc}-800.webp 800w,
    ${baseSrc}-1200.webp 1200w,
    ${baseSrc}-1600.webp 1600w,
    ${baseSrc}-1920.webp 1920w
  `;

  const fallbackSrc = forceLargest
    ? `${baseSrc}-1920.webp`
    : `${baseSrc}-400.webp`;

  const handleLoad = (e) => {
    const naturalWidth = e.target.naturalWidth;
    const naturalHeight = e.target.naturalHeight;

    if (naturalWidth === naturalHeight) {
      setDimensions({ width: 1920, height: 1920 });
    } else if (naturalWidth > naturalHeight) {
      setDimensions({ width: 1920, height: 1080 });
    } else {
      setDimensions({ width: 1080, height: 1920 });
    }
    if (onLoad) onLoad(e);
  };

  return (
    <LazyLoadImage
      data-src={fallbackSrc}
      alt={alt}
      effect="opacity"
      className={`thumb-image ${className}`}
      srcSet={srcSet}
      sizes={sizes}
      width={dimensions.width}
      height={dimensions.height}
      onLoad={handleLoad}
      onError={e => {
        onError?.(e);
        e.target.style.display = 'none';
      }}
    />
  );
}
