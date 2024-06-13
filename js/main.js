document.addEventListener('DOMContentLoaded', () => {
    const parallaxElements = document.querySelectorAll('[data-simple-parallax]');
    parallaxElements.forEach(element => {
        new simpleParallax(element, {
            scale: 1.5,
            delay: .6,
            transition: 'cubic-bezier(0,0,0,1)'
        });
    });

    const links = document.querySelectorAll('nav ul li a, header h1 a');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('index.html#')) {
                // Handle navigation to index.html sections
                e.preventDefault();
                window.location.href = href;
            } else if (href === 'index.html') {
                // Handle scroll to top of index.html
                e.preventDefault();
                if (window.location.pathname !== '/index.html') {
                    window.location.href = 'index.html';
                } else {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                }
            } else {
                // Handle internal smooth scrolling
                e.preventDefault();
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});