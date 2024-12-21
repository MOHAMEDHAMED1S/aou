if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('service-worker.js')
            .then((registration) => {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch((error) => {
                console.error('Service Worker registration failed:', error);
            });
    });
}
window.addEventListener("load", function() {
    setTimeout(function() {
        document.getElementById("loader").style.display = "none";
        document.getElementById("content").style.display = "block";
    }, 600); 
});
    const checkbox = document.querySelector('.input');
    const elements = document.querySelectorAll('.button,#flo a, .card, .card i,#name, .card h3, h1, header,.head, .card, .container, .loader-wrapper, .circle, .logo-link, .theme');

    const darkModeEnabled = localStorage.getItem('darkMode') === 'true';

    checkbox.checked = darkModeEnabled;

    if (darkModeEnabled) {
        document.body.classList.add('dark-mode');
        elements.forEach(element => {
            element.classList.add('dark-mode');
        });
    }

    checkbox.addEventListener('change', () => {
        const isChecked = checkbox.checked;
        document.body.classList.toggle('dark-mode', isChecked);
        elements.forEach(element => {
            element.classList.toggle('dark-mode', isChecked);
        });

        localStorage.setItem('darkMode', isChecked);
    });
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    let backToTopButton = document.querySelector('.back-to-top');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
}
document.querySelector('.back-to-top').addEventListener('click', function(event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
function updateOnlineStatus() {
    const offlineMessage = document.getElementById('offline-message');
    if (navigator.onLine) {
        offlineMessage.style.display = 'none';
    } else {
        offlineMessage.style.display = 'block';
    }
}

window.addEventListener('online', updateOnlineStatus);
window.addEventListener('offline', updateOnlineStatus);

updateOnlineStatus();

function reloadPage() {
    location.reload();
}


function showGame() {
    document.getElementById('game-container').style.display = 'block';
    document.getElementById('offline-message').style.display = 'none';
}
function closeGame() {
        document.getElementById('game-container').style.display = 'none';
    }
    const cards = document.querySelectorAll('.card-link');
    cards.forEach(card => {
        card.addEventListener('touchmove', function(e) {
            e.stopPropagation(); // السماح بالتمرير الطبيعي
        });
    });
    const images = document.querySelectorAll('img');
images.forEach(img => {
    img.setAttribute('draggable', 'false');
});
const links = document.querySelectorAll('.card-link');
links.forEach(link => {
    link.addEventListener('click', (e) => {
        if (e.cancelable) {
            e.preventDefault();
        }
    });
});
