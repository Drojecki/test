import { useEffect, useRef, useState } from 'react';

export default function LazyThumbImage({ src, alt, onLoad, onError }) {
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (imgRef.current) observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <img
      ref={imgRef}
      src={shouldLoad ? src : undefined}
      alt={alt}
      loading="lazy"
      className={`thumb-image ${isLoaded ? 'visible' : ''}`}
      onLoad={(e) => {
        setIsLoaded(true);
        onLoad && onLoad(e);
      }}
      onError={(e) => {
        onError && onError(e);
        setIsLoaded(true);
      }}
    />
  );
}
