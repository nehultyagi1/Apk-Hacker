


const pages = document.querySelectorAll('.page');
const overlay = document.querySelector('.overlay');

function handleTransition(e) {
    e.preventDefault();
    const target = document.querySelector(e.target.getAttribute('href'));
    
    overlay.style.opacity = 1;
    setTimeout(() => {
        pages.forEach(page => {
            page.style.opacity = 0;
        });
        setTimeout(() => {
            target.style.opacity = 1;
            overlay.style.opacity = 0;
        }, 500);
    }, 500);
}

document.querySelectorAll('.transition-link').forEach(link => link.addEventListener('click', handleTransition));
