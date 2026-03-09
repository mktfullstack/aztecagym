// Cargar CSS no críticos de forma diferida
(function() {
    // CSS no críticos que se pueden cargar después
    const deferredCSS = [
        'css/plugins.css',
        'css/coloring.css',
        'css/mobile-fix.css'
    ];

    // Función para cargar CSS de forma asíncrona
    function loadCSS(href) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        link.media = 'print';
        link.onload = function() {
            this.media = 'all';
        };
        document.head.appendChild(link);
    }

    // Cargar CSS diferidos cuando el DOM esté listo
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            deferredCSS.forEach(loadCSS);
        });
    } else {
        deferredCSS.forEach(loadCSS);
    }
})();
