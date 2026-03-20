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
const toolCards = document.querySelectorAll(".tool-card");

toolCards.forEach(card => {
    card.addEventListener("click", () => {
        const tool = card.dataset.tool;

        const pages = {
            "activemail": "tools/activemail.html",
            "king-of-time": "tools/king-of-time.html",
            "desknet-neo": "tools/desknet-neo.html",
            "teams": "tools/teams.html",
            "office-station": "tools/office-station.html",
            "rakuraku-seisan": "tools/rakuraku-seisan.html"
        };

        if (pages[tool]) {
            window.location.href = pages[tool];
        }
    });
});
