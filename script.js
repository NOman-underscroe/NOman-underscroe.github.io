document.addEventListener('DOMContentLoaded', () => {
  const cardSymbols = ['🍎', '🍌', '🍒', '🍇', '🍉', '🍓', '🍍', '🥥'];
  let cards = [...cardSymbols, ...cardSymbols];
  let gameBoard = document.getElementById('game-board');
  let moveCounter = document.getElementById('move-counter');
  let timer = document.getElementById('timer');
  let resetButton = document.getElementById('reset-button');
  let message = document.getElementById('message'); // new

  let firstCard = null;
  let secondCard = null;
  let moves = 0;
  let matchCount = 0;
  let timerInterval = null;
  let seconds = 0;

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function startTimer() {
    timerInterval = setInterval(() => {
      seconds++;
      timer.textContent = seconds;
    }, 1000);
  }

  function stopTimer() {
    clearInterval(timerInterval);
  }

  function resetGame() {
    gameBoard.innerHTML = '';
    cards = [...cardSymbols, ...cardSymbols];
    shuffle(cards);
    cards.forEach(symbol => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.dataset.symbol = symbol;
      card.addEventListener('click', onCardClick);
      gameBoard.appendChild(card);
    });
    moves = 0;
    matchCount = 0;
    firstCard = null;
    secondCard = null;
    moveCounter.textContent = moves;
    seconds = 0;
    timer.textContent = seconds;
    stopTimer();
    startTimer();
    message.textContent = ''; // reset message
  }

  function onCardClick(e) {
    const clickedCard = e.target;
    if (clickedCard === firstCard || clickedCard.classList.contains('flipped')) return;

    clickedCard.textContent = clickedCard.dataset.symbol;
    clickedCard.classList.add('flipped');

    if (!firstCard) {
      firstCard = clickedCard;
    } else {
      secondCard = clickedCard;
      moves++;
      moveCounter.textContent = moves;
      if (firstCard.dataset.symbol === secondCard.dataset.symbol) {
        matchCount++;
        if (matchCount === cardSymbols.length) {
          stopTimer();
          message.textContent = 'You won!'; // show "You won!" message
          message.style.color = 'green'; // make the message green
        }
        firstCard = null;
        secondCard = null;
      } else {
        setTimeout(() => {
          firstCard.textContent = '';
          secondCard.textContent = '';
          firstCard.classList.remove('flipped');
          secondCard.classList.remove('flipped');
          firstCard = null;
          secondCard = null;
        }, 1000);
      }
    }
  }

  resetButton.addEventListener('click', resetGame);
  resetGame();
});
