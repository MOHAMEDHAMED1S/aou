window.addEventListener("load", function() {
    // إخفاء الـ loader بعد ثانية واحدة
    setTimeout(function() {
        document.getElementById("loader").style.display = "none";
        document.getElementById("content").style.display = "block";
    }, 800); // مدة التأخير 1 ثانية
});