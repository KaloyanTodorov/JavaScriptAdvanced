let manager2 = (function(){
    let ingredients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    const recipes = {
        apple: { carbohydrate: 1, flavour: 2 },
        coke: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        omelet: { protein: 5, fat: 1, flavour: 1 },
        cheverme: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    }

    let prepareRecipe = (recipe, neededQty) => {
        let ingredientsNeeded = Object.entries(recipes[recipe]);

        for (const [ing, qty] of ingredientsNeeded) {
            const ingredientsStored = ingredients[ing] * neededQty;
            if(qty > ingredientsStored) {
                return `Error: not enough ${ing} in stock`
            }
        }

        for (const [ing, qty] of ingredientsNeeded) {
            ingredients[ing] -= qty * neededQty;
        }

        return "Success";
    }

    return function (input) {
        if(input) {
            const args = input.split(' ');
            const command = args[0];
    
            if(command === 'restock') {
                ingredients[args[1]] += Number(args[2]);
                return "Success";
            } else if(command === 'prepare') {
                return prepareRecipe(args[1], Number(args[2]))
            } else if(command === 'report') {
                return Object.entries(ingredients)
                            .map(kvp => `${kvp[0]}=${kvp[1]}`)
                            .join(' ');
            }
        }
    }
})()

// console.log(manager("restock flavour 50")); // Success
// manager("prepare coke 4"); 

// let manager2 = solution();
console.log(manager2("restock carbohydrate 10"));
console.log(manager2("restock flavour 10"));
console.log(manager2("prepare apple 1"));
console.log(manager2("restock fat 10"));
console.log(manager2("prepare burger 1"));
console.log(manager2("report"));