(function() {
    "use strict";
    
    // === NAVIGATION ===
    const mainNav = document.querySelector('#mainNav');
    if (mainNav) {
        // Gestion du collapse de la navbar
        const navbarCollapse = mainNav.querySelector('.navbar-collapse');
        if (navbarCollapse) {
            const collapse = new bootstrap.Collapse(navbarCollapse, {
                toggle: false
            });    
            const navbarItems = navbarCollapse.querySelectorAll('a');  
            for (const item of navbarItems) {
                item.addEventListener('click', function (event) {
                    collapse.hide();
                });
            }
        }
        
        // Gestion du rétrécissement de la navbar au scroll
        const collapseNavbar = function() {
            const scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
            if (scrollTop > 100) {
                mainNav.classList.add("navbar-shrink");
            } else {
                mainNav.classList.remove("navbar-shrink");
            }
        };
        collapseNavbar();
        document.addEventListener("scroll", collapseNavbar);
    }
    
    // === ANIMATION DE PRÉSENTATION ===
    const presentation = {
        init: function () {
            const delay = 100;
            const delay_start = 0;
            let contents, letters;

            const elem = document.querySelector(".animate-text");
            if (!elem) return;
            
            contents = "NICOLAS TATARINOFF";
            letters = contents.split("");

            // Afficher le spinner au début
            const loader = document.getElementById("loader");
            const content = document.getElementById("accueil");
            
            if (loader) loader.style.display = "block";
            if (content) content.style.display = "none";

            // Masquer le spinner une fois que la page est complètement chargée
            window.addEventListener("load", function () {
                if (loader) loader.style.display = "none";
                if (content) content.style.display = "block";

                // Démarrer l'animation du texte
                for (let index = 0; index < letters.length; index++) {
                    setTimeout(function () {
                        elem.textContent += letters[index];
                    }, delay_start + delay * index);
                }
            });
        }
    };
    
    // === GESTION DES OVERLAYS ===
    window.onMore = function(appName) {
        const overlay = document.getElementById(`overlayMore${appName}`);
        if (overlay) overlay.style.display = "block";
    };
    
    window.offMore = function(appName) {
        const overlay = document.getElementById(`overlayMore${appName}`);
        if (overlay) overlay.style.display = "none";
    };

    window.onVideo = function(appName) {
        const overlay = document.getElementById(`overlayVideo${appName}`);
        if (overlay) overlay.style.display = "block";
    };

    window.offVideo = function(appName) {
        const overlay = document.getElementById(`overlayVideo${appName}`);
        if (overlay) overlay.style.display = "none";
    };
    
    // === INITIALISATION ===
    document.addEventListener('DOMContentLoaded', presentation.init);
    
})();
