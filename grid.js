const elementGrid = [
  document.getElementById('el-grid-one'),
  document.getElementById('el-grid-two'),
  document.getElementById('el-grid-three'),
  document.getElementById('el-grid-four'),
  document.getElementById('el-grid-five'),
];

function gridClick (element) {
  element.addEventListener('click', addRemoveClass);
  function addRemoveClass () {
    if (element === elementGrid[0]) {
      elementGrid[1].classList.remove('icon__accent')
      elementGrid[2].classList.remove('icon__accent')
      elementGrid[3].classList.remove('icon__accent')
      elementGrid[4].classList.remove('icon__accent')
    } else if (element === elementGrid[1]) {
      elementGrid[0].classList.remove('icon__accent')
      elementGrid[2].classList.remove('icon__accent')
      elementGrid[3].classList.remove('icon__accent')
      elementGrid[4].classList.remove('icon__accent')
    } else if (element === elementGrid[2]) {
      elementGrid[0].classList.remove('icon__accent')
      elementGrid[1].classList.remove('icon__accent')
      elementGrid[3].classList.remove('icon__accent')
      elementGrid[4].classList.remove('icon__accent')
    } else if (element === elementGrid[3]) {
      elementGrid[0].classList.remove('icon__accent')
      elementGrid[1].classList.remove('icon__accent')
      elementGrid[2].classList.remove('icon__accent')
      elementGrid[4].classList.remove('icon__accent')
    } else if (element === elementGrid[4]) {
      elementGrid[0].classList.remove('icon__accent')
      elementGrid[1].classList.remove('icon__accent')
      elementGrid[2].classList.remove('icon__accent')
      elementGrid[3].classList.remove('icon__accent')
    }

    element.classList.add('icon__accent')
  }
};
   
gridClick(elementGrid[0]);
gridClick(elementGrid[1]);
gridClick(elementGrid[2]);
gridClick(elementGrid[3]);
gridClick(elementGrid[4]);

const imegesGrid = [
  document.getElementById('grid-imege-one'),
  document.getElementById('grid-imege-two'),
  document.getElementById('grid-imege-three'),
  document.getElementById('grid-imege-four'),
  document.getElementById('grid-imege-five'),
];

const radioGrid = [
  document.querySelector('.apartament-one'),
  document.querySelector('.apartament-two'),
  document.querySelector('.apartament-three'),
  document.querySelector('.apartament-four'),
  document.querySelector('.apartament-five'),
  document.querySelector('.apartament-six'),
  document.querySelector('.apartament-seven'),
];

const infoElement = [
 document.getElementById('portfolio-price'),
 document.getElementById('portfolio-square'),
 document.getElementById('portfolio-term'),
 document.getElementById('portfolio-rooms'),
 document.getElementById('portfolio-address'),
];



function radioGridClick (radio) {
  radio.addEventListener('click', radioClick);


  function radioClick () {
    if (radio === radioGrid[0] || radio === radioGrid[3] || radio === radioGrid[6]) {
      imegesGrid[0].src ='./imeges/apartamentOne/1.jpg';
      imegesGrid[1].src ='./imeges/apartamentOne/2.jpg';
      imegesGrid[2].src ='./imeges/apartamentOne/3.jpg';
      imegesGrid[3].src ='./imeges/apartamentOne/4.jpg';
      imegesGrid[4].src ='./imeges/apartamentOne/5.jpg';

      infoElement[0].textContent = '100 250 грн.';
      infoElement[1].textContent = '43 м2';
      infoElement[2].textContent = '90 днів'
      infoElement[3].textContent = '2';
      infoElement[4].textContent = 'Лісова 17';
    } else if (radio === radioGrid[1] || radio === radioGrid[5]) {
      imegesGrid[0].src = './imeges/apartamentTwo/1.jpg';
      imegesGrid[1].src = './imeges/apartamentTwo/2.jpg';
      imegesGrid[2].src = './imeges/apartamentTwo/3.jpg';
      imegesGrid[3].src = './imeges/apartamentTwo/4.jpg';
      imegesGrid[4].src = './imeges/apartamentTwo/5.jpg';

      infoElement[0].textContent = '152 750 грн.';
      infoElement[1].textContent = '61 м2';
      infoElement[2].textContent = '120 днів';
      infoElement[3].textContent = '2';
      infoElement[4].textContent = 'Ділова 121';
    } else if (radio === radioGrid[2] || radio === radioGrid[4]) {
      imegesGrid[0].src = './imeges/apartamentThree/1.jpg';
      imegesGrid[1].src = './imeges/apartamentThree/2.jpg';
      imegesGrid[2].src = './imeges/apartamentThree/3.jpg';
      imegesGrid[3].src = './imeges/apartamentThree/4.jpg';
      imegesGrid[4].src = './imeges/apartamentThree/5.jpg';

      infoElement[0].textContent = '272 500 грн.';
      infoElement[1].textContent = '103 м2';
      infoElement[2].textContent = '150 днів'
      infoElement[3].textContent = '3';
      infoElement[4].textContent = 'Яворницького 31а';
    }
}};

radioGridClick(radioGrid[0]);
radioGridClick(radioGrid[1]);
radioGridClick(radioGrid[2]);
radioGridClick(radioGrid[3]);
radioGridClick(radioGrid[4]);
radioGridClick(radioGrid[5]);
radioGridClick(radioGrid[6]);
