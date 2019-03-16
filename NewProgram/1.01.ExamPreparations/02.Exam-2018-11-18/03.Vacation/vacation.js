class Vacation {
    constructor(organizer, destination, budget) {
        this.kids = {};
        this.organizer = organizer;
        this.destination = destination;
        this.budget = budget;
    }


    get organizer() {
        return this._organizer;
    }

    set organizer(value) {
        if(typeof value !== 'string') {
            throw TypeError('Organizer must be string');
        }

        if(value.length <= 0) {
            throw Error('Organizer must not be empty string');
        }

        this._organizer = value;
    }

    get destination() {
        return this._destination;
    }

    set destination(value) {
        if(typeof value !== 'string') {
            throw TypeError('Destination must be string');
        }

        if(value.length <= 0) {
            throw Error(' Destination must not be empty string');
        }
        this._destination = value;
    }

    get budget() {
        return this._budget;
    }

    set budget(value) {
        if(isNaN(value)) {
            throw TypeError('Budget must be number');
        }

        if(value < 0) {
            throw RangeError('Budget must be 0 or more');
        }

        this._budget = value;
    }

    registerChild(name, grade, budget) {
        if (this.budget > budget) {
            return `${name}'s money is not enough to go on vacation to ${this.destination}.`
        }

        if(!this.kids.hasOwnProperty(grade)) {
            this.kids[grade] = [];
        }

        if(this._searchForKid(name, grade)) {
            return `${name} is already in the list for this ${this.destination} vacation.`;
        }

        this.kids[grade].push(`${name}-${budget}`);

        return this.kids[grade];
    }

    _searchForKid(name, grade) {
        let isKidFound = false;
        if (this.kids.hasOwnProperty(grade)) {
            for (const kid of this.kids[grade]) {
                if(kid.indexOf(name) > -1) {
                    isKidFound = true;
                }
            }
        }

        return isKidFound;
    }

    removeChild(name, grade){
        if(!this._searchForKid(name, grade)) {
            return `We couldn't find ${name} in ${grade} grade.`;
        }

        let index = 0;
        for (const kid of this.kids[grade]) {
            let args = kid.split('-');
            let kidName = args[0];
            if(kidName === name) {
               this.kids[grade].splice(index, 1);
               break;
            }
            index++;
        }

        return this.kids[grade];
    }

    toString() {
        // TODO:
    }

    get numberOfChildren() {
        let counter = 0;
        for (const grade in this.kids) {
            counter += this.kids[grade].length;
        }

        return counter;
    }

}

// TEST 1:

// let vacation = new Vacation('Mr Pesho', 'San marko', 2000);
//
// console.log(vacation.registerChild('Gosho', 5, 2000)); // [ 'Gosho-2000' ]
// console.log(vacation.registerChild('Lilly', 6, 2100)); // [ 'Lilly-2100' ]
// console.log(vacation.registerChild('Pesho', 6, 2400)); // [ 'Lilly-2100', 'Pesho-2400' ]
// console.log(vacation.registerChild('Gosho', 5, 2000)); // Gosho is already in the list for this San diego vacation.
// console.log(vacation.registerChild('Tanya', 5, 6000)); // [ 'Gosho-2000', 'Tanya-6000' ]
// console.log(vacation.registerChild('Mitko', 10, 1590)); // Mitko's money is not enough to go on vacation to San diego.
//
// console.log(vacation.removeChild('Gosho', 5));
// TEST 2:
//
let vacation = new Vacation('Mr Pesho', 'San diego', 2000);
vacation.registerChild('Gosho', 5, 2000);
vacation.registerChild('Lilly', 6, 2100);

console.log(vacation.removeChild('Gosho', 9));

vacation.registerChild('Pesho', 6, 2400);
vacation.registerChild('Gosho', 5, 2000);

console.log(vacation.removeChild('Lilly', 6));
console.log(vacation.registerChild('Tanya', 5, 6000))

console.log(vacation.numberOfChildren);

// We couldn't find Gosho in 9 grade.
//     [ 'Pesho-2400' ]
//     [ 'Gosho-2000', 'Tanya-6000' ]

// TEST 3:
// let vacation = new Vacation('Miss Elizabeth', 'Dubai', 2000);
//
// vacation.registerChild('Gosho', 5, 3000);
// vacation.registerChild('Lilly', 6, 1500);
// vacation.registerChild('Pesho', 7, 4000);
// vacation.registerChild('Tanya', 5, 5000);
// vacation.registerChild('Mitko', 10, 5500);
//
// console.log(vacation.toString());

// Miss Elizabeth will take 4 children on trip to Dubai
// Grade: 5
// 1. Gosho-3000
// 2. Tanya-5000
//
// Grade: 7
// 1. Pesho-4000
//
// Grade: 10
// 1. Mitko-5500