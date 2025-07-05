import ProjectElement from '../projektElement/projektElement.js';
import { useEffect, useRef, useState } from 'react';
import LazyThumbImage from '../components/LazyThumbImage';

export default function Projekty({ projektyRef , onImagesLoaded }) {
  const [modalId, setModalId] = useState(null);
  const [hasScrolledProjekty, setHasScrolledProjekty] = useState(false);
  const [hasScrolledModal, setHasScrolledModal] = useState(false);
  const [isOverflowingModal, setIsOverflowingModal] = useState(false);
  const [loadedImages, setLoadedImages] = useState(0);
  const totalImages = 10;
  const modalContentRef = useRef(null);
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
  }, [loadedImages, onImagesLoaded]);

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
  }, [modalId, loadedImages]);

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

  return (
    <>
      <section className="hejkanaklejka">
        <div className="col-12 col-lg-6">
          <div className="testest">
            <h1 className="duzynapis">PORTFOLIO</h1>
            <p className="imie">Emilia Czopik</p>
            <p className="textpod">Projektuję przestrzenie, które zostają na dłużej.</p>
            <p className="textpod">Zarówno wewnątrz, jak i na zewnątrz.</p>
            <p className="textpod margin">Architektura • Wnętrza • Przestrzeń publiczna</p>
          </div>
        </div>
      </section>

      <section className="projekty" ref={projektyRef} style={{ overflowY: 'auto', maxHeight: '80vh' }}>
          <img
            src="/arrow.png"
            alt="Scroll down"
            className="scroll-arrow"
            style={{ opacity: !hasScrolledProjekty  ? 1 : 0 }}
          />
        <div className="didplayflex">
          <ProjectElement id="1" name="Słubice Swimscape" onClick={setModalId} />
          <ProjectElement id="2" name="Brzegi Gniezna" onClick={setModalId} />
        </div>
        <div className="didplayflex">
          <ProjectElement id="3" name="Plac Berwińskiego" onClick={setModalId} />
          <ProjectElement id="4" name="Micro Living" onClick={setModalId} />
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
              <div className='divimgtest'>
                <LazyThumbImage
                  src={`/${modalId}/1.png`}
                  alt={`Projekt ${modalId} – obraz 1`}
                  onLoad={() => setLoadedImages(prev => prev + 1)}
                  onError={e => {
                    e.target.style.display = 'none';
                    setLoadedImages(prev => prev + 1);
                  }}
                />
              </div>
              {description && (
                <div className="modal-description">
                  {description.split('\n').map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))}
                </div>
              )}
            </div>
          )}

          {modalId && totalImages > 1 && (
            <div className="modal-thumbs">
              {[...Array(totalImages - 1)].map((_, i) => (
              <LazyThumbImage
                  key={i + 2}
                  src={`/${modalId}/${i + 2}.png`}
                  alt={`Projekt ${modalId} – obraz ${i + 2}`}
                  onLoad={() => setLoadedImages(prev => prev + 1)}
                  onError={e => {
                    e.target.style.display = 'none';
                    setLoadedImages(prev => prev + 1);
                  }}
                />
              ))}
            </div>
          )}
        </div>

        <button className="buttonX" onClick={() => setModalId(null)}>
          X
        </button>
      </div>
    </>
  );
}
