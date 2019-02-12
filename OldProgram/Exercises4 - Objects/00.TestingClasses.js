class Person {

    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    toString() {
        let className = this.constructor.name;
        return `${className}: name ${this.name}, email ${this.email}`.trim();
    }
}

class Teacher extends Person {

    constructor(name, email, subject) {
        super(name, email);
        this.subject = subject;
    }

    toString() {
        let result = super.toString();
        return result + `, course ${this.course}`.trim();
    }
}

let pesho = new Person('pesho', 'pes@gmail.com');
console.log(pesho.toString());
// console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(pesho)))); // This is the same as the line below:
// console.log(pesho.__proto__.__proto__.__proto__);

let teacherP = new Teacher("Petrov", "petr@tech.co", "JS");
console.log(teacherP.toString());
console.log(Teacher.__proto__.__proto__);
console.log(Teacher.prototype);
console.log(teacherP.prototype);