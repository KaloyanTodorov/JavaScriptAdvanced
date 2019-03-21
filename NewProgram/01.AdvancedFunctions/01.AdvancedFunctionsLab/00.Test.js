// FUNCTION DECLARATION
// First-class functions: pass a function as an argument
helloMessage(greeting, "azz");


function helloMessage(callback, name) {
    console.log(callback() + name);
}


function greeting() {
    return "Hello, ";
}

// prints "Hello, " and the name passed as an argument

// First-class functions: return a function
function sayHello() {
    return function() {
        console.log('Say Hello!');
    }
}

sayHello(); // DOES NOT PRINT "Say Hello!"

// Higher-order functions: take other functions as an argiment or return a function as a result
// FUNCTION EXPRESSION
const hello = function() {
    return function() {
        console.log('Hello!')
    }
}

const myFunction = hello();
myFunction(); // prints "Hello!"

// Examples of Higher-order functions: filter(), map(), reduce()