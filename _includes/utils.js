var cards = document.querySelectorAll('.card');

console.log(cards);

for (i = 0; i < cards.length; ++i) {
    let card = cards[i];
    
    card.addEventListener('mouseover', function (e) {
        console.log(card.classList); 
        if (card.classList.contains('flipped')) {
            card.classList.remove('flipped');
        } else {
            card.classList.add('flipped');
        }
    });
}
