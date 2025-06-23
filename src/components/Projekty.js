import ProjectElement from '../projektElement/projektElement.js';
import { useEffect, useRef, useState } from 'react';

export default function Projekty({ projektyRef , onImagesLoaded }) {
  const [modalId, setModalId] = useState(null);
  const [hasScrolledProjekty, setHasScrolledProjekty] = useState(false);
  const [hasScrolledModal, setHasScrolledModal] = useState(false);
  const [isOverflowingModal, setIsOverflowingModal] = useState(false);
  const [loadedImages, setLoadedImages] = useState(0);
  const totalImages = 10;
  const modalContentRef = useRef(null);

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
          <ProjectElement id="1" name="test" onClick={setModalId} />
          <ProjectElement id="2" name="test2" onClick={setModalId} />
        </div>
        <div className="didplayflex">
          <ProjectElement id="3" name="test3" onClick={setModalId} />
          <ProjectElement id="4" name="test4" onClick={setModalId} />
        </div>
        <div className="didplayflex">
          <ProjectElement id="5" onClick={setModalId} />
          <ProjectElement id="6" onClick={setModalId} />
        </div>
        <div className="didplayflex">
          <ProjectElement id="7" onClick={setModalId} />
          <ProjectElement id="8" onClick={setModalId} />
        </div>
        <div className="didplayflex">
          <ProjectElement id="9" onClick={setModalId} />
          <ProjectElement id="10" onClick={setModalId} />
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
          onClick={(e) => e.stopPropagation()}
          style={{ overflowY: 'auto', maxHeight: '90vh' }}
        >
          <img
            src="/arrow.png"
            alt="Scroll down"
            className="arrow-icon"
            style={{ opacity: !hasScrolledModal && isOverflowingModal ? 1 : 0 }}
          />
          {modalId &&
            [...Array(totalImages)].map((_, i) => (
              <img
                key={i}
                src={`/${modalId}/${i + 1}.jpg`}
                alt={`Projekt ${modalId} - obraz ${i + 1}`}
                onLoad={() => setLoadedImages((prev) => prev + 1)}
                onError={(e) => {
                  e.target.style.display = 'none';
                  setLoadedImages((prev) => prev + 1);
                }}
              />
            ))}
        </div>
        <button className="buttonX" onClick={() => setModalId(null)}> X </button>
      </div>
    </>
  );
}
