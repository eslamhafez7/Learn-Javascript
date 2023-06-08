/*
    Object L79
        - Intro and what is object 
        - Testing window object
        - Accessing object
*/
/*
let user = {
    //Properties
    TheName: "Eslam",
    age: 21,
    //Methods
    sayHello: function () {
        return `Hello`
    },
};
console.log(user.TheName);
console.log(user.age);
console.log(user.sayHello());
*/

/*/// //////////////////////////////////////////////////////////////////////////////// */
// object - Dot notation vs Bracket notation L80
/*
- Big Deeper
- Dot notation vs bracket notation
- Dynamic property name
*/
/*
let myVar = "country";
let user = {
    thename: "Eslam Hafez",
    country: "Egypt"
};

console.log(user.thename);
console.log(user.country);
console.log(user["country of"]);
console.log(user.myVar);
console.log(user[myVar]);
*/
/*
// Example 1 
let car = {
    make: "Honda",
    model: "Civic",
    year: 2022,
    style: "blue",
    start: function() {
        console.log("Starting At .....");
    },
    stop: function() {
        console.log("Stopping At ..........."); 
    }
}
console.log("The make is " + car.make);
console.log("The model is " + car.model);
console.log("The year is " + car.year);
console.log("The style is " + car.style);

console.log(`#####################`);

// Example 2
let person = {
    firstName: "John ",
    lastName: "Doe",
    age: 35,
    address: {
    street: "123 Main St",
    city: "Newyork",
    state: "America",
    zipCode: "12345"
    },
    email: "johndoe@example.com"
};

console.log("Username is " + person.firstName + person.lastName); 
console.log(person.age + " Years Old")
console.log(person.address.street);
console.log(person.address.city);
console.log(person.address.state);
console.log(person.address.zipCode);
console.log(person.email);

// Example 3

let man = {
    first: `Eslam`,
    last: `Hafez`,
    full: function () {
        return this.first + ' ' + this.last; 
    }
}
console.log(man.full());
console.log(man['full']());
*/
////////////////////////////////////////////////////////////////////////////////
// Neasted object and advanced trainings L81
/*
let user = {
    name: "Osama",
    age: 38,
    skills: ["HTML", "CSS", "JS"],
    available: true,
    addresses: {
        ksa: "Riyadh",
        egypt: {
            one: "Cairo",
            two: "Giza",
        },
    },
    chekA: function () {
        if (user.available === true) {
            return 'Free for work'
        }else {
            return 'Not Free'
        }
    },
};
console.log(`Name is `+ user.name);
console.log(`Age is ` + user.age);
console.log(user.skills[2]);
console.log(user.addresses.ksa);
console.log(user.addresses.egypt["one"]);
console.log(user["addresses"]["egypt"]["two"]);
console.log(user.chekA());
*/


////////////////////////////////////////////////////////////////////////////////

// Object - Create object with new keyword L82


/*
let user = {};
// Another way to create object
// let user1 = new Object({
//     age: 20,
// });

console.log(user1.age);

user.age = 30,
user.name= "Eslam";
user.country = "Egypt";

user.sayHello = function() {
    return `Hello ${user.name}`;
}
console.log(user);
console.log(user.name);
console.log(user.age);
console.log(user.country);
console.log(user.sayHello());
*/

////////////////////////////////////////////////////////////////////////////////
// Object - This Keyword L83
/*
    Function This keyword
        - this introduction
        - this inside object method
        - When a function is called as a method of an object,
        - it's this is set to the object the method is called on.
    - Global object
    - Test variables with window and this 
    - Global context
    - Function context
    
    Search :
        - Strict Mode
*/
/*
console.log(this);
console.log(this === window);

myvar = 100;
console.log(window.myvar);
console.log(this.myvar);

function sayHello() {
    return this;
}
sayHello()
console.log(sayHello() === this);
console.log(sayHello() === window);

let user = {
    age: 21,
    ageInDays: function() {
        return this.age * 365;
    },
};
console.log(user);
console.log(user.age);
console.log(user.ageInDays());
*/

    //- Strict Mode
/*
    - Strict mode is a feature in JavaScript that allows you to place your code in a stricter
    operating context. When you use strict mode, you are telling the JavaScript engine
    to enforce a stricter set of rules and to throw more errors if you violate these rules.
    
    - To use strict mode, you can simply add the following 
    line of code at the beginning of your JavaScript file or function:("use strict";)
*/
// 1- Eliminating silent errors:
/*
// Non-strict Mode 
function addNumbers(x, y) {
    return x + y;
}
console.log(addNumbers(10)); // NaN

// Strict Mode
"use strict";
function addNumbers(x, y) {
    return x + y;
}
console.log(addNumbers(10));
*/

/*
// 2- Preventing accidental global variables:

// None strict mode 
function setAge(age) {
    return setAge = age;
};
console.log(setAge(30)); // 30

// Strict Mode
"use strict";
function setAge(age) {
    return setAge = age;
}; 
console.log(setAge(20)); 
Output object.js:233 Uncaught TypeError: setAge is not a function
at object.js:233:13
*/

/*
// 3- Making eval safer:
// Non-strict mode  
// let x = 15;
// let result = eval(x + 5);
// console.log(result); // 20

// "use strict";
// let x = 15;
// let result = eval('x + 5');
// console.log(result); // 20
*/


////////////////////////////////////////////////////////////////////////////////
// object - Create object with create method L84

/*
let user = {
    age: 40,
    doubleAge: function() {
        return this.age * 2;
    },
};
console.log(user);
console.log(user.age);
console.log(user.doubleAge());

let obj = Object.create({});
obj.a = 100;
obj.b = 100;
obj.c = 100;
console.log(obj);

let copyObj = Object.create(user);
copyObj.age = 50;
console.log(copyObj);
console.log(copyObj.age);
console.log(copyObj.doubleAge());
*/ 

// function person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// person.prototype.greet = function() {
//     console.log('Hey my name is ' + this.name + ' and Im ' + this.age + ' Years old');
// }
// var person1 = new person ("john", 30);
// var person2 = new person ("Eslam", 21);
// person1.greet()
// person2.greet()

// let personPrototype = {
//     name : "Eslam",
//     age : 21,
//     greet: function() {
//         console.log(`hey my name is ${this.name} and i'm ${this.age} years old`);
//     },
// };
// console.log(personPrototype);
// let person1 = Object.create(personPrototype);
// let person2 = Object.create(personPrototype);


// person1.greet();
// person2.greet();

////////////////////////////////////////////////////////////////////////////////
// Object - Create object with assign method L85


/*
let obj1 = {
    prop1: 1,
    meth1 : function() {
        return this.prop1;
    },
};

let obj2 = {
    prop2: 2,
    meth2: function() {
        return this.prop2;
    },
};

let obj3 = {
    prop3: 3,
    meth3: function() {
        return this.prop3;
    },
};

let targetObject = {
    prop1: 3,
    prop4: 100,
};


let finalObject = Object.assign(targetObject, obj1, obj2, obj3);
console.log(finalObject);

let newObject = Object.assign({}, obj1, {Prop5:500, Prop6: 600});
console.log(newObject);
*/