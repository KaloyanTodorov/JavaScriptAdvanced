let myArr = [1, 2, 3, 4, 5, 6];

Array.prototype.last = function() {
    return this[this.length - 1];
}

Array.prototype.skip = function(index) {
    return this.slice(index, this.length);
}

Array.prototype.take = function(index) {
    return this.slice(0, index);
}

Array.prototype.sum = function() {
    return this.reduce((a, b) => a + b, 0);
}

Array.prototype.average = function() {
    return this.reduce((a, b) => a + b, 0 ) / this.length;
}

console.log(myArr.average());
