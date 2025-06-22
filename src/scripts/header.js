function header() {
    const header = document.getElementById('test');
    const projekt = document.getElementsByClassName('projekty')[0];
    let lastScrollTop = 0;

    const pełnaWysokość = header.scrollHeight;
    header.style.maxHeight = `${pełnaWysokość}px`;

    projekt.addEventListener('scroll', () => {
        const currentScrollTop = projekt.scrollTop;

        if (currentScrollTop > lastScrollTop) {
            header.style.maxHeight = '0';
            header.style.opacity = '0';
        } else if (currentScrollTop < lastScrollTop) {
            header.style.maxHeight = `${pełnaWysokość}px`;
            header.style.opacity = '1';
        }

        lastScrollTop = currentScrollTop;
    });
}

export default header;
