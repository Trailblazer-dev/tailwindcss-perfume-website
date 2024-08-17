/*~~~~~~~~~~~~~~~ TOGGLE BUTTON ~~~~~~~~~~~~~~~*/
const navMenu = document.getElementById('nav-menu');
const navLink = document.querySelectorAll('.nav-link');
const menuBar = document.getElementById('menu-bar');
menuBar.addEventListener('click',()=>{
    navMenu.classList.toggle('left-[0]')
    menuBar.classList.toggle('ri-close-large-line')
})

navLink.forEach(link => {
    link.addEventListener("click",() => {
        navMenu.classList.toggle('left-[0]');
        menuBar.classList.toggle('ri-close-large-line');
    })
})
/*~~~~~~~~~~~~~~~ SHOW SCROLL UP ~~~~~~~~~~~~~~~*/

/*~~~~~~~~~~~~~~~ SCROLL SECTIONS ACTIVE LINK ~~~~~~~~~~~~~~~*/

/*~~~~~~~~~~~~~~~ SCROLL REVEAL ANIMATION ~~~~~~~~~~~~~~~*/
