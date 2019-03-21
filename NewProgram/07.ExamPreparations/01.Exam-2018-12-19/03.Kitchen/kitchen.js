class Kitchen {
    constructor(budget) {
        this.budget = budget;
        this.menu = {};
        this.productsInStock = {};
        this.actionsHistory = [];

        return this;
    }

    loadProducts(products) {
        products.forEach(product => {
            let args = product.split(' ');

            let productPrice = args.pop();
            let productQuantity = args.pop();
            let productName = args.join(' ');

            if(this.budget >= Number(productPrice)) {
                if(!Object.keys(this.productsInStock).includes(productName)) {
                    this.productsInStock[productName] = 0;
                }
                this.productsInStock[productName] += Number(productQuantity);

                this.actionsHistory.push(`Successfully loaded ${productQuantity} ${productName}`);

                this.budget -= productPrice;
            } else {
                this.actionsHistory.push(`There was not enough money to load ${productQuantity} ${productName}`)
            }
        });

        return this.actionsHistory.join('\n');
    }

    addToMenu(meal, neededProducts, price) {
        let message = ''
        if(!Object.keys(this.menu).includes(meal)) {
            this.menu[meal] = {};
            this.menu[meal].price = Number(price);
            this.menu[meal].ingredients = {};

            neededProducts.forEach(currentProduct => {
                let [productName, productQuantity] = currentProduct.split(' ');
                // let productQuantity = Number(args.pop());
                // let productName = args.join(' ');

                this.menu[meal].ingredients[productName] = Number(productQuantity);
            });

            let mealsInMenu = Object.keys(this.menu).length;

            message = `Great idea! Now with the ${meal} we have ${mealsInMenu} meals in the menu, other ideas?`;
        } else {
            message = `The ${meal} is already in the our menu, try something different.`;
        }

        // this.actionsHistory.push(message);
        return message;
    }

    showTheMenu() {
        let printMenuResult = '';
        for (const key in this.menu) {
            printMenuResult += `${key} - ${this.menu[key].price}\n`;
        }

        if(printMenuResult === '') {
            printMenuResult = "Our menu is not ready yet, please come later...";
        }

        return printMenuResult.trim();
    }

    makeTheOrder(meal) {
        if(!Object.keys(this.menu).includes(meal)) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        }

        for (const ingredient in this.menu[meal].ingredients) {
            if (this.productsInStock.hasOwnProperty(ingredient)) {
                const amountNeeded = this.menu[meal].ingredients[ingredient];
                const currentAmount = this.productsInStock[ingredient];

                if(currentAmount < amountNeeded) {
                    return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
                } 
                
            } else {
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
            }
        }

        for (const ingredient in this.menu[meal].ingredients) {
            const amountNeeded = this.menu[meal].ingredients[ingredient];
            let currentAmount = this.productsInStock[ingredient];

            this.productsInStock[ingredient] -= amountNeeded;
        }
        this.budget += this.menu[meal].price;

        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`
    }
}

// TEST 0 
// console.log(new Kitchen(10000)
// .loadProducts(
//     ['Banana 10 5',
//     'Banana 20 10',
//     'Strawberries 50 30',
//     'Yogurt 10 10',
//     'Yogurt 500 1500',
//     'Honey 5 50'])
// .addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99)
// .addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55)); 

// TEST 1
let kitchen = new Kitchen(1000);
console.log(kitchen.loadProducts(
    ['Banana 10 5',
    'Banana 20 10',
    'Straw berries 50 30',
    'Yogurt 10 10',
    'Yogurt 500 1500',
    'Honey 5 50'])); 

    // Successfully loaded 10 Banana
    // Successfully loaded 20 Banana
    // Successfully loaded 50 Strawberries
    // Successfully loaded 10 Yogurt
    // There was not enough money to load 500 Yogurt
    // Successfully loaded 5 Honey

// TEST 2
console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Straw berries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));

// Great idea! Now with the frozenYogurt we have 1 meals on the menu, other ideas?
// Great idea! Now with the Pizza we have 2 meals on the menu, other ideas?


// TEST 3
console.log(kitchen.showTheMenu());
// frozenYogurt - $ 9.99
// Pizza - $ 15.55

// TEST 4

console.log(kitchen.makeTheOrder('Pizza'));

// TEST 5

console.log(kitchen.makeTheOrder('frozenYogurt'));
console.log(kitchen.makeTheOrder('frozenYogurt'));
console.log(kitchen.makeTheOrder('frozenYogurt'));
console.log(kitchen.makeTheOrder('frozenYogurt'));
console.log(kitchen.makeTheOrder('frozenYogurt'));
console.log(kitchen.makeTheOrder('frozenYogurt'));
console.log(kitchen.makeTheOrder('frozenYogurt'));
console.log(kitchen.makeTheOrder('frozenYogurt'));