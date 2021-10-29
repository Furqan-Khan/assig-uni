const heroWelcome = document.getElementsByClassName('background-text')[0];
const heroTagLine = document.getElementsByClassName('tag-line')[0];
const heroHeading = document.getElementsByClassName('hero-heading')[0];
const heroBtn = document.querySelector('.facultyCall2action a');
const heroImg = document.querySelector('.hero-lower img');
const heroAnimationArrow = document.getElementsByClassName('hero-animation')[0];
const heroAnimationbg = document.getElementsByClassName('animated-background')[0];


setTimeout(()=>{
    heroWelcome.style.opacity = 1;
}, 0)
setTimeout(()=>{
    heroHeading.style.opacity = 1;
}, 1000)
setTimeout(()=>{
    heroImg.style.opacity = 1; 
}, 2000)
setTimeout(()=>{
    heroTagLine.style.opacity = 1;
}, 2500)
setTimeout(()=>{
    heroBtn.style.opacity = 1;
}, 3000)
setTimeout(()=>{
    heroAnimationArrow.style.opacity = 1;
    heroAnimationbg.style.opacity = 1;
}, 3500)



