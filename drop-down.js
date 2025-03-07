// DROP-DOWN
const dropDownOne = document.getElementById('drop-down-one').addEventListener('click', () => {
  document.getElementById('title-one').classList.toggle('dismantling')
  document.getElementById('icon-drop-off').classList.toggle('dropdown-mod')
  document.getElementById('icon-drop-on').classList.toggle('dropdown-mod')
  document.getElementById('dropdown-list').classList.toggle('dropdown-open')
  document.getElementById('card-one').classList.toggle('dropdown-cart')
});

const dropDownTwo = {
  open: document.getElementById('drop-down-two'),
  card: document.getElementById('card-two'),
  list: document.getElementById('dropdown-list-two'),
  dimString: document.getElementById('dim-two'),
  iconDim: document.getElementById('dim-icon-two'),
  iconOn: document.getElementById('icon-drop-on-two'),
  iconOff: document.getElementById('icon-drop-off-two'),
};

const dropDownThree = {
  open: document.getElementById('drop-down-three'),
  card: document.getElementById('card-three'),
  list: document.getElementById('dropdown-list-three'),
  dimString: document.getElementById('dim-three'),
  iconDim: document.getElementById('dim-icon-three'),
  iconOn: document.getElementById('icon-drop-on-three'),
  iconOff: document.getElementById('icon-drop-off-three'),
  string: document.getElementById('repeir-string-three'),
};

const dropDownFour = {
  open: document.getElementById('drop-down-four'),
  card: document.getElementById('card-four'),
  list: document.getElementById('dropdown-list-four'),
  dimString: document.getElementById('dim-four'),
  iconDim: document.getElementById('dim-icon-four'),
  iconOn: document.getElementById('icon-drop-on-four'),
  iconOff: document.getElementById('icon-drop-off-four'),
  string: document.getElementById('repeir-string-four'),
};

const showList =  ({open, card, list, dimString, iconDim, iconOn, iconOff} = object) => {
  open.addEventListener('click', () => {
    dimString.classList.toggle('flashing')
    iconDim.classList.toggle('flashing')
    iconDim.classList.toggle('icons')
    iconOff.classList.toggle('dropdown-mod')
    iconOn.classList.toggle('dropdown-mod')
    list.classList.toggle('dropdown-open')
    card.classList.toggle('dropdown-cart')
  })
};

const showString = ({open, string} = object) => {
  open.addEventListener('click', () => {
    string.classList.toggle('dropdown')
  })
};

showList(dropDownTwo);
showList(dropDownThree);
showString(dropDownThree);
showList(dropDownFour);
showString(dropDownFour);


// const dimElement = ({open, dimString} = object) => {
//   open.addEventListener('click', () => {
//     dimString.document.style = 'color: teal;'
//   })
// };