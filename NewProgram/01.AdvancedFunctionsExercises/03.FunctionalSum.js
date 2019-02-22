const add = (function() {
    let totalSum = 0;

    function add(number) {
        totalSum += number;
        return add;
    }

    add.toString = function() {
        return totalSum;
    }

    return add;
})()

console.log(add(1)(4)(-7));
console.log(add(1)(6));