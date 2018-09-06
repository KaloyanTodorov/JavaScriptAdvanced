function reduce(arr, func) {
    let result = arr.shift();
    for(let nextElement of arr) {
        result = func(result, nextElement);
    }

    return result;
}

reduce([5, 10, 20, 30], (a, b) => a + b);
reduce([5, 10, 20, 30], (a, b) => a * b);
