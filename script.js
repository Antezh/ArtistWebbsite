// Funktion för att toggla fram hamburgar-menyn som kommer fram om vy-bredden är mindre än 1200px
// Funktionen togglar fram menyn, samt togglar bort menyn vid nästa val av sida.
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}