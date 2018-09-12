let manager = (function () {
    let elements = {
        carbohydrate: 0,
        protein: 0,
        fat: 0,
        flavours: 0
    }

    let robot = {
        restock: function(microelement, quantity) {
            elements[microelement] += quantity;
        },
        prepare: function(recipe, quantity) {
            
        },
        report: 'as'
    }


    return function managemen(str) {

    }
}());


manager("restock flavour 50");
manager("prepare coke 4");

// let manager2 = solution();
// manager2("restock carbohydrate 10");
// manager("restock flavour 10");
// manager("prepare apple 1");
// manager("restock fat 10");
// manager("prepare burger 1");
// manager("report");

// let manager3 = solution();
// manager3("prepare cheverme 1");
// manager3("restock protein 10")
// manager3prepare cheverme 1
// restock carbohydrate 10
// prepare cheverme 1
// restock fat 10
// prepare cheverme 1
// restock flavour 10
// prepare cheverme 1
// report

