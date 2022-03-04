const navOpen = document.getElementById('navbar-hamburger');
const mobileNav = document.getElementById('mobile-nav');
const navClose = document.getElementById('close-menu');
const navPortfolio = document.getElementById('mobile__nav_portfolio');
const navAbout = document.getElementById('mobile__nav_about');
const navContact = document.getElementById('mobile__nav_contact');
const cardContainer = document.getElementById('card-container');
const portFolio = document.getElementById('projects-container');
const buttons = portFolio.getElementsByTagName('button');
const popUp = document.getElementById('popUp-slice');
const generalDocument = document.getElementById('html');

const projectInformation = [
  {
    id: 0,
    name: '',
    description: '',
    feature: '',
    image: '',
    technologies: '',
    liveVersionLink: '',
    sourceLink: '',
  },
  {
    id: 1,
    name: 'Survey Form',
    description:
      'This is a general survey form that can be used for your project at any  option you might have.',
    feature:
      'This is a very basic suuvey that can be modified at your convinience',
    image: './images/project/images/survey_form.jpg',
    technologies: ['HTML', 'inline CSS'],
    liveVersionLink: 'https://andrelau11.github.io/Survey_Form/',
    sourceLink: 'https://github.com/AndreLau11/Survey_Form',
  },
  {
    id: 2,
    name: 'Technical Documentation',
    description:
      'A description page of the new technology and how it impacts out complete daily living.',
    feature:
      'A fixed left panel that uses the complete screen hieght and the rest of the screen is for the documentation and detail information',
    image: './images/project/images/technicaldocumentation.jpg',
    technologies: ['HTML', 'inline CSS'],
    liveVersionLink: 'https://andrelau11.github.io/Technical_Documentation/',
    sourceLink: 'https://github.com/AndreLau11/Technical_Documentation',
  },
  {
    id: 3,
    name: 'Survey',
    description:
      'A basic survey that shows all the posibilities on a survery using text filters, text input types, email and phone number validation and takes all that information and sent it to the destination.',
    feature:
      'A page that uses all the inpt types, and filters for them ina good shape and send results.',
    image: './images/project/images/survey.jpg',
    technologies: ['HTML', 'inline CSS'],
    liveVersionLink: 'https://andrelau11.github.io/Survey/',
    sourceLink: 'https://github.com/AndreLau11/Survey',
  },
  {
    id: 4,
    name: 'Personal Portfolio',
    description:
      'A general skill termination that includes all I have been capable of doing.',
    feature: 'A basic website',
    image: './images/project/images/personalPortfolio.jpg',
    technologies: ['HTML', 'inline CSS'],
    liveVersionLink: 'https://andrelau11.github.io/Personal_Portfolio/',
    sourceLink: 'https://github.com/AndreLau11/Personal_Portfolio',
  },
  {
    id: 5,
    name: 'My Product',
    description:
      'A website that gives out and promotes the product to get it sell on the market.',
    feature: 'A publicitary page that shows the best sides of the product',
    image: './images/project/images/myProduct.jpg',
    technologies: ['HTML', 'inline CSS'],
    liveVersionLink: 'https://andrelau11.github.io/My_Product/',
    sourceLink: 'https://github.com/AndreLau11/My_Product',
  },
];

function LoadProjects() {
  let counter;
  for (counter = 0; counter < projectInformation.length; counter += 1) {
    cardContainer.innerHTML += `<div class="projectsection${[counter]}">
        <h2 class="projecttitle">${projectInformation[counter].name}</h2>
        <p class="projectparagraph">${
  projectInformation[counter].description
}</p>
        <ul class="skill">
            <li><a href=""><img class="skill-image-tag" src="./images/project/Tag0.png"
                        alt="Rubi legend, as reference of the back end language used on the project"></a>
            </li>
            <li><a href=""><img class="skill-image-tag" src="./images/project/Tag1.png"
                        alt="Bootstrap legend, as reference of the tool used for styling the page"></a></li>
            <li><a href=""><img class="skill-image-tag" src="./images/project/Tag2.png"
                        alt="HTML legend, as reference of the coding used on the front end"></a></li>
        </ul>
        <button data-target="${
  projectInformation[counter].id
}" type="submit" class="projectbutton">See Project</button>
    </div>`;
  }

  function hideModal() {
    popUp.innerHTML = '';
    popUp.classList.add('hidden');
    generalDocument.classList.remove('scroll-null');
  }

  function showModal(button) {
    const pId = button.target.getAttribute('data-target');
    const project = projectInformation.filter(
      (p) => parseInt(p.id, 10) === parseInt(pId, 10),
    );

    popUp.innerHTML = `<div class="projectdetails">
            <div class="projectdetails-title">
                <h3 id="popUpTitle" class="pop-title">${project[0].name}</h3>
                <p id="popUpClose"><img id="popUpCloseImage" src="./images/icn-close.svg" alt="Exit Icon"></p>
            </div>
            <div>
                <ul class="projectdetails-skills">
                    <li><a href="#"><img src="./images/popup/Tag0.svg" alt="HTLM icon that leads to the html code"></a>
                    </li>
                    <li><a href="#"><img src="./images/popup/Tag1.svg"
                                alt="Bootstrap icon that leads to the bootstrap format used on the project"></a></li>
                    <li><a href="#"><img src="./images/popup/Tag2.svg"
                                alt="Ruby on Rails icon that leads to the code on this lenguage that was used on the project"></a>
                    </li>
                </ul>
            </div>
            <div class="projectdetails-content">
                <div class="projectdetails-image">
                    <img class="pop-img" width="100%" src="${project[0].image}"
                        alt="A half scrren image that shows the first impresion of the results after the coding implementation">
                </div>
                <div class="projectdetails-body">
                    <p class="pop-paragraph">${project[0].description}</p>
                    <p class="anchorarea">  
                      <a class="anchorbtn" id="projectDetailButtonLive" href = ${project[0].liveVersionLink} target="_blank">See Live <img src="./images/popup/Icon-see-live.svg" alt=""></a>
                      <a class="anchorbtn" id="projectDetailButtonSource" href =${project[0].sourceLink} target="_blank">See Source <img src="./images/popup/Vector.svg" alt=""></a>
                    </p>
                </div>
            </div>
        </div>`;

    popUp.classList.remove('hidden');
    const popUpClose = document.getElementById('popUpClose');
    popUpClose.addEventListener('click', hideModal);
    generalDocument.classList.add('scroll-null');
  }

  let i;
  for (i = 0; i < buttons.length; i += 1) {
    buttons[i].addEventListener('click', showModal.bind(buttons[i]));
  }

  // HAMBURGER MENU//

  function showNavbar() {
    mobileNav.classList.remove('hidden');
    navOpen.classList.add('hidden');
  }

  function hideNavbar() {
    mobileNav.classList.add('hidden');
    navOpen.classList.remove('hidden');
  }

  navOpen.addEventListener('click', showNavbar);
  navClose.addEventListener('click', hideNavbar);
  navPortfolio.addEventListener('click', hideNavbar);
  navAbout.addEventListener('click', hideNavbar);
  navContact.addEventListener('click', hideNavbar);
  const storybutton = document.getElementById('storybottonAction');
  const storypopup = document.getElementById('popUp-slicestory');
  const storyClose = document.getElementById('popUpClosehistory');
  function showPopUp() {
    storypopup.classList.remove('hidden');
    generalDocument.classList.add('scroll-null');
  }
  function hidePopUp() {
    storypopup.classList.add('hidden');
    generalDocument.classList.remove('scroll-null');
  }
  storybutton.addEventListener('click', showPopUp);
  storyClose.addEventListener('click', hidePopUp);
}

document.addEventListener('DOMContentLoaded', LoadProjects, false);

const form = document.getElementById('contactMe');
const erroMessageContainer = document.getElementById('error_message');
const message = 'Email address should be in lowercase letters only.';
const inpuEmail = document.getElementById('email');

form.addEventListener('submit', (event) => {
  const regix = /[A-Z]/;

  if (regix.test(inpuEmail.value)) {
    erroMessageContainer.innerHTML = message;
    erroMessageContainer.classList.remove('hidden');
    event.preventDefault();
  } else if (!erroMessageContainer.classList.classname === 'hidden') {
    erroMessageContainer.classList.add('hidden');
  }
});
