function result() {
    let argTypes = {};
    for (const argument of arguments) {
        let currentType = typeof(argument);
        if(!argTypes[currentType]) {
            argTypes[currentType] = 0;
        }
        argTypes[currentType] ++;

        console.log(`${typeof(argument)}: ${argument}`);
    }
    let arrToSort = [];
    for (const item in argTypes) {
        arrToSort.push([item, argTypes[item]]);
    }
    arrToSort.sort((a, b) => a - b);

    for (const [key, value] of arrToSort) {
        console.log(`${key} - ${value}`);
    }
}

result('cat', 43, function() {console.log('hello world');})
