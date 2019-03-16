let Warehouse = require('../warehouse');
let { assert, expect } = require('chai');

describe("Testing Warehouse class", function () {

    describe("testing constructor", function() {
        it("should throw error if negative number is passed", function() {
            let negativeCapacity = -1;
            let zeroCapacity = 0;
            let stringPassed = 'test';

            expect(function () {
                let test = new Warehouse(negativeCapacity);
            }).to.throw('Invalid given warehouse space');

            expect(function () {
                let test1 = new Warehouse(zeroCapacity);
            }).to.throw('Invalid given warehouse space');

            expect(function () {
                let test2 = new Warehouse(stringPassed);
            }).to.throw('Invalid given warehouse space');
        })

        it('should work properly with positive float', function () {
            let capacity = 20.1;

            let test = new Warehouse(capacity);

            expect(test.capacity).to.equal(20.1);
        })

        it('should work properly with positive int', function () {
            let capacity = 15;

            let test = new Warehouse(capacity);

            expect(test.capacity).to.equal(15);
        })


    })

    let warehouse = new Warehouse(1000);

    // beforeEach(function () {
    //
    //
    //    // warehouse.addProduct('Drink', 'beer', 100);
    // });

    describe("testing addProduct() method", function() {
        it('should return correct product if correct results are passed', function () {
            warehouse.addProduct('Drink', 'water', 100);
            warehouse.addProduct('Food','bread', 200);

            assert.equal(warehouse.availableProducts.Drink.water, 100, "Failing water");
            assert.equal(warehouse.availableProducts.Food.bread, 200, "Failing bread");
        })

        it('should sum the prodcuts added', function () {
            warehouse.addProduct('Drink', 'water', 100);
            assert.equal(warehouse.availableProducts.Drink.water, 200);
        })

        it('should return the same capacity as before if negative number of products is added', function () {
            const newWarehouse = new Warehouse(10);
            newWarehouse.addProduct('Food', 'fish', -4);
            assert.equal(newWarehouse.capacity, 10);
        });

        it('should throw error if more than the capacity is passed', function () {

            assert.throws(function () {
                let fullWarehouse = new Warehouse(200);
                fullWarehouse.addProduct('Drink', 'water', 201);
            }, 'There is not enough space or the warehouse is already full');
        })

        it('should throw error if capacity is full', function () {

            assert.throws(function () {
                let fullWarehouse = new Warehouse(200);
                fullWarehouse.addProduct('Drink', 'water', 200);
                fullWarehouse.addProduct('Drink', 'rakia', 30);
            }, 'There is not enough space or the warehouse is already full');
        })

        it('should throw error if capacity is overflowing', function () {

            assert.throws(function () {
                let fullWarehouse = new Warehouse(200);
                fullWarehouse.addProduct('Drink', 'water', 150);
                fullWarehouse.addProduct('Drink', 'rakia', 51);
            }, 'There is not enough space or the warehouse is already full');
        })
    })

    describe('testing orderProducst() method', function () {
        it('should return sorted list', function () {
            warehouse.addProduct('Drink', 'beer', 300);

            const test = { 'beer': 300, 'water': 200 };

            assert.deepEqual(warehouse.orderProducts('Drink'), test);
        });

        it('should return sorted list if equal number of products', function () {
            warehouse.addProduct('Drink', 'water', 100);

            const test = { 'water': 300, 'beer': 300 };

            assert.deepEqual(warehouse.orderProducts('Drink'), test);
        });

        it('should print empty product of no products are in warehouse', function () {
            const newWarehouse = new Warehouse(10);

            assert.deepEqual(newWarehouse.orderProducts('Food'), {});
        });

        it('should print only one product if one is in warehouse', function () {
            const freshWarehouse = new Warehouse(10);
            freshWarehouse.addProduct('Food', 'meat', 4);

            const test = { meat: 4 };

            assert.deepEqual(freshWarehouse.orderProducts('Food'), test);
        });
    })

    describe('testing occupiedCapacity() method', function () {
        it('should return correct capacity', function () {
            const capacity = warehouse.occupiedCapacity();

            assert.equal(capacity, 800);
        });

        it('should return correct capacity if products are in it', function () {
            const newWarehouse = new Warehouse(10);
            newWarehouse.addProduct('Food', 'eggs', 4);
            const capacity = newWarehouse.occupiedCapacity();

            assert.equal(capacity, 4);
        });

        it('should return correct capacity if products are in it', function () {
            const newWarehouse = new Warehouse(10);
            newWarehouse.addProduct('Food', 'eggs', 4);
            newWarehouse.addProduct('Food', 'menta', 5);

            const capacity = newWarehouse.occupiedCapacity();

            assert.equal(capacity, 9);
        });

        it('should return correct capacity if products are in it', function () {
            const newWarehouse = new Warehouse(10);
            newWarehouse.addProduct('Drink', 'eggs', 4);
            newWarehouse.addProduct('Drink', 'menta', 6);

            const capacity = newWarehouse.occupiedCapacity();

            assert.equal(capacity, 10);
        });

        it('should return 0 for empty warehouse', function () {
            const secondWarehouse = new Warehouse(100);
            const test = secondWarehouse.occupiedCapacity();

            assert.equal(test, 0);
        });

    });

    describe('testing revision() method', function () {
        it('should print correctly for both food types', function () {
            const test = "Product type - [Food]\n" +
                "- bread 200\n" +
                "Product type - [Drink]\n" +
                "- beer 300\n" +
                "- water 300";

            assert.equal(warehouse.revision(), test);
        });

        it('should print correctly for only Food type', function () {
            const foodWarehouse = new Warehouse(200);
            foodWarehouse.addProduct('Food', 'bread', 100);
            foodWarehouse.addProduct('Food', 'salami', 20);

            const test = "Product type - [Food]\n" +
                "- bread 100\n" +
                "- salami 20\n" +
                "Product type - [Drink]";
            ;

            assert.equal(foodWarehouse.revision(), test);
        });

        it('should print correctly for only Food type', function () {
            const foodWarehouse = new Warehouse(200);
            foodWarehouse.addProduct('Food', 'bread', 100);

            const test = "Product type - [Food]\n" +
                "- bread 100\n" +
                "Product type - [Drink]";
            ;

            assert.equal(foodWarehouse.revision(), test);
        });

        it('should print correctly for only Drink type type', function () {
            const drinksWarehouse = new Warehouse(200);
            drinksWarehouse.addProduct('Drink', 'beer', 100);
            drinksWarehouse.addProduct('Drink', 'rakia', 30);

            const test = "Product type - [Food]\n" +
                "Product type - [Drink]\n" +
                "- beer 100\n" +
                "- rakia 30" ;
            ;

            assert.equal(drinksWarehouse.revision(), test);
        });

        it('should print correctly for only Drink type type', function () {
            const drinksWarehouse = new Warehouse(200);
            drinksWarehouse.addProduct('Drink', 'rakia', 30);

            const test = "Product type - [Food]\n" +
                "Product type - [Drink]\n" +
                "- rakia 30" ;
            ;

            assert.equal(drinksWarehouse.revision(), test);
        });

        it('should print Empty warehouse if empty', function () {
            const emptyWarehouse = new Warehouse(12);

            const message = "The warehouse is empty";

            assert.equal(emptyWarehouse.revision(), message);
        });
    })
    
    describe('testing scrapeAProduct() method', function () {
        it('should return correct quantity', function () {
            const newWarehouse = new Warehouse(30);
            newWarehouse.addProduct('Food', 'fish', 10);
            newWarehouse.addProduct('Food', 'bread', 5);
            newWarehouse.addProduct('Drink', 'wine', 10);

            let scrape = newWarehouse.scrapeAProduct('bread', 2);
            let test = { fish: 10, bread: 3}

            assert.deepEqual(scrape, test);
        });

        it('should return correct quantity', function () {
            const newWarehouse = new Warehouse(30);
            newWarehouse.addProduct('Food', 'fish', 10);
            newWarehouse.addProduct('Food', 'bread', 5);
            newWarehouse.addProduct('Drink', 'wine', 10);

            let scrape = newWarehouse.scrapeAProduct('wine', 10);
            let test = { wine: 0 }

            assert.deepEqual(scrape, test);
        });

        it('should return correct quantity', function () {
            const newWarehouse = new Warehouse(30);
            newWarehouse.addProduct('Food', 'fish', 10);
            newWarehouse.addProduct('Food', 'bread', 5);
            newWarehouse.addProduct('Drink', 'wine', 10);

            let scrape = newWarehouse.scrapeAProduct('fish', 10);
            let test = { fish: 0, bread: 5 }

            assert.deepEqual(scrape, test);
        });

        it('should return 0 if quantity passed is more than currently available', function () {
            const newWarehouse = new Warehouse(30);
            newWarehouse.addProduct('Food', 'fish', 10);
            newWarehouse.addProduct('Food', 'bread', 5);
            newWarehouse.addProduct('Drink', 'wine', 10);

            let scrape = newWarehouse.scrapeAProduct('fish', 12);
            let test = { fish: 0, bread: 5 }

            assert.deepEqual(scrape, test);
        });

        it('should throw error if missing product is passed', function () {
            assert.throws(function () {
                const newWarehouse = new Warehouse(30);
                newWarehouse.addProduct('Food', 'fish', 10);
                newWarehouse.addProduct('Food', 'bread', 5);
                newWarehouse.addProduct('Drink', 'wine', 10);

                let scrape = newWarehouse.scrapeAProduct('fishes', 10);
            }, "fishes do not exists");
        });
    })
})
