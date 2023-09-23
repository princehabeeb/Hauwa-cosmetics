const hamburger = document.getElementById('bars');
const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav-header');
// console.log(cost);

const add = document.querySelector('.increase');
const reduce = document.querySelector('.reduce');

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

    
});

// Add and reduce cost price

add.addEventListener('click', () => {
let cost = document.querySelector('.cost').innerHTML;
// console.log(cost);

 let  value = 2000;
 value = value * 2;
 cost = value;

 console.log(cost);
//    console.log(n);
   

//    console.log(cost);
});