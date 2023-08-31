const hamburgerIcon = document.querySelector ('.hamburger-icon')
const closeIcon = document.querySelector ('.close-icon')
const hamburgerNavLink = document.querySelector ('.hamburger-nav-link')

hamburgerIcon.addEventListener('click', ()=> {
    hamburgerIcon.classList.add('hide');
    closeIcon.classList.remove('hide');
    hamburgerNavLink.classList.toggle('visible');
}
)

closeIcon.addEventListener('click', ()=> {
    closeIcon.classList.add('hide');
    hamburgerIcon.classList.remove('hide');
    hamburgerNavLink.classList.toggle('visible');
}
)