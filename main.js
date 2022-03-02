const navOpen = document.getElementById('navbar-hamburger');
const mobileNav = document.getElementById('mobile-nav');
const navClose = document.getElementById('close-menu');
const navPortfolio = document.getElementById('mobile__nav_portfolio');
const navAbout = document.getElementById('mobile__nav_about');
const navContact = document.getElementById('mobile__nav_contact');
const popUp = document.getElementById('popUp-slice');
const projectButton = document.getElementsByClassName('projectbutton');
const popUpClose = document.getElementById('popUpClose');
const projects = document.getElementById('projects');
const buttons = projects.getElementsByTagName('button');

let projects = [
  first = {
    name: 'Survey Form',
    description: 'This is a general survey form that can be used for your project at any  option you might have.',
    feature: 'This is a very basic suuvey that can be modify at your convinience',
    image: './images/project/images/survey_form.svg',
    technologies: 'HTML, CSS',
    liveVersionLink: 'https://andrelau11.github.io/Survey_Form/',
    sourceLink: 'https://github.com/AndreLau11/Survey_Form'
  },
  second = {  
    name: 'name',
    description: 'description',
    neature: 'neature',
    image: 'image',
    technologies: 'technologies',
    liveVersionLink: 'liveVersionLink',
    sourceLink: 'sourceLink'
  },
  third = {  
    name: 'name',
    nescription: 'description',
    neature: 'neature',
    image: 'image',
    technologies: 'technologies',
    liveVersionLink: 'liveVersionLink',
    sourceLink: 'sourceLink'
  },
  fourth = {  
    name: 'name',
    nescription: 'description',
    neature: 'neature',
    image: 'image',
    technologies: 'technologies',
    liveVersionLink: 'liveVersionLink',
    sourceLink: 'sourceLink'
  },
  fifth = {  
    name: 'name',
    nescription: 'description',
    neature: 'neature',
    image: 'image',
    technologies: 'technologies',
    liveVersionLink: 'liveVersionLink',
    sourceLink: 'sourceLink'
  }
]

function showNavbar() {
  mobileNav.classList.remove('hidden');
  navOpen.classList.add('hidden');
}

function hideNavbar() {
  mobileNav.classList.add('hidden');
  navOpen.classList.remove('hidden');
}

function showPopUp(){
  popUp.classList.remove('hidden');
}

function hidePopUp(){
  popUp.classList.add('hidden')
}

for (i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', showPopUp);
}

navOpen.addEventListener('click', showNavbar);
navClose.addEventListener('click', hideNavbar);
navPortfolio.addEventListener('click', hideNavbar);
navAbout.addEventListener('click', hideNavbar);
navContact.addEventListener('click', hideNavbar);
popUpClose.addEventListener('click', hidePopUp);