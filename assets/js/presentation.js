const presentation = {

    init: function () {

        let delay = 100,
            delay_start = 0,
            contents,
            letters;

        const elem = document.querySelector(".animate-text")
        contents = "NICOLAS TATARINOFF"
        letters = contents.split("");

        for (let index = 0; index < letters.length; index++) {
            setTimeout(function () {
                elem.textContent += letters[index];
            },
                delay_start + delay * index);

        }
    }
}

document.addEventListener('DOMContentLoaded', presentation.init);