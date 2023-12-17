let Homehero= document.querySelector('.Home-hero');
let About=document.querySelector('.About-Container');
let Projects=document.querySelector('.project-view');
let Contacts= document.querySelector('.Contact-Container');
let ProjectsBtn=document.querySelector('.projets-button');
let HomeMenu=document.querySelector('#Home-menu')
let AboutMenu=document.querySelector('#About-menu')
let ProjectsMenu=document.querySelector('#Projects-menu')
let contactMenu=document.querySelector('#Contact-menu')
let ResumeBtn=document.querySelector('.Resume-button')

HomeMenu.addEventListener('click',(event)=>{
Homehero.scrollIntoView({block: "start", behavior: "smooth"});
event.preventDefault();
})
AboutMenu.addEventListener('click',(event)=>{
    About.scrollIntoView({block: "start", behavior: "smooth"});
    event.preventDefault();
})
ProjectsMenu.addEventListener('click',(event)=>{
    Projects.scrollIntoView({block: "start", behavior: "smooth"});
    event.preventDefault();
})
contactMenu.addEventListener('click',(event)=>{
    Contacts.scrollIntoView({block: "start", behavior: "smooth"});
    event.preventDefault();
})
ProjectsBtn.addEventListener('click',(event)=>{
    Projects.scrollIntoView({block: "start", behavior: "smooth"});
    event.preventDefault();
})

