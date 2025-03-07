const menu = {
  menuBut: document.querySelector('.mobile-menu'),
  blackBox: document.querySelector('.black-box'),
  closed: document.querySelector('.close-menu'),
  open () {
    this.menuBut.addEventListener('click', () => {
      this.blackBox.classList.remove('is-hidden')
      document.body.classList.add('open')
    })
  },
  close () {
    this.closed.addEventListener('click', () => {
      this.blackBox.classList.add('is-hidden')
      document.body.classList.remove('open')
    })

    this.blackBox.addEventListener('click', () => {
      this.blackBox.classList.add('is-hidden')
      document.body.classList.remove('open')
    })
  },
};

menu.open();
menu.close();
