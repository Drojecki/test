import ProjectElement from '../projektElement/projektElement.js';
import { useEffect, useRef, useState } from 'react';
import LazyThumbImage from '../components/LazyThumbImage';
import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';

export default function Projekty({ projektyRef , onImagesLoaded }) {
  const [modalId, setModalId] = useState(null);
  const [hasScrolledProjekty, setHasScrolledProjekty] = useState(false);
  const [hasScrolledModal, setHasScrolledModal] = useState(false);
  const [isOverflowingModal, setIsOverflowingModal] = useState(false);
  const [loadedImages, setLoadedImages] = useState(0);
  const modalContentRef = useRef(null);

  const projectImagesCount = {
    "1": 13,
    "2": 6,
    "3": 10,
    "4": 6,
    "5": 11,
    "6": 15,
    "7": 4,
    "8": 7,
    "9": 5,
    "10": 0
  };

  const totalImages = modalId ? projectImagesCount[modalId] || 0 : 0;

  const projectNames = {
    "1": "Słubice Swimscape",
    "2": "Brzegi Gniezna",
    "3": "Plac Berwińskiego",
    "4": "Micro Living",
    "5": "Skwer Miejski",
    "6": "Architektura Piwa",
    "7": "Nowy Rytm Jarocina",
    "8": "Dom z widokiem",
    "9": "Wolność i Stal",
    "10": "Krąg Dziecka"
  };

  const [description, setDescription] = useState('');
  useEffect(() => {
    if (!modalId) return;
    fetch(`/${modalId}/1.txt`)
      .then(res => {
        if (!res.ok) throw new Error('Brak pliku');
        return res.text();
      })
      .then(txt => setDescription(txt))
      .catch(() => setDescription(''));
  }, [modalId]);

  useEffect(() => {
    if (loadedImages === totalImages) {
      if (onImagesLoaded) onImagesLoaded();
    }
  }, [loadedImages, onImagesLoaded, totalImages]);

  useEffect(() => {
    const modalContent = modalContentRef.current;
    if (!modalContent) return;

    setHasScrolledModal(false);
    setIsOverflowingModal(false);

    const handleScroll = () => setHasScrolledModal(true);
    modalContent.addEventListener('scroll', handleScroll);

    if (loadedImages === totalImages) {
      setIsOverflowingModal(modalContent.scrollHeight > modalContent.clientHeight);
    }

    return () => modalContent.removeEventListener('scroll', handleScroll);
  }, [modalId, loadedImages, totalImages]);

  useEffect(() => {
    if (modalId) {
      setHasScrolledModal(false);
      setIsOverflowingModal(false);
      setLoadedImages(0);
    }
  }, [modalId]);

  useEffect(() => {
    const container = projektyRef.current;
    if (!container) return;
    const onScroll = () => {
      if (!hasScrolledProjekty && container.scrollTop > 0) {
        setHasScrolledProjekty(true);
      }
    };

    container.addEventListener('scroll', onScroll);
    return () => container.removeEventListener('scroll', onScroll);
  }, [hasScrolledProjekty, projektyRef]);

  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <section className={`hejkanaklejka ${show ? 'fade-in' : 'hidden'}`}>
        <div className="col-12 col-lg-6">
          <div className="testest nomargin">
            <div className='margin50'>
              <h1 className="duzynapis">PORTFOLIO</h1>
              <p className="imie">Emilia Czopik</p>
              <p className="textpod">Projektuję przestrzenie, które zostają na dłużej.</p>
              <p className="textpod">Zarówno wewnątrz, jak i na zewnątrz.</p>
              <p className="textpod margin">Architektura • Wnętrza • Przestrzeń publiczna</p>
            </div>
          </div>
        </div>
      </section>

      <section className={`projekty ${show ? 'fade-in' : 'hidden'}`} ref={projektyRef}>
        <img
          src="/arrow.png"
          alt="Scroll down"
          className="scroll-arrow"
          style={{ opacity: !hasScrolledProjekty ? 1 : 0 }}
        />
        <div className="didplayflex">
          <ProjectElement id="1" name="Słubice Swimscape" onClick={setModalId} />
          <ProjectElement id="2" name="Brzegi Gniezna" onClick={setModalId} />
        </div>
        <div className="didplayflex">
          <ProjectElement id="3" name="Plac Berwińskiego" onClick={setModalId} />
          <ProjectElement id="4" name="Tarasy nad Wierzbakiem" onClick={setModalId} />
        </div>
        <div className="didplayflex">
          <ProjectElement id="5" name="Skwer Miejski" onClick={setModalId} />
          <ProjectElement id="6" name="Architektura Piwa" onClick={setModalId} />
        </div>
        <div className="didplayflex">
          <ProjectElement id="7" name="Nowy Rytm Jarocina" onClick={setModalId} />
          <ProjectElement id="8" name="Dom z widokiem" onClick={setModalId} />
        </div>
        <div className="didplayflex">
          <ProjectElement id="9" name="Wolność i Stal" onClick={setModalId} />
          <ProjectElement id="10" name="Krąg Dziecka" onClick={setModalId} />
        </div>
      </section>

      <div
        className={`modal-overlay ${modalId ? 'show' : ''}`}
        onClick={() => setModalId(null)}
        style={{ pointerEvents: modalId ? 'auto' : 'none' }}
      >
        <div
          className="modal-content"
          ref={modalContentRef}
          onClick={e => e.stopPropagation()}
          style={{ overflowY: 'auto'}}
        >
          <img
            src="/arrow.png"
            alt="Scroll down"
            className="arrow-icon"
            style={{ opacity: !hasScrolledModal && isOverflowingModal ? 1 : 0 }}
          />

          {modalId && (
            <div className="modal-hero">
              <h1 className='projektHeader'>{projectNames[modalId]}</h1>
              <LightGallery
                plugins={[lgZoom]}
                speed={500}
                selector=".lightgallery-item"
              >
                <div className='divimgtest'>
                  <LazyThumbImage
                    src={`/${modalId}/1.png`}
                    alt={`Projekt ${modalId} – obraz 1`}
                    className={`first-thumb lightgallery-item`}
                    onLoad={() => setLoadedImages(prev => prev + 1)}
                    onError={e => {
                      e.target.style.display = 'none';
                      setLoadedImages(prev => prev + 1);
                    }}
                    forceLargest={true}
                  />
                </div>
                {description && (
                  <div className="modal-description">
                    {description.split('\n').map((line, idx) => (
                      <p key={idx}>{line}</p>
                    ))}
                  </div>
                )}

                {totalImages > 1 && (
                  <div className="modal-thumbs">
                    {[...Array(totalImages - 1)].map((_, i) => (
                      <LazyThumbImage
                        key={i + 2}
                        src={`/${modalId}/${i + 2}.png`}
                        alt={`Projekt ${modalId} – obraz ${i + 2}`}
                        className="lightgallery-item"
                        onLoad={() => setLoadedImages(prev => prev + 1)}
                        onError={e => {
                          e.target.style.display = 'none';
                          setLoadedImages(prev => prev + 1);
                        }}
                      />
                    ))}
                  </div>
                )}
              </LightGallery>
            </div>
          )}
        </div>

        <button className="buttonX" onClick={() => setModalId(null)}>
          X
        </button>
      </div>
    </div>
  );
}
