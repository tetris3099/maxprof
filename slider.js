const slider = document.querySelector('input[data-slider]');

function colorSlider () {
  document.getElementById('i').innerText = this.value;
// меняет цвет полосы
  const a = slider.value / 1.5;
  const color = `linear-gradient(to right, #2D4872 ${a}%,#d1d1d1 ${a}%)`;
  slider.style.background = color;
}

slider.addEventListener('input', colorSlider);


// метод работает только с мышкой
// slider.addEventListener('mousemove', function name () {
//   const a = slider.value / 1.5;
//   const color = `linear-gradient(to right, #2D4872 ${a}%,#d1d1d1 ${a}%)`;
//   slider.style.background = color;
// });