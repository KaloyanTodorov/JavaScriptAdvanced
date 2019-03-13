function makeCard (face, suit) {
    const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
    const validSuits = [ 'S', 'H', 'C', 'D' ];

    if(validFaces.indexOf(face) < 0) {
        throw Error("Error");
    }

    if(validSuits.indexOf(suit) < 0) {
        throw Error("Error");
    }

    let updatedSuit = {
        'S' : '\u2660',
        'H' : '\u2665',
        'D' : '\u2666',
        'C' : '\u2663',
    }

    let card = {
        face,
        suit: updatedSuit[suit],
        toString: function() {
            return `${this.face}${this.suit}`;
        }
    }

    return card.toString();
}

// console.log('' + makeCard('A', 'S'));
// console.log('' + makeCard('10', 'H'));
console.log('' + makeCard(1, 'S'));