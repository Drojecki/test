import { useEffect, useState } from 'react';
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgZoom from 'lightgallery/plugins/zoom';
import "../assets/css/oMnie.css";

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

export default function OMnie() {
  const [show, setShow] = useState(false);
  const [dimensions, setDimensions] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.classList.add("omnieBG");
    return () => {
      document.body.classList.remove("omnieBG");
    };
  }, []);
  useEffect(() => {
    document.body.classList.add("no-bg");
    return () => {
      document.body.classList.remove("no-bg");
    };
  }, []);

  const images = [
    '../../zdjecia/1.jpg',
    '../../zdjecia/2.jpg',
    '../../zdjecia/3.jpg',
    '../../zdjecia/4.jpg',
    '../../zdjecia/5.jpg',
    '../../zdjecia/6.jpg',
    '../../zdjecia/7.jpg',
    '../../zdjecia/8.jpg',
    '../../zdjecia/9.jpg',
    '../../zdjecia/10.png',
    '../../zdjecia/11.jpg',
    '../../zdjecia/12.jpg',
    '../../zdjecia/13.png',
    '../../zdjecia/14.png',
    '../../zdjecia/15.jpg',
    '../../zdjecia/16.png',
    '../../zdjecia/17.jpg',
    '../../zdjecia/18.png',
    '../../zdjecia/19.jpg',
  ];

  const getSrcSet = (src) => {
    const base = src.replace(/\.(png|jpg|jpeg|webp)$/, '');
    return `
      ${base}-400.webp 400w,
      ${base}-800.webp 800w,
      ${base}-1200.webp 1200w,
      ${base}-1600.webp 1600w,
      ${base}-1920.webp 1920w
    `;
  };

  const getFallback = (src) => {
    return src.replace(/\.(png|jpg|jpeg|webp)$/, '-400.webp');
  };

  const handleLoad = (e, index) => {
    const { naturalWidth, naturalHeight } = e.target;
    let width = 400, height = 400;

    if (naturalWidth === naturalHeight) {
      width = height = 1920;
    } else if (naturalWidth > naturalHeight) {
      width = 1920;
      height = 1080;
    } else {
      width = 1080;
      height = 1920;
    }

    setDimensions((prev) => ({
      ...prev,
      [index]: { width, height },
    }));
  };

  return (
    <section className={`hejkanaklejka ${show ? 'fade-in' : 'hidden'}`}>
      <div className="col-12">
        <div className="testest nomargin lolowa">
          <div className='margin50'>
            <h1 className="duzynapis">O Mnie</h1>
            <p className="textpod margin">Nazywam się Emilia Czopik. Pochodzę z Jarocina, a od kilku lat mieszkam i studiuję
                architekturę na Wydziale Architektury Politechniki Poznańskiej w Poznaniu. W rodzinnym
                mieście zaangażowałam się w liczne inicjatywy – wykonałam mural w szkolnej sali oraz
                zaprojektowałam i zbudowałam konstrukcję-ramę wejściową na festiwal.
                Moje portfolio obejmuje realizacje architektoniczne, serie grafik warsztatowych (sztychów),
                malarskie szkice studium draperii oraz kolaże. Poniżej prezentuję wybrane plansze, rzeźby i
                szkice, które ukazują przekrój moich zainteresowań i eksperymentów twórczych.
            </p>
          </div>
          <LightGallery
            speed={500}
            plugins={[lgZoom]}
            animateThumb={true}
            thumbWidth={100}
            thumbHeight="80"
            mode="lg-fade"
          >
            {images.map((src, index) => {
              const fallbackSrc = getFallback(src);
              const srcSet = getSrcSet(src);
              const size = dimensions[index] || { width: 400, height: 400 };

              return (
                <a className='Axd' href={src} key={index}>
                  <LazyLoadImage
                    className="testzdjecia"
                    alt={`Zdjęcie ${index + 1}`}
                    data-src={fallbackSrc}
                    srcSet={srcSet}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    effect="opacity"
                    width={size.width}
                    height={size.height}
                    onLoad={(e) => handleLoad(e, index)}
                    onError={(e) => (e.target.style.display = 'none')}
                  />
                </a>
              );
            })}
          </LightGallery>
        </div>
      </div>
    </section>
  );
}
