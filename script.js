document.addEventListener('DOMContentLoaded', function() {
    // const text = "You can call me Mr.Secret I";
    let index = 0;
    const speed = 400; // typing speed in milliseconds
    const typewriterText = document.getElementById('typewriter-text');

    function type() {
        if (index < text.length) {
            typewriterText.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }

    type();
});