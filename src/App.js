import React, { useEffect } from 'react';
import './App.css';
import header from './scripts/header.js';

function App() {

  useEffect(() => {
    header();
  }, []);

  return (
    <div className="App">
      <header  className="App-header">
        <div id="test" className="header">
          <a href="#">Projekty</a>
          <a href="#">o mnie</a>
          <a href="#">CV</a>
          <a href="#" className="text-header">Kontakt</a>
        </div>
      </header>
      <section className="hejkanaklejka">
        <h1 className="duzynapis">PORTFOLIO</h1>
        <p className="imie">Emilia Czopik</p>
        <p className="textpod">Projektuję przestrzenie, które zostają na dłużej.</p>
        <p className="textpod">Zarówno wewnątrz, jak i na zewnątrz.</p>
        <p className="textpod margin">Architektura • Wnętrza • Przestrzeń publiczna</p>
      </section>
      <section className="projekty">
       <div className="didplayflex">
          <div className="col-12 col-lg-6 projekt">
            <p className="projekt-text">Projekt test</p>
            <div className="img-projekt"></div>
          </div>
          <div className="col-12 col-lg-6 projekt">
            <p className="projekt-text">Projekt test</p>
            <div className="img-projekt"></div>
          </div>
      </div>
      <div className="didplayflex">
          <div className="col-12 col-lg-6 projekt">
            <p className="projekt-text">Projekt test</p>
            <div className="img-projekt"></div>
          </div>
          <div className="col-12 col-lg-6 projekt">
            <p className="projekt-text">Projekt test</p>
            <div className="img-projekt"></div>
          </div>
      </div>
      </section>
    </div>
  );
}

export default App;
