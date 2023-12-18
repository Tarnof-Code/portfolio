// JavaScript
const presentation = {
    init: function () {
        let delay = 100,
            delay_start = 0,
            contents,
            letters;

        const elem = document.querySelector(".animate-text");
        contents = "NICOLAS TATARINOFF";
        letters = contents.split("");

        // Afficher le spinner au début
        const loader = document.getElementById("loader");
        loader.style.display = "block";

        // Masquer tous les éléments que vous souhaitez cacher initialement
        const content = document.getElementById("accueil");
        content.style.display = "none";

        // Masquer le spinner une fois que la page est complètement chargée
        window.addEventListener("load", function () {
            loader.style.display = "none";

            // Afficher tous les éléments après le chargement complet
            accueil.style.display = "block";

            // Démarrer l'animation du texte
            for (let index = 0; index < letters.length; index++) {
                setTimeout(function () {
                    elem.textContent += letters[index];
                }, delay_start + delay * index);
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', presentation.init);
