function result() {
  return {
    extend: function(templateObj) {
      const entries = Object.entries(templateObj);
      for (const [key, value] of entries) {
        if(typeof(value) === 'function') {
          Object.getPrototypeOf(this)[key] = value;
        } else {
          this[key] = value;
        }
      }
    }
  }
};


let template = {
  extensionMethod: function () {
    console.log("I'm from template");
  },
  extensionProperty: 'someString',
  testFunction: () => console.log('test')
  
}

let testObject = result();

testObject.extend(template);
testObject.extensionMethod();
console.log(testObject.extensionProperty);