import { useEffect, useState } from 'react';

export default function Kontakt() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);
  

  return (
    <section className={`ha ${show ? 'fade-in' : 'hidden'}`}>
      <div className="col-12">
        <div className="testest uj">
           <div className='margin-auto'>
            <div className='hulajka'>
              <h1 className="duzynapis ys">Kontakt</h1>
              <div className='kontakcik niee'>
                  <a href="tel:+48 799 099 321" className='kontakciktralala nowe'><img src='/CV/phone-call.png' className='ikonki1'/>+48 799 099 321</a>
                  <a href="mailto:emilia.czopik@op.pl" className='kontakciktralala nowe'><img src='/CV/email.png' className='ikonki1'/>emilia.czopik@op.pl</a>
                  <p className='kontakciktralala nowe'><img src='/CV/location.png' className='ikonki1'/>Poznań</p>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </section>
  );
}