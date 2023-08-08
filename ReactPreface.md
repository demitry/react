# React Preface

<!-- TOC -->

- [React Preface](#react-preface)
    - [Intro](#intro)
        - [Creating React Projects Locally [10]](#creating-react-projects-locally-10)
            - [create-react-app](#create-react-app)
            - [vite](#vite)
    - [Section 2: JavaScript Refresher](#section-2-javascript-refresher)
        - [Module Introduction [13]](#module-introduction-13)
        - [Playing Project [14]](#playing-project-14)
        - [Adding JavaScript To A Page & How React Projects Differ [15]](#adding-javascript-to-a-page--how-react-projects-differ-15)
        - [React Projects Use a Build Process [16]](#react-projects-use-a-build-process-16)
        - ["import" & "export" [17]](#import--export-17)
            - [named export](#named-export)
            - [export default](#export-default)
            - [mix named export and export default](#mix-named-export-and-export-default)
            - [alias for import value](#alias-for-import-value)
        - [Revisiting Variables & Values [18]](#revisiting-variables--values-18)
        - [Revisiting Operators [19]](#revisiting-operators-19)
        - [Revisiting Functions & Parameters [20]](#revisiting-functions--parameters-20)
            - [parameters](#parameters)
            - [default values](#default-values)
            - [return](#return)
            - [Name them clear!](#name-them-clear)
        - [Coding Exercise 1: Exercise: Working with Functions [20]](#coding-exercise-1-exercise-working-with-functions-20)
        - [Arrow Functions [21]](#arrow-functions-21)
        - [More on the Arrow Function Syntax [22]](#more-on-the-arrow-function-syntax-22)
            - [Arrow Function Syntax](#arrow-function-syntax)
        - [Revisiting Objects & Classes [23]](#revisiting-objects--classes-23)
        - [Arrays & Array Methods like map [24]](#arrays--array-methods-like-map-24)
        - [Coding Exercise 2: Exercise: Array Methods [24]](#coding-exercise-2-exercise-array-methods-24)
        - [Destructuring [25]](#destructuring-25)
        - [Destructuring in Function Parameter Lists [26]](#destructuring-in-function-parameter-lists-26)
        - [The Spread Operator arrays and objects [27]](#the-spread-operator-arrays-and-objects-27)
        - [Revisiting Control Structures [28]](#revisiting-control-structures-28)
        - [Manipulating the DOM - Not With React! [29]](#manipulating-the-dom---not-with-react-29)
        - [Using Functions as Values [30]](#using-functions-as-values-30)
        - [Defining Functions Inside Of Functions [31]](#defining-functions-inside-of-functions-31)
        - [Reference vs Primitive Values [32]](#reference-vs-primitive-values-32)
        - [Next-Gen JavaScript - Summary [33]](#next-gen-javascript---summary-33)
            - [let & const](#let--const)
            - [ES6 Arrow Functions](#es6-arrow-functions)
            - [Exports & Imports](#exports--imports)
            - [Classes](#classes)
            - [Spread & Rest Operator](#spread--rest-operator)
            - [Destructuring](#destructuring)
        - [JS Array Functions [34]](#js-array-functions-34)
        - [Module Resources [35]](#module-resources-35)

<!-- /TOC -->

## Intro

npm --version

9.6.7

download project

npm install

npm start

cd react-projects
npx create-react-app react-complete-guide
or use vite (create react app)

npx create-react-app react-complete-guide
...
- npm start 
  - Starts the development server.
- npm run build
  - Bundles the app into static files for production.

- npm test
  - Starts the test runner.

- npm run eject
  - Removes this tool and copies build dependencies, configuration files and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

- cd react-complete-guide
- npm start

### Creating React Projects Locally [10]

VS Code:

- Shift + Alt + F = Format Document

- Prettier Code Formatter

npm install

npm start

#### create-react-app

https://create-react-app.dev/

create-react-app tool

(no need to run npm install, it is part of the creation process)

- npx create-react-app my-app
- cd my-app
- npm start

#### vite

## Section 2: JavaScript Refresher

### Module Introduction [13]

### Playing Project [14]
### Adding JavaScript To A Page & How React Projects Differ [15]

```html
  <head>
    <title>JavaScript Refresher</title>
    <link rel="stylesheet" href="assets/styles/main.css" />
    <meta charset="UTF-8" />

    <!-- cannot use self-closing script tag <script/>   -->
    <script src="assets/scripts/app.js" ></script>
    <script src="assets/scripts/app.js" defer></script> 
    <!-- defer and execute after whole page loaded -->
    <script src="assets/scripts/app.js" type="module"></script>
    <!-- This js file is treated as a module -->
    <!-- import ... -->
    <!-- Unfortunately, you can move the script tag to the end of the body section -->
    <!-- React defers, it uses build process - injects script tags for us -->
  </head>
```

### React Projects Use a Build Process [16]

- Observe index.html
- There is no < script > tags!
- The code you write - **is NOT** the code that gets executed!
- Your code is transformed!
- Build process in background
- npm start - start development server
- real html file contains a lot of scripts,
- so the transformed code is executed on the page

Reason - Why?

1. Raw unprocessed React code won't execute in a browser
  - jsx code - html written in javascript 
  - Out of the box it would not work, it is not standard js feature
2. This code would not be optimized for production (not minified)

=> react projects require a **build process**

create-react-app, vite - give you a build process, so you need nodejs.

<https://codesandbox.io/s/react-vs-vanilla-demo-uc08fv>

### "import" & "export" [17]

#### named export
```js
// 1 file util.js:
export let apiKey = "alisduyt287364tfjhf28c347t293746";

// 2 file:
import { apiKey } from './util.js'
import { apiKey } from './util'
// in React '.js' is omitted (because of build process)
```

in vanilla JS - to import and export use type="module"

```html
    <script src="assets/scripts/app.js" type="module"></script>
```
in react project you won't see 'type="module"' (build process)

#### export default

```js
// default that exported by this file (only one default export)
export default "alisduyt287364tfjhf28c347t293746";
//export default 1 //error

import myApiKey from "./util.js"

export default ExpenseDate // export react components
```

#### mix named export and export default

Can mix named export and export default, but default is 1

Import all together as JS object:

```js
import * as util from "./util.js"
console.log(util.apiKey)
```

#### alias for import value

```js
import { apiKey, abc as content } from "./util.js";

console.log(content); //abc value in util.js
```

### Revisiting Variables & Values [18]

```js
let myCamelCaseVer = 1;
let userMessage = "Hello, world!";

//let user-name = "John Smith" //NO dashes!
//let !user; //NO
//let ?user; //NO

const myConstant= 1;
// myConstant = 2; NO, myConstant is read-only
```

There is a sense to widely use const 

### Revisiting Operators [19]

```js
console.log(2 + 1);
console.log(2 - 1);
console.log(2 === 1);
console.log(10 >= 10);
if(10 === 10)
{
  console.log("works");
}
```

### Revisiting Functions & Parameters [20]

```js
function greet(){
  console.log("Hello");
}
greet();
greet();
greet();
```

#### parameters
```js
function greet(userName, message){
  console.log("Hello");
  console.log(userName);
  console.log(message);
}
greet("Max", "What's Up?");
```
#### default values
```js
function greet(userName, message = "Hello"){
  console.log("Hello");
  console.log(userName);
  console.log(message);
}
greet("Max");
greet("Max", "Bye!");
```

#### return

functions return undefined by default

functions has 1 return value

```js
function createGreeting(userName, message = "Hello"){
  return "Hi, " + userName + "! " + message;
}

const greeting = createGreeting("Max");
console.log(greeting);
```
#### Name them clear!

###      Coding Exercise 1: Exercise: Working with Functions [20]

### Arrow Functions [21]
```js
 onclick = {() => setActiveContentWindow(0)}

function() {}

export default function() {
  console.log("Hello");
}

export default () => {
  console.log("Hello");
}

export default (userName, message) => {
}

export default (userName, message) => {
  return userName + " " + message;
}
```

### More on the Arrow Function Syntax [22]
#### Arrow Function Syntax

When working with Arrow Functions, you have a couple of "syntax shortcuts" available.

Most importantly, you should know about the following alternatives:

1) Omitting parameter list parentheses

If your arrow functions takes exactly one parameter, you may omit the wrapping parentheses.

Instead of

```js
(userName) => { ... }
```

you could write

```js
userName => { ... }
```

Please note: 

If your function takes no parameters, parentheses must not be omitted - () => { ... } is the only correct form in that case.

If your function takes more than one parameter, you also must not omit parentheses - userName, userAge => { ... } would be invalid ((userName, userAge) => { ... } is correct)!

2) Omitting function body curly braces

If your arrow function contains no other logic but a return statement, you may omit the curly braces and the return keyword.

Instead of
```js
number => { 
  return number * 3;
}
```

you could write

```js
number => number * 3;
```

The following code would be invalid:
```js
number => return number * 3; // invalid because return keyword must also be omitted!
number => if (number === 2) { return 5 }; // invalid because if statements can't be returned
```

3) Special case: Just returning an object

If you go for the shorter alternative explained in 2) and you're trying to return a JavaScript object, you may end up with the following, invalid code:

```js
number => { age: number }; // trying to return an object
```

This code would be invalid because JavaScript treats the curly braces as function body wrappers (not as code that creates a JS object).

To "tell" JavaScript that an object should be created (and returned) instead, the code would need to be adjusted like this:

```js
number => ({ age: number }); // wrapping the object in extra parentheses
```

By wrapping the object and its curly braces with an extra pair of parentheses, JavaScript understands that the curly braces are not there to define a function body but instead to create an object. Hence that object then gets returned.


### Revisiting Objects & Classes [23]

Objects
- group values
- key-value pairs

```js
// Creating objects
const user = {
  name: 'John',
  age: 36,
  greet() {
    console.log(this.name); // this
    return "John"; 
  }
};

console.log(user);
console.log(user.name);

// Blueprints = class

class User { // Capital letter
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    console.log(this.name); // this
    return "John"; 
  }
}

const user1 = new User("Max", 34);
console.log(user1); // object based on blueprint class
```

### Arrays & Array Methods like map() [24]

- Arrays are technically objects
- Special kind of objects

```js
const hobbies = ["Sports", "Cooking", "Reading"];
console.log(hobbies[0]);
hobbies.push("Working");

const index = hobbies.findIndex(() => { return
  //...
});

const index = hobbies.findIndex((item) => { return
  item === "Cooking"; 
});

const index = hobbies.findIndex((item) =>  item === "Cooking");

//Transform any item in a array to another item
hobbies.map((item) => item + "!");
const editedHobbies = hobbies.map((item) => item + "!");
const editedHobbies = hobbies.map((item) => ({ text: item })); // bunch of objects
//Nested arrays
```

### Coding Exercise 2: Exercise: Array Methods [24]

Your task is to add the missing logic to a transformToObjects() function that should transform a list of numbers into a list of JavaScript objects.

In the newly returned array, every object must have a val key and the input array's number as a value.

For example, for the provided input [1, 2, 3] the transformToObjects([1, 2, 3]) function should return [{val: 1}, {val: 2}, {val: 3}].

```js
function transformToObjects(numberArray) {
    return numberArray.map(item => ({ val: item }))
}
```

### Destructuring [25]

```js
const userNameData = ["Max", "Perksons"];
const firstName = userNameData[0];
const lastName = userNameData[1];

// Destructuring arrays
const [firstName, lastName] = ["Max", "Perksons"];

// Destructuring objects
const user = {
  name: "Max",
  age: 50
};

const {name, age}  = {
  name: "Max",
  age: 50
};

//Alias (get name from obj as variable userName)
const {name: userName, age}  = {
  name: "Max",
  age: 50
};

console.log(userName);
console.log(age);
```

### Destructuring in Function Parameter Lists [26]

The destructuring syntax explained in the previous lecture can also be used in function parameter lists.

For example, if a function accepts a parameter that will contain an object it can be destructured to "pull out" the object properties and make them available as locally scoped variables (i.e., variables only available inside the function body).

Here's an example:
```js

function storeOrder(order) {
  localStorage.setItem('id', order.id);
  localStorage.setItem('currency', order.currency);
}
```
Instead of accessing the order properties via the "dot notation" inside the storeOrder function body, you could use destructuring like this:

```js
function storeOrder({id, currency}) { // destructuring
  localStorage.setItem('id', id);
  localStorage.setItem('currency', currency);
}
```
The destructuring syntax is the same as taught in the previous lecture - just without creating a constant or variable manually.

Instead, id and currency are "pulled out" of the incoming object (i.e., the object passed as an argument to storeOrder).

It's very important to understand, that storeOrder still only takes one parameter in this example! 

It does not accept two parameters. Instead, it's one single parameter - an object which then just is destructured internally.

The function would still be called like this:

```js
storeOrder({id: 5, currency: 'USD', amount: 15.99}); // one argument / value!
```

### The Spread Operator (arrays and objects) [27]

```js
const hobbies = ["Sports", "Cooking"];
const newHobbies = ["Reading"];

// Spread - get (comma) separated values from the array, not array object
const mergedHobbies = [...hobbies, ...newHobbies];

// The same for objects
const user = {
  name: "Max",
  age: 28
};

const extendedUser = {
  isAdmin: true,
  ...user
};
```

### Revisiting Control Structures [28]

```js
const password = prompt();
if(password === "Hello") {
  // ...
} else if (5 === 5){
  // ...
} else {
  // ...
}

// for-of loop
const hobbies = ["Sports", "Cooking"];
for (const hobby of hobbies){
  console.log(hobby);
}
```

### Manipulating the DOM - Not With React! [29]

- It is the strength of JS
- But React will do it for us

```js
const list = document.querySelector("ul");
list.remove();
// We will not do it in this course
// Instead we'll use react for that
```

### Using Functions as Values [30]

```js
//regular function
function handleTimeout(){
  console.log("Timed out");
}

const handleTimeout2 = () => {
  console.log("Timed out ... again!");
};

setTimeout(() => {...});

setTimeout(handleTimeout); // () is missed!, do not call it immediately
                             // so exec in a future

setTimeout(handleTimeout, 2000); // pass handler of the function
setTimeout(handleTimeout2, 3000);
setTimeout(() => {...}, 3000); // anonymous function

function greeter(greetFn) {
  greetFn();
}

greeter(() => console.log("Hi"));
```

### Defining Functions Inside Of Functions [31]

- In Vanilla JS - no much sense
- More sense in a context in React

```js
function init() {
  function greet() // defined inside, nested
  {
    console.log("Hello");
  }
  greet(); 
}

// greet(); // cannot be executed outside
```

### Reference vs Primitive Values [32]

```js
// Primitives
let userMessage = "Hello!"; // primitive
userMessage = userMessage.concat('!!!'); // will produce NEW string

// Objects with Arrays
const hobbies = ["Sports", "Cooking", "Reading"]; // store address of memory in constant
//const hobbies = [] // error Type Error: hobbies is read-only
hobbies.push("Working"); // MUTATE ORIGINAL array
```

### Next-Gen JavaScript - Summary [33]

#### let & const

about let : 

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let

about const : 

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const

let  and const  basically replace var . You use let  instead of var  and const  instead of var  if you plan on never re-assigning this "variable" (effectively turning it into a constant therefore).

#### ES6 Arrow Functions

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

Arrow functions are a different way of creating functions in JavaScript. Besides a shorter syntax, they offer advantages when it comes to keeping the scope of the this  keyword (see here).

Arrow function syntax may look strange but it's actually simple.

```js
function callMe(name) { 
    console.log(name);
}

//which you could also write as:

const callMe = function(name) { 
    console.log(name);
}

//becomes: 

const callMe = (name) => { 
    console.log(name);
}

//Important: 

//When having no arguments, you have to use empty parentheses in the function declaration:

const callMe = () => { 
    console.log('Max!');
}

//When having exactly one argument, you may omit the parentheses:

const callMe = name => { 
    console.log(name);
}

//When just returning a value, you can use the following shortcut:

const returnMe = name => name

//That's equal to:

const returnMe = name => { 
    return name;
}

```

#### Exports & Imports

In React projects (and actually in all modern JavaScript projects), you split your code across multiple JavaScript files - so-called modules.

You do this, to keep each file/ module focused and manageable.

To still access functionality in another file, you need export  (to make it available) and import  (to get access) statements.

You got two different types of exports: default (unnamed) and named exports:

```js
default => export default ...; 
named => export const someData = ...; 
//You can import default exports like this:
import someNameOfYourChoice from './path/to/file.js'; 
//Surprisingly, someNameOfYourChoice  is totally up to you.
//Named exports have to be imported by their name:
import { someData } from './path/to/file.js'; 
//A file can only contain one default and an unlimited amount of named exports. You can also mix the one default with any amount of named exports in one and the same file.
//When importing named exports, you can also import all named exports at once with the following syntax:
import * as upToYou from './path/to/file.js'; 
//upToYou  is - well - up to you and simply bundles all exported variables/functions in one JavaScript object.
// For example, if you export const someData = ...  (/path/to/file.js ) you can access it on upToYou  like this: upToYou.someData .

```

#### Classes

Classes are a feature which basically replace constructor functions and prototypes. You can define blueprints for JavaScript objects with them. 

```js
//Like this:

class Person {
    constructor () {
        this.name = 'Max';
    }
}
 
const person = new Person();
console.log(person.name); // prints 'Max'
//In the above example, not only the class but also a property of that class (=> name ) is defined. The syntax you see there, is the "old" syntax for defining properties. In modern JavaScript projects (as the one used in this course), you can use the following, more convenient way of defining class properties:

class Person {
    name = 'Max';
}
 
const person = new Person();
console.log(person.name); // prints 'Max'
You can also define methods. Either like this:

class Person {
    name = 'Max';
    printMyName () {
        console.log(this.name); // this is required to refer to the class!
    }
}
 
const person = new Person();
person.printMyName();

//Or like this:

class Person {
    name = 'Max';
    printMyName = () => {
        console.log(this.name);
    }
}
 
const person = new Person();
person.printMyName();
//The second approach has the same advantage as all arrow functions have: The this  keyword doesn't change its reference.

//You can also use inheritance when using classes:

class Human {
    species = 'human';
}
 
class Person extends Human {
    name = 'Max';
    printMyName = () => {
        console.log(this.name);
    }
}
 
const person = new Person();
person.printMyName();
console.log(person.species); // prints 'human'
```

#### Spread & Rest Operator

The spread and rest operators actually use the same syntax: ... 

Yes, that is the operator - just three dots. It's usage determines whether you're using it as the spread or rest operator.

Using the Spread Operator:

The spread operator allows you to pull elements out of an array (=> split the array into a list of its elements) or pull the properties out of an object. Here are two examples:

```js 
const oldArray = [1, 2, 3];
const newArray = [...oldArray, 4, 5]; // This now is [1, 2, 3, 4, 5];
// Here's the spread operator used on an object:

const oldObject = {
    name: 'Max'
};

const newObject = {
    ...oldObject,
    age: 28
};

//newObject  would then be

{
    name: 'Max',
    age: 28
}

// The spread operator is extremely useful for cloning arrays and objects. 
// Since both are reference types (and not primitives), copying them safely 
// (i.e. preventing future mutation of the copied original) can be tricky. 
// With the spread operator you have an easy way of creating a (shallow!) clone of the object or array. 

```
#### Destructuring

Destructuring allows you to easily access the values of arrays or objects and assign them to variables.

```js

const array = [1, 2, 3];
const [a, b] = array;
console.log(a); // prints 1
console.log(b); // prints 2
console.log(array); // prints [1, 2, 3]
And here for an object:

const myObj = {
    name: 'Max',
    age: 28
}
const {name} = myObj;
console.log(name); // prints 'Max'
console.log(age); // prints undefined
console.log(myObj); // prints {name: 'Max', age: 28}
Destructuring is very useful when working with function arguments. Consider this example:

const printName = (personObj) => {
    console.log(personObj.name);
}
printName({name: 'Max', age: 28}); // prints 'Max'

// Here, we only want to print the name in the function but we pass a complete person object to the function. 
// Of course this is no issue but it forces us to call personObj.name inside of our function.
// We can condense this code with destructuring:

const printName = ({name}) => {
    console.log(name);
}
printName({name: 'Max', age: 28}); // prints 'Max')

// We get the same result as above but we save some code.
// By destructuring, we simply pull out the name  property and store it in a variable/ argument named name  which we then can use in the function body.

```
### JS Array Functions [34]

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

[] TODO

### Module Resources [35]

[] TODO
