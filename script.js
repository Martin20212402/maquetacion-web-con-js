const menu = document.querySelector('#menu-icon'); // '#' ->seleccionamos por id

const navList = document.querySelector('.navlist'); // '.' ->seleccionamos por clase

menu.onclick = () => {                   //para que escuche ese evento
    menu.classList.toggle('bx-x');      //para que aparezca desaparezca     
    navList.classList.toggle('open');   //para que aparezca y desaparezca
}


const sr = ScrollReveal({               //config global       
    distance: '65px',
    duration: 2000,
    delay: 450,
    reset: true
})

sr.reveal('.hero-text', {delay: 200, origin: 'top'})          //cada clase la config específica de scrollreveal
sr.reveal('.hero-img', {delay: 450, origin: 'top'})
sr.reveal('.icons', {delay: 500, origin: 'left'})
sr.reveal('.scroll-down', {delay: 450, origin: 'right'})