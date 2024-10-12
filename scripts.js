window.addEventListener("load", function() {
    // إخفاء الـ loader بعد ثانية واحدة
    setTimeout(function() {
        document.getElementById("loader").style.display = "none";
        document.getElementById("content").style.display = "block";
    }, 600); // مدة التأخير 1 ثانية
});
    const checkbox = document.querySelector('.input');
    const elements = document.querySelectorAll('.button, .card, .card i, .card h3, h1, header, .cardd, .container, .loader-wrapper, .circle, .logo-link');

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