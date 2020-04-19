
console.log("========const========");

// console.log(someConstant); // ReferenceError
// cont someConstant; // ReferenceError
const someConstant = 22;
// someConstant = 23 // ReferenceError
console.log(someConstant);

console.log("========let vs var========");

// console.log(someLet); // ReferenceError
let someLet;
console.log(someLet); // undefined
someLet = 'A';
console.log(someLet);

console.log(someVar); // undefined
var someVar; 
console.log(someVar); // undefined
someVar = "Some sample";
console.log(someVar);

console.log("========block scope========");
// console.log(blockedScopedLet); // ReferenceError
console.log(blockedScopedVar); // undefined
if (true) {
    // console.log(blockedScopedLet); // ReferenceError
    let blockedScopedLet;
    console.log(blockedScopedLet); // undefined
    blockedScopedLet = 14;
    console.log(blockedScopedLet);

    console.log(blockedScopedVar); // undefined
    var blockedScopedVar;
    console.log(blockedScopedVar); // undefined
    blockedScopedVar = 13;
    console.log(blockedScopedVar);
};

// console.log(blockedScopedLet); // ReferenceError
console.log(blockedScopedVar); // undefined

console.log("========function scope========");
function functionScope() {
    // console.log(functionScopedLet); // ReferenceError
    let functionScopedLet;
    console.log(functionScopedLet); // undefined
    functionScopedLet = "A in function scope";
    console.log(functionScopedLet);

    console.log(functionScopedVar); // undefined
    var functionScopedVar; 
    console.log(functionScopedVar); // undefined
    functionScopedVar = "Some sample in function scope";
    console.log(functionScopedVar);
};

// console.log(functionScopedLet); // ReferenceError
// console.log(functionScopedVar); // ReferenceError

functionScope();

console.log("========rest parameters (varargs)========");

function varArgFunction(firstParameter, ...varargs) {
    console.log("First Parameter:" + firstParameter);
    varargs.forEach(i => console.log(i));
};

varArgFunction("rest is always last", 100, "A some", true, 'B', {a: "A", b: 5});

console.log("========de-structuring arrays========");
let someIds = [1, 34, 56, 67, 78, 8, 76, 86, 23, 45];
let firstId, secondId, restOfTheIds;
[firstId, secondId, , , , ...restOfTheIds] = someIds;
console.log(firstId);
console.log(secondId);
console.log(restOfTheIds); // last 5 ids

console.log("========de-structuring objects========");
let someObject = {numericField: 3, charField: 'V', boolField: false, stringField: "This is it"};
let {numericField, boolField} = someObject;
console.log(numericField);
console.log(boolField);

let charField, stringField;
({charField, stringField} = someObject);
console.log(charField); 
console.log(stringField); 

console.log("========spread syntax========");

function spreadFunction(_1, _2, _3, ...restElements) {
    console.log("First Parameter: " + _1);
    console.log("Second Parameter: " + _2);
    console.log("Third Parameter: " + _3);
    console.log("Rest Of the  Parameters: " + restElements);
};

let someArray = ["using spread", 100, "A some", true, 'B', {a: "A", b: 5}];

spreadFunction(...someArray);

console.log("========typeof========");
console.log(typeof(12)); // number
console.log(typeof(true)); // boolean
console.log(typeof(3.14)); // number
console.log(typeof('F')); // string
console.log(typeof("this is string")); // string
console.log(typeof('This is String')); // string

console.log(typeof( [] )); // object
console.log(typeof( {} )); // object
console.log(typeof( function(){} )); // function
console.log(typeof( null )); // object
console.log(typeof( NaN )); // number
console.log(typeof( undefined )); // undefined

console.log("========call(), apply() and bind()========");

let obj = {
    intField: 234,
    someMethod: function() {
        return this.intField;
    },
    someMethodWith: function(prefix) {
        return prefix + this.intField;
    }
};
console.log(obj.someMethod());
console.log(obj.someMethodWith("ID: "));
let newObj = {intField: 567};
console.log(obj.someMethod.call(newObj)); // replace this with new
console.log(obj.someMethodWith.apply(newObj, ["New ID: "])); //apply parameter
console.log(obj.someMethod.bind(newObj)()); // copies new to this

console.log("========constructor function and prototype========");

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.isAdult = function () {
        return this.age > 18 ? "Adult" : "Child";
    };
};

Person.prototype.expensiveOperation = function() {
    return "performing expensive operation for " + this.name;
};

let person1 = new Person("person 1", 20);
console.log(person1.name + ", is " + person1.age + " years old " + person1.isAdult() + ".");
console.log(person1.expensiveOperation());

String.prototype.hello = function() {
    return this.toString() + ", hello"; 
};

console.log(person1.name.hello());

console.log("========class and modules========");

import { Car } from "./cars";

let car1 = new Car(1, "Ford", 33.45);
let car2 = new Car(2, "Volkswagen", 25.00);
let car3 = new Car(3, "Mercedes-Benz", 55.62);

console.log(car1);
console.log(car1.identify());
console.log(car1.start());
console.log(car2);
console.log(car2.identify());
console.log(car2.start());
console.log(car3);
console.log(car3.identify());
console.log(car3.start());
