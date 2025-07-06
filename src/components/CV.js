import { useEffect, useState } from 'react';

export default function CV() {

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
          <h1 className="duzynapis">CV</h1>
          <p className="textpod margin">Moje CV</p>
        </div>
      </div>
    </section>
  );
  ;
}