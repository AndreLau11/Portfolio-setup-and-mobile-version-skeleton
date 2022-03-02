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

// function createImage(image) { 
//   var x = document.createElement("IMG"); 
//   x.setAttribute("src", image); 
//   x.setAttribute("width", "304"); 
//   x.setAttribute("width", "228"); 
//   x.setAttribute("alt", "The Great Ocean"); 
//   document.body.appendChild(x); 
// } 

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
    name: 'Technical Documentation',
    description: 'A description page of the new technology and how it impacts out complete daily living.',
    feature: 'A fixed left panel that uses the complete screen hieght and the rest of the screen is for the documentation and detail information',
    image: 'image',
    technologies: 'technologies',
    liveVersionLink: 'https://andrelau11.github.io/Technical_Documentation/',
    sourceLink: 'https://github.com/AndreLau11/Technical_Documentation/settings/pages'
  },
  third = {  
    name: 'Survey',
    Description: 'A basic survey that shows all the posibilities on a survery using text filters, text input types, email and phone number validation and takes all that information and sent it to the destination.',
    Feature: 'A page that uses all the inpt types, and filters for them ina good shape and send results.',
    image: 'image',
    technologies: 'HTML and inline CSS',
    liveVersionLink: 'https://andrelau11.github.io/Survey/',
    sourceLink: 'https://github.com/AndreLau11/Survey'
  },
  fourth = {  
    name: 'Personal Portfolio',
    description: 'A general skill termination that includes all I have been capable of doing.',
    feature: 'A basic website',
    image: 'image',
    technologies: 'HTML and inline CSS',
    liveVersionLink: 'https://andrelau11.github.io/Personal_Portfolio/',
    sourceLink: 'https://github.com/AndreLau11/Personal_Portfolio'
  },
  fifth = {  
    name: 'My Product',
    description: 'A website that gives out and promotes the product to get it sell on the market.',
    feature: 'A publicitary page that shows the best sides of the product',
    image: 'image',
    technologies: 'HTML and inline CSS',
    liveVersionLink: 'https://andrelau11.github.io/My_Product/',
    sourceLink: 'https://github.com/AndreLau11/My_Product'
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