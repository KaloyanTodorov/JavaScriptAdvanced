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

        set face(face) {
            switch(face) {
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
                    this._face = face;
                    break;
                default:
                    throw new Error("Face is not correct");
            }
        }

        set suit(suit) {
            switch(suit) {
                case '♠':
                case '♥':
                case '♦':
                case '♣':
                    this._suit = suit;
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
console.log(card.face)
card.face = 'A';
card.suit = Suits.DIAMONDS;
console.log(card.suit);
console.log(card.face);
card.suit;

let card2 = new Card('7', 'as');
console.log(card2.suit)
