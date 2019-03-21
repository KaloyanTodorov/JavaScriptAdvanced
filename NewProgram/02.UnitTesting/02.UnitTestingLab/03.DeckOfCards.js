function printDeckOfCards(cards) {
    function makeCard (face, suit) {
        const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
        const validSuits = [ 'S', 'H', 'C', 'D' ];
    
        if(validFaces.indexOf(face) < 0) {
            throw (`${face}${suit}`);
        }
    
        if(validSuits.indexOf(suit) < 0) {
            throw (`${face}${suit}`);
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

    try {
        let newCardsArray = [];
        cards.forEach(card => {
            const suit = card.slice(card.length - 1);
            const face = card.slice(0, card.length - 1);
            
            newCardsArray.push(makeCard(face, suit));
    
        });
    
        console.log(newCardsArray.join(' '));
    } catch (e) {
        console.log(`Invalid card: ${e}`);
    }
    
  }

  printDeckOfCards(['AS', '10D', 'KH', '2C']);  // A♠ 10♦ K♥ 2♣
  printDeckOfCards(['5S', '3D', 'QD', '1C']);   // Invalid card: 1C

