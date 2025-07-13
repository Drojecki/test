import { useEffect, useState } from 'react';
import "../assets/css/CV.css"
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
        <a className='download' href="/Emilia_czopik.pdf" download>Pobierz PDF <img className='downloadIcon' src='/download.png'/></a>
        <div className="col-12">
          <div className="testest CVpage">
            <div className='cvBlock'>
              <div className='col-4'>
                <div className='width-cv'>
                  <p className='cv-text'>curriculum vitae</p>
                  <p className='cv-p'>EMILIA CZOPIK</p>
                  <div className='kontaktitel'>
                    <img className='imgkontakcik' src='/cvZdjecie.jpg'/>
                    <div className='kontakcik'>
                      <p className='kontakciktralala a4321 hahxd'>KONTAKT</p>
                        <a href="tel:+48 799 099 321" className='kontakciktralala a123'><img src='/CV/phone-call.png' className='ikonki'/>+48 799 099 321</a>
                        <a href="mailto:emilia.czopik@op.pl" className='kontakciktralala a123'><img src='/CV/email.png' className='ikonki'/>emilia.czopik@op.pl</a>
                        <p className='kontakciktralala a123'><img src='/CV/location.png' className='ikonki'/>Poznań</p>
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
                    <div className='flex justifybetween'>
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
                <div className='flex coslol'>
                  <div className='row-szary-4'>
                    <div className='row-1'>
                      <p className='row-1-p'>EDUKACJA</p>   
                    </div>
                    <p className='edukacja zlikniem'>10.2022 - obecnie</p>
                    <p className='edukacja'>Politechnika Poznańska, Wydział Architektury</p>
                    <p className='edukacja'>Kierunek: Architektura, Rok IV</p>
                    <p className='edukacja zlikniem'>09.2018 - 09.2021</p>
                    <p className='edukacja'>Liceum Ogólnokształcące im. Tadeusza Kościuszki w Jarocinie</p>
                    <p className='edukacja'>Profil: matematyczno-fizyczny</p>
                    <p className='edukacja zlikniem' >09.2015 - 05.2021</p>
                    <p className='edukacja'>Niepubliczne Gimnazjum im. Tadeusza Kościuszki w Jarocinie</p>
                  </div> 
                  <div className='row-szary-5'>
                    <div className='row-1'>
                      <p className='row-1-p'>ZAINTERESOWANIA</p>   
                    </div>
                    <div className='flex'>
                      <ol>
                        <li>Członek Koła “Illumination” - projektowanie mody inspirowanej architekturą, łączące formy przestrzenne z odzieżą (udział jako projektantka w wystawie “Architektura z bioniką” z autorską pracą opartą na zasadach biomimetyki i designu).</li>
                        <li>Członek Koła Naukowego Historycznego – prowadzenie badań nad ochroną dziedzictwa dawnego klasztoru Bożogrobców w Gnieźnie</li>
                        <li>Członek IAESTE Poland – aktywne wspieranie międzynarodowych praktyk technicznych i wymiany doświadczeń dla studentów architektury.</li>
                      </ol>
                    </div>
                  </div>
                </div>
                <div className='blok'>
                  testsetses
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