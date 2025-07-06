import { useEffect, useState } from 'react';


export default function OMnie() {

  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={`hejkanaklejka ${show ? 'fade-in' : 'hidden'}`}>
      <div className="col-12 col-lg-6">
        <div className="testest">
          <h1 className="duzynapis">O Mnie</h1>
          <p className="textpod margin">Informacje o Tobie.</p>
        </div>
      </div>
    </section>
  );
}