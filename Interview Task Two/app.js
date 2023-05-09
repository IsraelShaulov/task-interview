const btn = document.querySelector('.btn');
let timeoutId;

function rollTheDice() {
  let dice = document.querySelector('.img1');
  dice.setAttribute('src', 'diceroll.gif');

  let result = document.querySelector('h1');
  result.innerHTML = '';

  if (timeoutId) {
    clearTimeout(timeoutId);
  }

  timeoutId = setTimeout(() => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    if (randomNumber === 2 || randomNumber === 6) {
      dice.setAttribute('src', 'dice' + randomNumber + '.png');
      result.innerHTML = 'You rolled a ' + randomNumber + '!';
    } else {
      rollTheDice();
    }
  }, 1500);
}

btn.addEventListener('click', rollTheDice);
