import { useEffect, useState } from 'react';

export default function CV() {

  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.classList.add("no-bg");
    return () => {
      document.body.classList.remove("no-bg");
    };
  }, []);


  return (
    <>
      <section className={`hejkanaklejka cvmargin ${show ? 'fade-in' : 'hidden'}`}>
        <a className='download' href="/Emilia_czopik.pdf" download>Pobierz <img className='downloadIcon' src='/download.png'/></a>
        <div className="col-12">
          <div className="testest CVpage">
            <img className='imgCV' src="/Emilia_czopik.png"/>
          </div>
        </div>
      </section>
    </>
    
  );
  ;
}