async function loadComponent(elementId, componentPath) {
    try {
        const response = await fetch(componentPath);
        const html = await response.text();
        document.getElementById(elementId).innerHTML = html;
    } catch (error) {
        console.error('Błąd ładowania komponentu:', error);
    }
}

function initComponents() {
    loadComponent('header-container', '../components/subpage-header.html');
    loadComponent('nav-container', '../components/subpage-navigation.html');
}

document.addEventListener('DOMContentLoaded', initComponents);