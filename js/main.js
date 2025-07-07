document.addEventListener('DOMContentLoaded', function() {
    // Znajduje aktualną ścieżkę
    const currentPath = window.location.pathname;
    
    // Znajduje wszystkie linki w nawigacji
    const navLinks = document.querySelectorAll('.main-nav a');
    
    // Usuwa klasę 'active' ze wszystkich linków
    navLinks.forEach(link => {
        if (currentPath.includes(link.getAttribute('href'))) {
            link.classList.add('active');
        }
    });
});