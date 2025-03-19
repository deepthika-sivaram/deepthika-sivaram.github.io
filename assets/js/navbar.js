// Function to detect if the user has scrolled past the expertise section
window.addEventListener("scroll", function() {
    let navbar = document.querySelector('.navbar');
    let expertiseSection = document.querySelector('#expertise');  // Adjust this selector based on the section ID
    let navbarHeight = navbar.offsetHeight;
    
    // If we're past the expertise section, make the navbar solid
    if (expertiseSection && window.scrollY + navbarHeight > expertiseSection.offsetTop) {
        navbar.classList.remove("transparent");
        navbar.classList.add("solid");
    } else if (window.scrollY === 0) {
        // If on top of the page (homepage), keep navbar transparent
        if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
            navbar.classList.remove("solid");
            navbar.classList.add("transparent");
        }
    }
});

// Check on page load to apply transparent navbar to homepage
window.onload = function() {
    let navbar = document.querySelector('.navbar');
    if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
        navbar.classList.add('transparent');
    } else {
        navbar.classList.add('solid');
    }
};

// function toggleMenu() {
//     document.querySelector(".navbar ul").classList.toggle("active");
//     document.querySelector(".page-content").classList.toggle("shift");
// }

document.addEventListener("DOMContentLoaded", function() {
    let menu = document.querySelector(".navbar ul");
    let content = document.querySelector(".page-content");
    let toggleButton = document.querySelector(".menu-toggle");

    if (toggleButton && menu) {
        toggleButton.addEventListener("click", function() {
            menu.classList.toggle("active");
            if (content) {
                content.classList.toggle("shift");
            }
        });
    }
});



