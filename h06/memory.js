const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');

    if (!hasFlippedCard) {
        //eerste klik
        hasFlippedCard = true;
        firstCard = this;

        return;
    }
    //tweede klik
    secondCard = this;

    checksMatch();
}

function checksMatch() {
    //matchen de kaarten?
    let isMatch = firstCard.dataset.name  === secondCard.dataset.name;

    isMatch ? disableCards() : unflippedCards();
}

function disableCards() {
    //het is een match
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

function unflippedCards() {
    lockBoard = true;

    //geen match
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1500);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffle() {
    cards.forEach(card => {
        let randomPosition = Math.floor(Math.random() * 18);
        card.style.order = randomPosition;
    });
})();

cards.forEach(card => card.addEventListener('click', flipCard));