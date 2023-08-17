const emptyClick = document.querySelector ('.empty')
const headerFooterClick = document.querySelector ('.header-footer-click')
const hamburgerIcon = document.querySelector ('.hamburger-icon')
const closeIcon = document.querySelector ('.close-icon')
const hamburgerMenu = document.querySelector ('.hamburger-menu')
const headerLogo = document.querySelector ('.header-logo')
const mainToggle = document.querySelector ('.main-toggle')
const footerHamburgerClick = document.querySelector ('.footer-hamburger-click')

hamburgerIcon.addEventListener('click', ()=> {
    emptyClick.classList.add('hide')
    headerFooterClick.classList.add('hide');
    hamburgerIcon.classList.add('hide');
    closeIcon.classList.remove('hide');
    hamburgerMenu.classList.toggle('visible');
    headerLogo.classList.add('hide');
    mainToggle.classList.add('hide');
    footerHamburgerClick.classList.add('hide');
}
)

closeIcon.addEventListener('click', ()=> {
    emptyClick.classList.remove('hide')
    headerFooterClick.classList.remove('hide');
    closeIcon.classList.add('hide');
    hamburgerIcon.classList.remove('hide');
    hamburgerMenu.classList.toggle('visible');
    headerLogo.classList.remove('hide')
    mainToggle.classList.remove('hide')
    footerHamburgerClick.classList.remove('hide');
}
)