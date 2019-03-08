String.prototype.ensureStart = function(substring) {
    if(this.indexOf(substring) !== 0) {
        return substring + this;
    }
    return this.toString();
}

String.prototype.ensureEnd = function(substring) {
    if(this.indexOf(substring) !== this.length - substring.length) {
        return this + substring;
    }
    return this.toString();
}

String.prototype.isEmpty = function() {
    if(this.length > 0) {
        return false;
    } 

    return true;
}

String.prototype.truncate = function(number) {
    if(number <= 3) {
        return '.'.repeat(number);
    }

    if(this.length < number) {
        return this.toString();
    }

    let str = '';
    let ellipsis = '...';
    if((this.lastIndexOf(' ') > 0 && this.lastIndexOf(' ') + ellipsis.length <= number)) {
        if(this[number - 1] !== ' ') {
            str = this.substring(0, this.lastIndexOf(' ')) + ellipsis;
        }
        this[number - 1].trim();
    } else if(this.lastIndexOf(' ') > 0 && this.lastIndexOf(' ') + ellipsis.length > number) {
        str = this.substring(0, number - ellipsis.length) + ellipsis;
    } else if(this.lastIndexOf(' ') <= -1) {
        str = this.substring(0, number - ellipsis.length) + ellipsis;
    }

    return str.toString();

}

String.format = function(str, ...params) {
    params.forEach((a, index) => {
        
        if(str.indexOf(`{${index}}`) > 0) {
            str = str.replace(`{${index}}`, a);
        }
    })
    return str;
}

let str = 'the quick brown fox jumps over the lazy dog'
// str = str.ensureStart('my')
// str = str.ensureStart('hello ')
str = str.truncate(10);
// str = str.truncate(12)
// str = str.truncate(8)
// str = str.truncate(4)
// str = str.truncate(2)
console.log(str);

str = String.format('The {0} {1} fox',
  'quick', 'brown');
str = String.format('jumps {0} {1}',
  'dog');