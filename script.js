// Initialize Particles.js (if using particles effect)


// Initialize particles.js
particlesJS('particles-js', {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#00c9ff" },
    shape: { type: "circle", stroke: { width: 0, color: "#000000" } },
    opacity: { value: 0.5, random: false, anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false } },
    size: { value: 5, random: true, anim: { enable: false, speed: 40, size_min: 0.1, sync: false } },
    line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
    move: { enable: true, speed: 6, direction: "none", random: false, straight: false, out_mode: "out", bounce: false }
  },
  interactivity: {
    detect_on: "window",
    events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" } }
  },
  retina_detect: true
});

// Toggle Navbar menu on mobile
const menuIcon = document.getElementById('menu-icon');
const navbarMenu = document.getElementById('navbar-menu');

menuIcon.addEventListener('click', () => {
  navbarMenu.classList.toggle('active');
});


