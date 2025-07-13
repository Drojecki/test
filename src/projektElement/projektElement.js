import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

function ProjectElement({ id, name = "projekt", onClick, onLoad, onError }) {
  const sizes = '(max-width: 768px) 100vw, 50vw';

  const getImageSet = (pathBase) => ({
    src: `${pathBase}-800.webp`,
    srcSet: `
      ${pathBase}-400.webp 400w,
      ${pathBase}-800.webp 800w,
      ${pathBase}-1200.webp 1200w
    `
  });

  const image1 = getImageSet(`/${id}/1`);
  const image2 = getImageSet(`/${id}/2`);

  return (
    <div id={id} className="col-12 col-lg-6 projekt" onClick={() => onClick(id)}>
      <div className="projekt-text">
        <p>{name}</p>
      </div>
      <div className="img-projekt">
        <div className="img-layer layer-1">
          <LazyLoadImage
            src={image1.src}
            srcSet={image1.srcSet}
            sizes={sizes}
            alt="projekt"
            effect="opacity"
            className="imgObject"
            onLoad={onLoad}
            onError={e => {
              onError?.(e);
              e.target.style.display = 'none';
            }}
          />
        </div>
        <div className="img-layer layer-2">
          <LazyLoadImage
            src={image2.src}
            srcSet={image2.srcSet}
            sizes={sizes}
            alt="projekt"
            effect="opacity"
            className="imgObject"
            onLoad={onLoad}
            onError={e => {
              onError?.(e);
              e.target.style.display = 'none';
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectElement;
