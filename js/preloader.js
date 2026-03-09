// Preloader Script - Real Loading Progress
(function() {
    var percentageElement = document.querySelector('.preloader-percentage');
    var preloaderBar = document.querySelector('.preloader-bar');
    var totalResources = 0;
    var loadedResources = 0;
    var percentage = 0;
    
    // Contar recursos a cargar (imágenes, scripts, estilos)
    function countResources() {
        var images = document.images.length;
        var scripts = document.scripts.length;
        var stylesheets = document.styleSheets.length;
        totalResources = images + scripts + stylesheets;
        
        // Mínimo de recursos para evitar división por cero
        if (totalResources === 0) totalResources = 1;
    }
    
    // Actualizar porcentaje basado en recursos cargados
    function updateProgress() {
        loadedResources++;
        percentage = Math.min(Math.floor((loadedResources / totalResources) * 100), 100);
        
        if (percentageElement) {
            percentageElement.textContent = percentage + '%';
        }
        
        // Actualizar ancho de la barra manualmente
        if (preloaderBar) {
            preloaderBar.style.width = percentage + '%';
        }
    }
    
    // Monitorear carga de imágenes
    function trackImages() {
        var images = document.images;
        if (images.length === 0) {
            loadedResources += 1; // Contar como recurso aunque no haya imágenes
            updateProgress();
            return;
        }
        
        for (var i = 0; i < images.length; i++) {
            if (images[i].complete) {
                updateProgress();
            } else {
                images[i].addEventListener('load', updateProgress);
                images[i].addEventListener('error', updateProgress); // Contar errores también
            }
        }
    }
    
    // Contar scripts y estilos como cargados (ya están en el DOM)
    function trackScriptsAndStyles() {
        var scripts = document.scripts.length;
        var stylesheets = document.styleSheets.length;
        loadedResources += scripts + stylesheets;
        updateProgress();
    }
    
    function hidePreloader() {
        var preloader = document.getElementById('preloader');
        if (preloader) {
            // Asegurar que llegue a 100%
            percentage = 100;
            if (percentageElement) {
                percentageElement.textContent = '100%';
            }
            if (preloaderBar) {
                preloaderBar.style.width = '100%';
            }
            
            setTimeout(function() {
                preloader.classList.add('fade-out');
            }, 300);
        }
    }
    
    // Iniciar seguimiento
    countResources();
    
    // Si la página ya está cargada
    if (document.readyState === 'complete') {
        trackScriptsAndStyles();
        trackImages();
        setTimeout(hidePreloader, 500);
    } else {
        // Esperar a que el DOM esté listo
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', function() {
                trackScriptsAndStyles();
                trackImages();
            });
        } else {
            trackScriptsAndStyles();
            trackImages();
        }
        
        // Cuando todo esté cargado
        window.addEventListener('load', function() {
            setTimeout(hidePreloader, 500);
        });
    }
    
    // Fallback: ocultar después de 5 segundos máximo
    setTimeout(function() {
        if (percentage < 100) {
            hidePreloader();
        }
    }, 5000);
})();
