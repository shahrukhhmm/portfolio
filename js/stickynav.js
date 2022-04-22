const nav =document.querySelector('.nav')
window.addEventListener('scroll', fixnav)

function fixnav(){
    if(window.scrollY>nav.offsetHeight +150)
    {
        nav.classList.add('active')
    }
    else{
        nav.classList.remove('active')
    }
}


//active on scroll
window.addEventListener('scroll', event => {
    let navigationLinks = document.querySelectorAll('nav div ul li a');
    let fromTop = window.scrollY;
    navigationLinks.forEach(link => {
      let section = document.querySelector(link.hash);

      let sectiontop = section.offsetTop - 400
      let sectionheight= section.offsetHeight 
    

      if (
        sectiontop <= fromTop &&
        sectiontop + sectionheight > fromTop
      ) {
        link.classList.add('current');
      } else {
        link.classList.remove('current');
      }
    });
  });

  // responsivenac
  const sideNav = document.querySelector(`.side-nav`);
  const sideNavBackground = document.getElementById(`side-nav-cover`);
const navopen = document.querySelector(`.fa-bars`);
const navclose = document.querySelector(`.fa-times`);


navopen.addEventListener(`click`, () => {
    sideNav.style.display='block'
    sideNavBackground.classList.toggle(`toggle`);
    document.body.classList.add(`hide-overflow`);
    navopen.style.display='none';
    navclose.style.display='block';
});

navclose.addEventListener(`click`, () => {
    sideNav.style.display='none'
    sideNavBackground.classList.toggle(`toggle`);
    document.body.classList.remove(`hide-overflow`);
    navclose.style.display='none';
    navopen.style.display='block';
    
});

function closeside(){
  sideNav.style.display='none'
  sideNavBackground.classList.toggle(`toggle`);
  document.body.classList.remove(`hide-overflow`);
  navclose.style.display='none';
  navopen.style.display='block';
  
}

// homebtn
const buttons =document.querySelectorAll('.clickbutton');


buttons.forEach(button =>{
  button.addEventListener('click', function(e){
      const x=e.clientX;
      const y=e.clientY;


      const buttontop = e.target.offsetTop
      const buttonleft = e.target.offsetLeft
   
      const xinside = x - buttonleft
      const yinside = y - buttontop
      
      const circle= document.createElement('span')
      circle.classList.add('circle')
      circle.style.top = yinside + 'px'
      circle.style.left = xinside + 'px'


      this.appendChild(circle)

      setTimeout(()=> circle.remove() , 500)
  })
})

// services
const body1 = document.querySelector('.body1');
const body2 = document.querySelector('.body2');
const body3 = document.querySelector('.body3');
const body4 = document.querySelector('.body4');
const inner1 = document.querySelector('.inner1');
const inner2 = document.querySelector('.inner2');
const inner3 = document.querySelector('.inner3');
const inner4 = document.querySelector('.inner4');
const inner5 = document.querySelector('.inner5');
body1.addEventListener('click',()=>{
    inner1.classList.toggle('rotate');
})
body2.addEventListener('click',()=>{
    inner2.classList.toggle('rotate');
})
body3.addEventListener('click',()=>{
    inner3.classList.toggle('rotate');
})
body4.addEventListener('click',()=>{
    inner4.classList.toggle('rotate');
})


// portfolio

const frontend = document.querySelector('.frontend');
const backend = document.querySelector('.backend');
const frontbtn = document.getElementById('frontbtn');
const backbtn = document.getElementById('backbtn');

backbtn.addEventListener("click", () =>{
  frontend.classList.add('noneornot')
  backend.classList.remove('noneornot')
})
frontbtn.addEventListener("click", () =>{
  backend.classList.add('noneornot')
  frontend.classList.remove('noneornot')
})