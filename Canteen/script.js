$(document).ready(function () {
    // Smooth scrolling functionality for all links
    $("a").on("click", function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $("html, body").animate({
                scrollTop: $(hash).offset().top,
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });

    // Typing effect functionality
    const texts = ["Eat Healthy", "Stay Healthy"];
    let index = 0;
    let charIndex = 0;
    let currentText = '';
    let isDeleting = false;

    function type() {
        if (index === texts.length) {
            index = 0;
        }

        currentText = texts[index];
        if (isDeleting) {
            charIndex--;
        } else {
            charIndex++;
        }

        if (isDeleting && charIndex === 0) {
            isDeleting = false;
            index++;
        } else if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
        }

        const typingText = document.getElementById('text');
        typingText.innerHTML = currentText.substring(0, charIndex);

        const cursor = document.getElementById('cursor');
        cursor.style.display = charIndex === currentText.length ? 'inline-block' : 'inline-block';

        setTimeout(type, charIndex === currentText.length ? 1000 : 200);
    }

    type();
});


