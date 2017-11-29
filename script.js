var m;
var overlay  

window.onload = () => {
  m = new MersenneTwister();
  overlay = document.getElementById('overlay');

  var diceContainer = document.querySelector('main');
  var dice = diceContainer.querySelectorAll('.die');

  overlay.addEventListener('click', hideOverlay, false);

  for(var i = 0; i < dice.length; i++) {
    dice[i].addEventListener('click', beginDiceRoll, false);
  }

};

function beginDiceRoll(e) {
  alert('clicked');
  var el = e.target;
  var min = 1;
  var max = parseInt(el.dataset.die);

  showOutput(Math.round(m.random() * (max - min) + min));
}

function showOutput(num) {
  var output = 'You rolled a ' + num + '!'
  overlay.querySelector('span').innerHTML = output;
  overlay.classList.add('visible');
}

function hideOverlay() {
  overlay.classList.remove('visible');
}