function solve() {
    const output = {};
    for (const element of arguments) {
        const elementType = typeof(element);
        if(!output.hasOwnProperty(elementType)) {
            output[elementType] = 0;
        }
        output[elementType] += 1;
        console.log(`${elementType}: ${element}`)
    }

    const sortedArr = Object.keys(output).sort((a, b) => output[b] - output[a]);
    
    for (const element of sortedArr) {
        console.log(`${element} = ${output[element]}`);
    }
}

solve({ name: 'bob'}, 3.333, 9.999);