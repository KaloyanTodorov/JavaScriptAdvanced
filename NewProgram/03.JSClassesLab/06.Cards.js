const cards = (function() {
    class Card {
        constructor(face, suit) {
            this.face = face;
            this.suit = suit;
        }

        get face() {
            return this._face;
        }

        get suit() {
            return this._suit;
        }

        set face(checkFace) {
            switch(checkFace) {
                case '2':
                case '3':
                case '4':
                case '5':
                case '6':
                case '7':
                case '8':
                case '9':
                case '10':
                case 'J':
                case 'Q':
                case 'K':
                case 'A':
                    this._face = checkFace;
                    break;
                default:
                    throw new Error("Face is not correct");
            }
        }

        set suit(checkSuit) {
            switch(checkSuit) {
                case '♠':
                case '♥':
                case '♦':
                case '♣':
                    this._suit = checkSuit;
                    break;
                default:
                    throw new Error("Suit is not correct!");
            }
        }
    }

    const Suits = {
        SPADES: '♠',
        HEARTS: '♥',
        DIAMONDS: '♦',
        CLUBS: '♣',
    }

    return {
        Suits,
        Card
    }
})()

const Card = cards.Card;
const Suits = cards.Suits;

let card = new Card('Q', Suits.CLUBS);
// console.log(card.face)
// card.face = 'A';
// card.suit = Suits.DIAMONDS;
// console.log(card.suit);
card._face = 'J'
console.log(card.face);

// let card2 = new Card('2', 'as');
// console.log(card2.face)
