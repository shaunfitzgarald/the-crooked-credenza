document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav ul li a, header h1 a');
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    // Add event listener for smooth scrolling
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('index.html#') || href.startsWith('../index.html#')) {
                // Handle navigation to index.html sections
                e.preventDefault();
                window.location.href = href;
            } else if (href === 'index.html' || href === '../index.html') {
                // Handle scroll to top of index.html
                e.preventDefault();
                if (window.location.pathname !== '/index.html' && window.location.pathname !== '/your-subdirectory-path/index.html') {
                    window.location.href = href;
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
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
            }
        });
    });

    // Add event listener for menu toggle
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
});