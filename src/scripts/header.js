import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Header({ scrollContainer }) {
  const headerRef = useRef(null);
  const scrollListenerRef = useRef(null);
  const hamburgerRef = useRef(null); 

  useEffect(() => {
    const hamburger = hamburgerRef.current;
    const header = headerRef.current;

    if (!hamburger || !header) return;

    const handleToggle = () => {
      hamburger.classList.toggle('is-active');
      header.classList.toggle('is-active');
    };

    hamburger.addEventListener('click', handleToggle);
    const links = header.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', handleToggle);
    });

    return () => {
      hamburger.removeEventListener('click', handleToggle);
      links.forEach(link => {
        link.removeEventListener('click', handleToggle);
      });
    };
  }, []);


  useEffect(() => {
    const header = headerRef.current;
    const container = scrollContainer?.current;

    if (!header || !container) return;
    if (window.innerWidth < 992) {
      return;
    }

    const pełnaWysokość = header.scrollHeight;
    header.style.maxHeight = `${pełnaWysokość}px`;

    let lastScrollTop = container.scrollTop;

    const onScroll = () => {
      const currentScrollTop = container.scrollTop;
      if (currentScrollTop > lastScrollTop) {
        header.style.maxHeight = '0';
        header.style.opacity = '0';
      } else if (currentScrollTop < lastScrollTop) {
        header.style.maxHeight = `${pełnaWysokość}px`;
        header.style.opacity = '1';
      }

      lastScrollTop = currentScrollTop;
    };

    container.addEventListener('scroll', onScroll);
    scrollListenerRef.current = onScroll;

    return () => {
      container.removeEventListener('scroll', onScroll);
    };
  }, [scrollContainer?.current]);

  return (
    <header className="App-header">
      <div className="hamburger" ref={hamburgerRef}>☰</div>
      <div className="header" ref={headerRef}> 
        <Link to="/">Projekty</Link>
        <Link to="/o-mnie">o mnie</Link>
        <Link to="/cv">CV</Link>
        <Link to="/kontakt" className="text-header">Kontakt</Link>
      </div>
    </header>
  );
}
