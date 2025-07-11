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
            <div className='cvBlock'>
              <div className='col-4'>
                <div className='width-cv'>
                  <p className='cv-text'>curriculum vitae</p>
                  <p className='cv-p'>EMILIA CZOPIK</p>
                  <div className='kontaktitel'>
                    <img className='imgkontakcik' src='./cvZdjecie.jpg'/>
                    <div className='kontakcik'>
                      {/* <p className='kontakciktralala data-ur'>Data urodzenia: 13.09.2002 r.</p> */}
                      <p className='kontakciktralala a4321 hahxd'>KONTAKT</p>
                        <p className='kontakciktralala a123'>+48 799 099 321</p>
                        <p className='kontakciktralala a123'>emilia.czopik@op.pl</p>
                        <p className='kontakciktralala a123'>Poznań</p>
                    </div>
                  </div>
                  <p >O MNIE</p>
                  <p className='kontakciktralala a4321'>Jestem studentką architektury z zamiłowaniem do tworzenia innowacyjnych, funkcjonalnych i estetycznych przestrzeni – od szczegółowej analizy kontekstu, przez opracowanie koncepcji, aż po dopracowanie detali wykończeniowych. Łączę pasję do sztuki, technologii i zrównoważonego rozwoju, skutecznie komunikując swoje pomysły zarówno w wizualizacjach 3D, jak i podczas pracy zespołowej. Zaangażowanie w interdyscyplinarne inicjatywy; badania nad ochroną dziedzictwa i wystawy łączące architekturę z bioniką, stale rozwijają moje umiejętności i kreatywność.</p>
                </div>
              </div>
              <div className='col-8'>
                <div className='flex coslol'>
                  <div className='row-szary-1'>
                    <div className='row-1'>
                      <p className='row-1-p'>Doświadczenie związane z projektowaniem</p>   
                    </div>
                    <ol>
                        <li>Projektowanie mieszkań</li>
                        <li>Projektowanie zabudowy jednorodzinnej</li>
                        <li>Projektowanie zabudowy wielorodzinnej</li>
                        <li>Projektowanie usługowe</li>
                        <li>Projektowanie wystaw</li>
                        <li>Projektowanie urbanistyczne</li>
                        <li>Projektowanie obiektów rekreacyjnych</li>
                        <li>Projektowanie zieleni i krajobrazu</li>
                      </ol>
                  </div> 
                  <div className='row-szary-2'>
                    <div className='row-1'>
                      <p className='row-1-p'>Kompetencje cyfrowe</p>   
                    </div>
                    <div className='flex'>
                      <ol>
                        <li>AutoCAD</li>
                        <li>ArchiCAD</li>
                        <li>Revit</li>
                        <li>Gimp</li>
                        <li>SketchUP</li>
                        <li>Lumion</li>
                      </ol>
                      <ol>
                        <li>D5 Render</li>
                        <li>Twinmotion</li>
                        <li>Procreate</li>
                        <li>pakiet Microsoft Office</li>
                        <li>Canva</li>
                        <li>Dialux</li>
                      </ol>
                    </div>
                  </div> 
                  <div className='row-szary-3'>
                    <div className='row-1'>
                      <p className='row-1-p'>Kompetencje cyfrowe</p>   
                    </div>
                      <ol>
                        <li>Certyfikat szkolenia “Podstawy modelowania w programie Autodesk Revit”</li>
                        <li>Język angielski - poziom rozszerzony</li>
                        <li>Prawo jazdy kat B.</li>
                      </ol>
                  </div> 
                </div>
                <div className='flex'>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
    
  );
  ;
}