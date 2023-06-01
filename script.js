const btnNavbar = document.getElementById('btn-nav-responsive');

function toggleMenu() {
    const navbar = document.getElementById('nav');
    navbar.classList.toggle('active');
}

btnNavbar.addEventListener('click', toggleMenu);
