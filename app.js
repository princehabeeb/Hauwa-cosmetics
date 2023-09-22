const hamburger = document.getElementById('bars');
const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav-header');


// Responsive sidebar toggler
hamburger.addEventListener('click', () => {
  menu.classList.toggle('show');
});

// Navbar background appearance handler
window.addEventListener('scroll', () => {
    // console.log(window.pageYOffset);

    if (window.pageYOffset > 40){
        nav.classList.add('bg');
    }else{
        nav.classList.remove('bg');
    }

    
})

