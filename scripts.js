window.addEventListener("load", function() {
    // إخفاء الـ loader بعد ثانية واحدة
    setTimeout(function() {
        document.getElementById("loader").style.display = "none";
        document.getElementById("content").style.display = "block";
    }, 600); // مدة التأخير 1 ثانية
});
    const checkbox = document.querySelector('.input');
    const elements = document.querySelectorAll('.button, .card, .card i, .card h3, h1, header, .cardd, .container, .loader-wrapper, .circle, .logo-link, .theme');

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
    // عندما يقوم المستخدم بالتمرير 100px من الأعلى، يظهر الزر
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    let backToTopButton = document.querySelector('.back-to-top');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
}

// عند الضغط على الزر، يرجع المستخدم إلى أعلى الصفحة
document.querySelector('.back-to-top').addEventListener('click', function(event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});