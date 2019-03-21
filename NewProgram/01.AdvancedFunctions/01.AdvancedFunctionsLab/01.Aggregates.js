function solve(arr) {
    const sum = arr.reduce((a, b) => a + b);
    const min = arr.reduce((a, b) => a < b ? a : b , Number.MAX_SAFE_INTEGER);
    const max = arr.reduce((a, b) => a > b ? a : b, Number.MIN_SAFE_INTEGER);
    const product = arr.reduce((a, b) => a * b);
    const join = arr.reduce((a, b) => '' + a + b);

    console.log(`Sum = ${sum}`);
    console.log(`Min = ${min}`);
    console.log(`Max = ${max}`);
    console.log(`Product = ${product}`);
    console.log(`Join = ${join}`);
    
}

solve([2, 3, 10, 5]);
solve([5, -3, 20, 7, 0.5]);