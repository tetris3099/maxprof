// PRICES
const cardBox = document.querySelector('.price-repair');

const cardRadio = {
 radioOne: document.getElementById('card-radio-one'),
 radioTwo: document.getElementById('card-radio-two'),
 radioThree: document.getElementById('card-radio-three'),
 radioFour: document.getElementById('card-radio-four'),
};

// DISCOUNT
const discountBox = document.querySelector('.discount-carousel');

const discountRadio = {
  radioOne: document.getElementById('discount-one'),
  radioTwo: document.getElementById('discount-two'),
  radioThree: document.getElementById('discount-three'),
}

// video
 const videoBox = document.getElementById('respons-list');

 const videoRadio = {
  radioOne: document.getElementById('video-radio-one'),
  radioTwo: document.getElementById('video-radio-two'),
  radioThree: document.getElementById('video-radio-three'),
  radioFour: document.getElementById('video-radio-four'),
 }

// Function
const clickScrol = (element, cardConteiner, x) => {
  const BoxWidth = cardConteiner.scrollWidth - cardConteiner.clientWidth;
  const res = (x * BoxWidth) / 100;

  element.addEventListener('click', function name() {
  cardConteiner.scrollTo(res, 0)})
};

clickScrol(cardRadio.radioOne, cardBox, 0);
clickScrol(cardRadio.radioTwo, cardBox, 36);
clickScrol(cardRadio.radioThree, cardBox, 71);
clickScrol(cardRadio.radioFour, cardBox, 100);

clickScrol(discountRadio.radioOne, discountBox, 0);
clickScrol(discountRadio.radioTwo, discountBox, 50);
clickScrol(discountRadio.radioThree, discountBox, 100);

clickScrol(videoRadio.radioOne, videoBox, 0);
clickScrol(videoRadio.radioTwo, videoBox, 33.3);
clickScrol(videoRadio.radioThree, videoBox, 66.6);
clickScrol(videoRadio.radioFour, videoBox, 100);

// discountRadio.radioTwo.addEventListener('click', () => {
//   const BoxWidth = discountBox.scrollWidth - discountBox.clientWidth;
  
//   const procent = (50 * BoxWidth) / 100;

//   discountBox.scrollTo(procent, 0);
// });


const radioIconManagement = ({cartConteiner, object, numbers} =settingObject) => {
  cartConteiner.addEventListener('scroll', iconShow);

  function iconShow () {
    const BoxScrolled = Number(cartConteiner.scrollLeft.toFixed(0));
    const BoxWidth = cartConteiner.scrollWidth - cartConteiner.clientWidth;
    const res = Number(((BoxScrolled / BoxWidth) * 100).toFixed(0));

    const destruct = () => {
      if (numbers.length === 4) { 
        threeRadio();
      } else if (numbers.length === 5) {
        fourRadio();
      } else if (numbers.length === 6) {
        fiveRadio();
      }
    };

    destruct();

    function threeRadio ({radioOne, radioTwo, radioThree} = object) {
      if(res > numbers[0] && res < numbers[1]) {
        radioOne.classList.add('check');
        radioTwo.classList.remove('check');
        radioThree.classList.remove('check');
      } else if(res > numbers[1] && res < numbers[2]) {
        radioTwo.classList.add('check');
        radioOne.classList.remove('check');
        radioThree.classList.remove('check');
      } else if(res > numbers[2] && res < numbers[3]) {
        radioThree.classList.add('check');
        radioOne.classList.remove('check');
        radioTwo.classList.remove('check');
      }
    };

    function fourRadio ({radioOne, radioTwo, radioThree, radioFour} = object)  {
      if(res > numbers[0] && res < numbers[1]) {
        radioOne.classList.add('check');
        radioTwo.classList.remove('check');
        radioThree.classList.remove('check');
        radioFour.classList.remove('check');
      } else if(res > numbers[1] && res < numbers[2]) {
        radioTwo.classList.add('check');
        radioFour.classList.remove('check');
        radioThree.classList.remove('check');
        radioOne.classList.remove('check');
      } else  if(res > numbers[2] && res < numbers[3]) {
        radioThree.classList.add('check');
        radioOne.classList.remove('check');
        radioTwo.classList.remove('check');
        radioFour.classList.remove('check');
      }  else if(res > numbers[3] && res < numbers[4]) {
        radioFour.classList.add('check');
        radioThree.classList.remove('check');
        radioTwo.classList.remove('check');
        radioOne.classList.remove('check');
      }
    };

    function fiveRadio ({radioOne, radioTwo, radioThree, radioFour, radioFive} = object) {
      if(res > 85 && res < 100) {
        radioFour.classList.add('check');
        radioThree.classList.remove('check');
        radioTwo.classList.remove('check');
        radioOne.classList.remove('check');
      } else  if(res > 50 && res < 85) {
        radioThree.classList.add('check');
        radioOne.classList.remove('check');
        radioTwo.classList.remove('check');
        radioFour.classList.remove('check');
      } else if(res > 12 && res < 49) {
        radioTwo.classList.add('check');
        radioFour.classList.remove('check');
        radioThree.classList.remove('check');
        radioOne.classList.remove('check');
      } else if(res > 0 && res < 12) {
        radioOne.classList.add('check');
        radioTwo.classList.remove('check');
        radioThree.classList.remove('check');
        radioFour.classList.remove('check');
      } else if(res > 0 && res < 12) {
        radioFive.classList.add('check');
        radioOne.classList.remove('check');
        radioTwo.classList.remove('check');
        radioThree.classList.remove('check');
        radioFour.classList.remove('check');
      }
    };
  };
};

const cartPatterOne = {
  cartConteiner: discountBox,
  object: discountRadio,
  numbers: [0, 26, 75, 100],
}

const cartPatterTwo = {
  cartConteiner: cardBox,
  object: cardRadio,
  numbers: [0, 12, 50, 85, 100],
};

const cartPatterThree = {
  cartConteiner: videoBox,
  object: videoRadio,
  numbers: [0, 12, 50, 85, 100],
};

radioIconManagement(cartPatterTwo);
radioIconManagement(cartPatterOne);
radioIconManagement(cartPatterThree);

const butCards = {
  buttOne: document.getElementById('butt-card-one'),
  buttTwo: document.getElementById('butt-card-two'),
  buttThree: document.getElementById('butt-card-three'),
  buttFour: document.getElementById('butt-card-four'),
};

const clickButt = (click) => {
  click.addEventListener('click', whatButton)
  const {buttOne, buttTwo, buttThree, buttFour} = butCards;
  function whatButton () {
    if (click === buttOne) {
      buttOne.textContent = '90 999 грн';
    } else if (click === buttTwo) {
      buttTwo.textContent = '150 000 грн';
    } else if (click === buttThree) {
      buttThree.textContent = '185 000 грн';
    } else if (click === buttFour) {
      buttFour.textContent = '237 000 грн';
    }
  }
};

clickButt(butCards.buttOne);
clickButt(butCards.buttTwo);
clickButt(butCards.buttThree);
clickButt(butCards.buttFour);


// TO TOP
const toTopButt = document.querySelector('.to-top');

const hide = () => {
  if (window.scrollY > 1000) {
    toTopButt.classList.remove('is-hidden')
  } else if (window.scrollY < 1000) {
    toTopButt.classList.add('is-hidden')
  }
};

window.addEventListener('scroll', hide);

toTopButt.addEventListener('click', function name() {
  window.scrollTo(0, 0)
});