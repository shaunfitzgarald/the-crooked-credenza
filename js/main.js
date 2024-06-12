document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav ul li a, header h1 a');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('index.html#')) {
                // Handle navigation to index.html
                e.preventDefault();
                window.location.href = href;
            } else if (href === 'index.html') {
                // Handle scroll to top
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
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