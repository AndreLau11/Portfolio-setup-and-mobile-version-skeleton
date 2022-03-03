const navOpen = document.getElementById('navbar-hamburger');
const mobileNav = document.getElementById('mobile-nav');
const navClose = document.getElementById('close-menu');
const navPortfolio = document.getElementById('mobile__nav_portfolio');
const navAbout = document.getElementById('mobile__nav_about');
const navContact = document.getElementById('mobile__nav_contact');
const cardContainer = document.getElementById('card-container');
const buttons = cardContainer.getElementsByTagName('button');

const popUp = document.getElementById('popUp-slice');
const projectButton = document.getElementsByClassName('projectbutton');
const popUpClose = document.getElementById('popUpClose');
const popUpImg = document.querySelector('.pop-img');
const popUpTitle = document.querySelector('.pop-title');
const popUpParagraph = document.querySelector('.pop-paragraph');

const buttonContainer = document.getElementById('projectDetails-popUp');

const projectInformation = [
  {
    name: '',
    description: '',
    feature: '',
    image: '',
    technologies: '',
    liveVersionLink: '',
    sourceLink: ''
  },
  {
    name: 'Survey Form',
    description: 'This is a general survey form that can be used for your project at any  option you might have.',
    feature: 'This is a very basic suuvey that can be modified at your convinience',
    image: './images/project/images/survey_form.jpg',
    technologies: ['HTML', 'inline CSS'],
    liveVersionLink: 'https://andrelau11.github.io/Survey_Form/',
    sourceLink: 'https://github.com/AndreLau11/Survey_Form'
  }, 
  {
    name: 'Technical Documentation',
    description: 'A description page of the new technology and how it impacts out complete daily living.',
    feature: 'A fixed left panel that uses the complete screen hieght and the rest of the screen is for the documentation and detail information',
    image: './images/project/images/technicaldocumentation.jpg',
    technologies: ['HTML', 'inline CSS'],
    liveVersionLink: 'https://andrelau11.github.io/Technical_Documentation/',
    sourceLink: 'https://github.com/AndreLau11/Technical_Documentation/settings/pages'
  },
  {
    name: 'Survey',
    description: 'A basic survey that shows all the posibilities on a survery using text filters, text input types, email and phone number validation and takes all that information and sent it to the destination.',
    feature: 'A page that uses all the inpt types, and filters for them ina good shape and send results.',
    image: './images/project/images/survey.jpg',
    technologies: ['HTML', 'inline CSS'],
    liveVersionLink: 'https://andrelau11.github.io/Survey/',
    sourceLink: 'https://github.com/AndreLau11/Survey',
  },
   {
    name: 'Personal Portfolio',
    description: 'A general skill termination that includes all I have been capable of doing.',
    feature: 'A basic website',
    image: './images/project/images/personalPortfolio.jpg',
    technologies: ['HTML', 'inline CSS'],
    liveVersionLink: 'https://andrelau11.github.io/Personal_Portfolio/',
    sourceLink: 'https://github.com/AndreLau11/Personal_Portfolio',
  },
  {
    name: 'My Product',
    description: 'A website that gives out and promotes the product to get it sell on the market.',
    feature: 'A publicitary page that shows the best sides of the product',
    image: './images/project/images/myProduct.jpg',
    technologies: ['HTML', 'inline CSS'],
    liveVersionLink: 'https://andrelau11.github.io/My_Product/',
    sourceLink: 'https://github.com/AndreLau11/My_Product'
  }
]

function LoadProjects() {
  let counter;
  for (counter = 0; counter < projectInformation.length; counter += 1) {
    let k;
    let technologies = '';
    for (k = 0; k < projectInformation[counter].technologies.length; k += 1) {
      technologies += `<li>
        <a href='#'>${projectInformation[counter].technologies[k]}</a>
      </li>`;
    }

    cardContainer.innerHTML += `<div class="projectsection${[counter]}">
        <h2 class="projecttitle">${projectInformation[counter].name}</h2>
        <p class="projectparagraph">${projectInformation[counter].description}</p>
        <ul class="skill">
            <li><a href=""><img class="skill-image-tag" src="./images/project/Tag0.png"
                        alt="Rubi legend, as reference of the back end language used on the project"></a>
            </li>
            <li><a href=""><img class="skill-image-tag" src="./images/project/Tag1.png"
                        alt="Bootstrap legend, as reference of the tool used for styling the page"></a></li>
            <li><a href=""><img class="skill-image-tag" src="./images/project/Tag2.png"
                        alt="HTML legend, as reference of the coding used on the front end"></a></li>
        </ul>
        <button type="submit" class="projectbutton">See Project</button>
    </div>`;

    buttonContainer.innerHTML += `<li><button class="popUpSource" id="projectDetailButtonLive" onclick="location.href= ${projectInformation[counter].liveVersionLink};">See Live <img src="./images/popup/Icon-see-live.svg" alt=""></button></li>
    <li><button class="popUpGithub" id="projectDetailButtonSource" onclick="location.href=${projectInformation[counter].sourceLink};">See Source <img src="./images/popup/Vector.svg" alt=""></button></li>`
  }

  //HAMBURGER MENU//

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

    function hidePopUp(){
      popUp.classList.add('hidden')
    }

  }
  navOpen.addEventListener('click', showNavbar);
    navClose.addEventListener('click', hideNavbar);
    navPortfolio.addEventListener('click', hideNavbar);
    navAbout.addEventListener('click', hideNavbar);
    navContact.addEventListener('click', hideNavbar);
}

document.addEventListener('DOMContentLoaded', LoadProjects, false);
