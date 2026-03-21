// Hamburger menu functionality
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Sidebar toggle functionality
const sidebarToggle = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');

sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

// Smooth scrolling navigation
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});
// Tool card click → page navigation
const toolButtons = document.querySelectorAll(".tool-card .btn");

toolButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        e.stopPropagation(); // 親への伝播を防ぐ（念のため）

        const tool = button.closest(".tool-card").dataset.tool;

const pages = {
    "activemail": "/test/tools/activemail.html",
    "king-of-time": "/test/tools/king-of-time.html",
    "desknet-neo": "/test/tools/desknet-neo.html",
    "teams": "/test/tools/teams.html",
    "office-station": "/test/tools/office-station.html",
    "rakuraku-seisan": "/test/tools/rakuraku-seisan.html"
};


        if (pages[tool]) {
            window.location.href = pages[tool];
        }
    });
});

