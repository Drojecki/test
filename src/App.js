import { useEffect, useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Projekty from './components/Projekty';
import OMnie from './components/OMnie';
import CV from './components/CV';
import Kontakt from './components/Kontakt';
import Header from './scripts/header';
import './App.css';

function AppContent() {
  const projektyRef = useRef(null);
  const location = useLocation();

  const [loading, setLoading] = useState(true);
  const hasLoadedOnce = useRef(false);

  useEffect(() => {
    if (!hasLoadedOnce.current) {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
        hasLoadedOnce.current = true;
      }, 1500);
      return () => {
        clearTimeout(timer);
      };
    } else {
      setLoading(false);
    }
  }, [location.pathname]);
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/Async.css';
    link.media = 'print';
    link.onload = () => {
      link.media = 'all';
    };
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);



  return (
    <>
      <div
        id="preloader"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: '#fff',
          display: 'flex',
          justifyContent: 'center',
          transition: 'opacity 1s ease',
          alignItems: 'center',
          zIndex: 9999,
          opacity: loading ? 1 : 0,
          pointerEvents: loading ? '' : 'none',
        }}
      >
        <img src="/LOGO_3.png" alt="Ładowanie..." className="preloader-logo" />
      </div>

      <div className={`App ${loading ? 'blurred' : ''}`} style={{ filter: loading ? 'blur(2px)' : 'none' }}>
        <main className={loading ? '' : 'visible'}>
          <Header scrollContainer={projektyRef} />
          <Routes>
            <Route path="/" element={<Projekty projektyRef={projektyRef}  />} />
            <Route path="/o-mnie" element={<OMnie />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/kontakt" element={<Kontakt />} />
          </Routes>
        </main>
      </div>
    </>
  );
}


export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
