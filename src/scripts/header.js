

function header() {
    const header = document.getElementById('test');
    const projekt = document.getElementsByClassName('projekty')[0];
    let lastScrollTop = 0;
    let hoverMyszka = true;
    const pełnaWysokość = header.scrollHeight;
    const arrow = document.createElement('img');
    arrow.src = '/arrow.png';
    arrow.alt = 'Scrolluj w dół';
    arrow.classList.add('scroll-arrow');
    projekt.appendChild(arrow);

    header.style.maxHeight = `${pełnaWysokość}px`;

    projekt.addEventListener('scroll', () => {
        hoverMyszka = false;
        const currentScrollTop = projekt.scrollTop;

        if (currentScrollTop > lastScrollTop) {
            header.style.maxHeight = '0';
            header.style.opacity = '0';
        } else if (currentScrollTop < lastScrollTop) {
            header.style.maxHeight = `${pełnaWysokość}px`;
            header.style.opacity = '0.8';
        }

        lastScrollTop = currentScrollTop;

        if (!hoverMyszka && arrow.parentElement) {
            arrow.style.opacity = '0';
            setTimeout(() => {
                if (arrow.parentElement) {
                    arrow.remove();
                }
            }, 500);
        }
    });


    const links = header.querySelectorAll('a');
    const currentPath = window.location.pathname;

    links.forEach(link => {
        const linkPath = new URL(link.href).pathname;
        if (linkPath === currentPath) {
        link.classList.add('active');
        } else {
        link.classList.remove('active');
        }
    });
}

export default header;
