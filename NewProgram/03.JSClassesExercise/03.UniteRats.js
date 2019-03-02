class Rat {
    constructor(name) {
        this.name = name;
        this.unitedRats = [];
    }

    getRats() {
        return this.unitedRats;
    }

    unite(otherRat) {
        if(otherRat instanceof Rat) {
            this.unitedRats.push(otherRat);
        }
    }

    toString() {
        let str = this.name + '\n';
        if(this.unitedRats.length > 0) {
            this.unitedRats.forEach(rat => {
                str += `##${rat}`
            });
        }
        return str;
    }
}


// let test = new Rat("Pesho");
// console.log(test.toString()); //Pesho

// console.log(test.getRats()); //[]

// test.unite(new Rat("Gosho"));
// test.unite(new Rat("Sasho"));
// console.log(test.getRats());
// //[ Rat { name: 'Gosho', unitedRats: [] },
// //  Rat { name: 'Sasho', unitedRats: [] } ]

// console.log(test.toString());
// // Pesho
// // ##Gosho
// // ##Sasho


let rat2 = new Rat("Viktor");
let rat3 = new Rat("Vichi");
// let rat4 = "fake rat";

rat2.unite(rat3);
// rat2.unite(rat4);