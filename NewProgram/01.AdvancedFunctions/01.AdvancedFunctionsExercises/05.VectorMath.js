const solution = (function() {
    return {
        add: function([x1, y1], [x2, y2]) {
            return [x1 + x2, y1 + y2];
        },
        multiply: function([x1, y1], multiplier) {
            return [x1 * multiplier, y1 * multiplier];
        },
        length: function([x1, y1]) {
            return Math.sqrt(x1 ** 2 + y1 ** 2);
        },
        dot: function([x1, y1], [x2, y2]) {
            return x1 * x2 + y1 * y2;
        },
        cross: function([x1, y1], [x2, y2]) {
            return x1 * y2 - x2 * y1;
        }
    }
})();

// console.log(solution.add([1, 1], [1, 0]));
// console.log(solution.multiply([3.5, -2], 2));
// console.log(solution.length([3, -4]));
console.log(solution.dot([2, 3], [2, -1]));
// console.log(solution.cross([3, 7], [1, 0]));