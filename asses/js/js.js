const showMenu=(toggLeId,navId)=>{
    const toggle=document.getElementById(toggLeId);
    const nav=document.getElementById(navId);
    if(toggle&&nav)
    {
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show-menu');
        })
    }
}
showMenu('nav-toggle','nav-menu');
const navlink=document.querySelectorAll('.nav__link');
function linkAction(){
    const navMenu=document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navlink.forEach(element => 
    element.addEventListener('click',linkAction)
    
); 
function scrollActive(){
    const scrolly=window.pageYOffset
    Selection.forEach(current=>{
        const sectionheight=current.offsetHeight
        const sectiontop=current.offsetTop-50;
        sectionid=current.getAttribute('id')
        if(scrolly>sectiontop && scrolly<=sectiontop+sectionheight){
            document.querySelector('.nav__menu a[href*='+sectionid+']').classList.add('active')
        }
        else{
            document.querySelector('nav__menu a[href*='+sectionid+']').classList.remove('active')
        }

    })
} 
window.addEventListener('scroll',scrollActive)
function scrollHeader(){
    const nav=document.getElementById('header ')
    if(window.scrollY>200) nav.classList.add('scroll-header');else nav.classList.remove('scroll-header');
    
}
window.addEventListener('scroll',scrollHeader);

function scrolltop(){
    const scrolltop=document.getElementById('scroll-top')
    if(window.scrollY>560) scrolltop.classList.add('scrolltop1')
        else scrolltop.classList.remove('scrolltop1');
}
window.addEventListener('scroll',scrolltop);


 const themeButton=document.getElementById('theme-button')
 const darktheme='dark-theme'
 const iconTheme='bx-sun'
 const selectedTheme=localStorage.getItem('selected-theme')
 const selectedIcon=localStorage.getItem('selected-icon')
 const getcurrentTheme=()=>document.body.classList.contains(darktheme)?'dark':'light'
  const getcurrentIcon=()=>themeButton.classList.contains(iconTheme)?'bx-moon':'bx-sun'

  if(selectedTheme)
  {
    document.body.classList[selectedTheme==='dark'? 'add':'remove'](darktheme)
    themeButton.classList[selectedIcon==='bx-moon'? 'add':'remove'](iconTheme)
  }
 themeButton.addEventListener('click',()=>{
    document.body.classList.toggle(darktheme);
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme',getcurrentTheme())
    localStorage.setItem('selected-icon',getcurrentIcon())

 })

const sr=ScrollReveal({
    origin:'top',
    distance:'30px',
    duration:2000,
    reset:false
});
sr.reveal(`.home__data,.home__img,
            .about__data,.about__img,
            .services__content,.menu__content,
            .contact__data,.contact__button,
            .footer__content`,{
    interval:200
})