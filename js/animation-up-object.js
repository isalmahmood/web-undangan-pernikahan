/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
//   const navMenu = document.getElementById('nav-menu')
//   navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: false
});

/*SCROLL HOME*/
sr.reveal('.container',{}); 
sr.reveal('.button',{delay: 200}); 
sr.reveal('.home',{delay: 400}); 
sr.reveal('.home__text',{delay: 600}); 
sr.reveal('.gallery',{delay:500})
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('home__title',{delay:400});

/*SCROLL ABOUT*/
sr.reveal('.about__img',{}); 
sr.reveal('.about__subtitle',{delay: 400}); 
// sr.reveal('.about__text',{delay: 400}); 

/*CV Pendidikan */
sr.reveal('.school',{delay:600});
sr.reveal('.akademis_img',{delay:100});

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle',{}); 
sr.reveal('.skills__text',{}); 
sr.reveal('.skills__data',{interval: 200}); 


/*SCROLL WORK*/
sr.reveal('.work__img',{interval: 200}); 

/*SCROLL CONTACT*/
sr.reveal('.contact__input',{interval: 200}); 


const scr_Left = ScrollReveal({
    origin: 'left',
    distance: '180px',
    duration: 1000,
    reset: true
});


// scr_Left.reveal('.home_img',{delay: 400}); 

const scr_Right  = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 1000,
    reset: true
});

// scr_Right.reveal('.home_title',{delay:400});
// scr_Right.reveal('.skills_list',{delay: 600});
// scr_Right.reveal('.about__text',{delay: 400}); 

