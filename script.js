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

let div1 = document.getElementById("Navigation-div");
let div = document.getElementById("first-div");

window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    let scrollPercent = scrollTop / maxScroll;

    // Define start (black) and end (dark purple) colors
    let startColor = { r: 0, g: 0, b: 0 };
    let endColor = { r: 7, g: 14, b: 105 };

    // Calculate the interpolated color
    let r = Math.floor(startColor.r + (endColor.r - startColor.r) * scrollPercent);
    let g = Math.floor(startColor.g + (endColor.g - startColor.g) * scrollPercent);
    let b = Math.floor(startColor.b + (endColor.b - startColor.b) * scrollPercent);

    // Set the background color of div1
    div1.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
 });


// Function to toggle sidebar navigation visibility
document.getElementById("toggleNav").addEventListener("click", function() {
    var nav = document.querySelector(".Navigation-div");
    if (nav.style.display === "none" || nav.style.display === "") {
        nav.style.display = "block";
    } else {
        nav.style.display = "none";
    }
});

// JavaScript to hide Navigation-div when any link is clicked
var navLinks = document.querySelectorAll('.nav-link');
for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', function() {
        document.getElementById('Navigation-div').style.display = 'none';
    });
}





