const calculator = [
  calcBut = document.querySelector('.calculator'),
  modal = document.querySelector('.modal-calc'),
  clos = document.querySelector('.window-closed')
];

const contact = [
  but = document.querySelector('.phone-butt'),
  modal = document.querySelector('.black-box-contacts'),
  clos = document.querySelector('.modal-closed')
];

// FUNCTION
function openCalculator () {
  calculator[1].classList.toggle('not-demonstrate')
  document.body.classList.toggle('open')
}

function openContacts () {
  contact[1].classList.toggle('is-hidden')
  document.body.classList.toggle('open')
}

// CLICK
calculator[0].addEventListener('click', openCalculator);
calculator[2].addEventListener('click', openCalculator);

contact[0].addEventListener('click', openContacts);
contact[2].addEventListener('click', openContacts) 