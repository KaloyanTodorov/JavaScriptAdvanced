let manager2 = (function(){
   let ingredients = {
    protein: 0,
    carbohydrate : 0,
    fat: 0,
    flavour: 0
   }

   let mealsRecipes = {
       apple: { carbohydrate: 1, flavour: 2 },
       coke: { carbohydrate: 10, flavour: 20 },
       burger: { carbohydrate: 5, fat: 7, flavour: 3 },
       omelet: { protein: 5, fat: 1, flavour: 1 },
       cheverme: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    }
    
    let prepare = (meal, qty) => {
        let currentMeal = Object.assign({}, mealsRecipes[meal]);
        for (const key in currentMeal) {
            if(ingredients[key] < qty * currentMeal[key]) {
                return `Error: not enough ${key} in stock`;
            }
        }
 
        for(const key in currentMeal) {
            ingredients[key] -= Number(qty * currentMeal[key]);
        }
        return "Success";
    }

   return function (input) {
    const tokens = input.split(' ');
    const command = tokens[0];
    if(command === 'restock') {
        ingredients[tokens[1]] += Number(tokens[2]);
        return "Success";
    } else if(command === 'prepare') {
        return prepare(tokens[1], tokens[2]);
    } else if(command === 'report') {
        const printArray = [];
        for (const key in ingredients) {
            printArray.push(`${key}=${ingredients[key]}`);
        }
        return printArray.join(' ');
    }
   }

})()

console.log(manager2("prepare cheverme 1"));
console.log(manager2("restock flavour 10"));
console.log(manager2("prepare apple 1"));
console.log(manager2("restock fat 10"));
console.log(manager2("prepare burger 1"));
console.log(manager2("report"));