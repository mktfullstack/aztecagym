// Preloader Script
(function() {
    function hidePreloader() {
        var preloader = document.getElementById('preloader');
        if (preloader) {
            preloader.classList.add('fade-out');
        }
    }
    
    if (document.readyState === 'complete') {
        setTimeout(hidePreloader, 2500);
    } else {
        window.addEventListener('load', function() {
            setTimeout(hidePreloader, 2500);
        });
    }
    
    setTimeout(hidePreloader, 4000);
})();
