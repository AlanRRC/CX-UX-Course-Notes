---
title: React Prerequisites (Draft)
nav_order: 11
---

<!--prettier-ignore-start-->
# React Prerequisites 
{: .no_toc }

## Table of Contents
{: .no_toc }

1. TOC
{:toc}

<!--prettier-ignore-end-->

## Introduction

![Introduction](vlad-bagacian-d1eaoAabeXs-unsplash.jpg){:class="small inline"}

The next step in your Javascript journey is to learn the front-end component framework React.

But before we get to React, there are a few more Javascript features you need to learn. Knowing these features will help you better understand the example code you'll encounter while learning React (or any other component library).

This module is a collection of modern Javascript tips and tricks.

#### Resources

- [React - A JavaScript library for building user interfaces.](https://reactjs.org/)

## Objective

Upon completion of this module, you should be able to:

- Explain what anonymous functions and callback functions are.
- Write Javascript functions using regular and arrow syntax.
- Use `for of` and `ForEach` loops to iterate over Javascript collections.
- Manipulate array data using the built-in array helpers.
- Pluck data from arrays, objects, and nested data-structures using destructuring.
- Access object properties using both bracket notation and dot notation.
- Add and use functions as object properties.
- Use the spread and rest syntax when working with functions, arrays, and objects.

## Module Plan

- Javascript Functions
- Anonymous Functions
- Callback Functions
- Arrow Functions
- For Of and forEach Loops
- Array Transformations
- Array Search
- Array Boolean Tests
- Array Reductions
- Destructuring
- Objects and Properties
- Spread Syntax
- Rest Parameters

## Javascript Functions

Functions are one of the key building blocks of Javascript applications.

A standard function is defined like this:

```javascript
function snail() {
  console.log("Hello Snail! 🐌");
}

snail(); // And called by name.
```

## Anonymous Functions

Unnamed function are called anonymous\*:

```javascript
setTimeout(function(){ console.log("Hello Mail! 📨"; }, 500);
```

Anonymous functions can be assigned to variables:

```javascript
let nail = function () {
  console.log("Hello Nail! 💅");
};

nail(); // And called liked named functions.
```

_\*Anonymous, derived from the Greek word ἀνωνυμία, anonymia, meaning "without a name" or "namelessness"._

## Callback Functions

In Javascript functions can be passed as parameters to other functions. We call these "callback functions" as they aren't executed immediately.

Example: `setTimeout` takes a callback function and a time in milliseconds as arguments. The callback function is executed after the provided time elapses.

```javascript
function whale() {
  console.log("Hello Whale! 🐋");
}

let tail = function () {
  console.log("Hello Tail! 🦨");
};

setTimeout(whale, 500); // Named function as callback.

setTimeout(tail, 1500); // Variable-assigned anonymous function as callback.

// Inline anonymous callback functions are also handy:

setTimeout(function () {
  console.log("Hello Sail! ⛵");
}, 2000);
```

☝️ Callbacks can be named functions, anonymous functions, or anonymous functions assigned to variables.

## Arrow Functions

Another way to define anonymous function is with the "arrow operator" `=>`:

```javascript
let gale = () => {
  console.log("Hello Gale! 🌬️");
};

gale(); // Called by variable name.
```

Arrow functions can also be defined with parameters:

```javascript
let rail = (times) => {
  for (let i = 0; i < times; i++) {
    console.log("Hello Rail! 🚊");
  }
};

rail(5);
```

## Arrow Function Variants - No Braces

Arrow functions that contain a single statement can be written without curly braces.

These are called "implicit\* return" functions.

let implicit = (word, emoji) => `Hello ${word}! ${emoji}`;

Implicit return functions automatically return the value of the function statement.

```javascript
// Here, the implicit function returns a string which is then logged:
console.log(implicit("Trail", "🌠"));

// Hello Trail! 🌠
```

## Explicit\* Return

The above `implicit` function is equivalent to:

```javascript
let explicit = (word, emoji) => {
  return `Hello ${word} ${emoji}`; // Explicit Return Statement
};

console.log(explicit("trail", "🌠"));
```

_\*Implicit means something implied but not stated directly. Explicit means something made clear and stated plainly._

## Arrow Function Variants - Unadorned

One line, one argument, arrow functions can be written without parentheses or curly braces:

```javascript
let unadorned = (emoji) => `Hello Scale! ${emoji}`;

console.log(unadorned("⚖️"));

// Hello Scale! ⚖️
```

Unadorned arrows are also implicit return functions.

**⏳ Wait for it...** We'll use this style a lot in the coming sections on array helpers.

#### Resources

- [ES6 Arrow Functions: Fat and Concise Syntax in JavaScript](https://www.sitepoint.com/es6-arrow-functions-new-fat-concise-syntax-javascript/)

## Anonymous Arrow Callbacks

Arrow functions are a nice way to define clear and concise callback functions.

Compare the readability of this regular callback:

```javascript
setTimeout(function () {
  console.log("Hello Veil! 👰");
}, 225);
```

With the arrow version:

```javascript
setTimeout(() => console.log("Hello Veil! 👰"), 225);
```

There's a lot less "punctuation noise", which makes the code easier to read for others.

## Loop Da Loop - For Of

Beyond the standard `for` loop, there are two other popular ways to loop through Arrays in Javascript.

The `for of` loop assigns each element in turn a loop variable:

```javascript
let fruitBasket = ["🍎", "🍓", "🍒", "🥝"];

// for-of: Concise loop when you don't need the index value.

for (const fruit of fruitBasket) {
  console.log(fruit);
}
```

The `fruit` variable is scoped to the curly-braced code block.

**☑️ Best Practice:** Define your loop variables as `const` to prevent accidental modification of array elements.

## Loop Da Loop - forEach

The array `forEach` method passes each element in turn as an argument to a provided callback:

```javascript
// Print every element using an arrow function:

fruitBasket.forEach((fruit) => console.log(fruit));

// With forEach you can also get access to the index:

fruitBasket.forEach((fruit, i) => console.log(`${i}: ${fruit}`));

// 0: 🍎
// 1: 🍓
// 2: 🍒
// 3: 🥝
```

## Loop Da Loop - forEach

Longer `forEach` callbacks are also possible.

Let's build a fruit pyramid:

```javascript
fruitBasket.forEach((fruit, i) => {
  let length = fruitBasket.length;
  let row = " ".repeat(length - i) + fruit.repeat(i + 1);
  console.log(row);
});

//    🍎
//   🍓🍓
//  🍒🍒🍒
// 🥝🥝🥝🥝
```

## Array Helpers

Javascript has lots of built in methods that make working with arrays a joy.

Imagine we have the following array of objects:

```javascript
const animals = [
  { name: "Monkey", emoji: "🐒", legs: 2, mana: 45, count: 3 },
  { name: "Dog", emoji: "🐕", legs: 4, mana: 89, count: 2 },
  { name: "Cow", emoji: "🐄", legs: 4, mana: 3, count: 5 },
  { name: "Gorilla", emoji: "🦍", legs: 2, mana: 56, count: 2 },
  { name: "Deer", emoji: "🦌", legs: 4, mana: 97, count: 5 },
  { name: "Kangaroo", emoji: "🦘", legs: 2, mana: 4387, count: 1 },
  { name: "Turkey", emoji: "🦃", legs: 2, mana: 17, count: 7 },
];
```

Let's use `find`, `map`, `filter`, `join`, `includes`, `every`, `some`, and `reduce` to make sense of this data.

**Remember**, we'll be making heavy use of implicit-return arrow functions.

#### Resources

- [Learn more about all these Array methods and others at the Mozilla Developer Network (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).

## Array Transformations - Map

The array `map` method creates a new array of the same size.

The provided callback is used to transform each element in the original array to the corresponding element in the new array.

`map` an array of animal emojis based on each animal's count:

```javascript
const emojiZoo = animals.map((animal) => animal.emoji.repeat(animal.count));

console.log(emojiZoo); // Display the new array of strings.

// [ "🐒🐒🐒", "🐕🐕", "🐄🐄🐄🐄🐄", "🦍🦍", "🦌🦌🦌🦌🦌", "🦘", "🦃🦃🦃🦃🦃🦃🦃" ]
```

## Array Transformations - Filter

The `filter` method returns a new array of elements selected from the original array.

Each element is tested using the callback function. The new array contains elements where the callback returned `true`.

`filter` for only four legged animals:

```javascript
const fourLegsGood = animals.filter((animal) => animal.legs == 4);

console.log(fourLegsGood); // Two legs baaaaaaaaad-🐑

// [ { name: 'Dog',  emoji: '🐕', legs: 4, mana: 89, count: 2 },
//   { name: 'Cow',  emoji: '🐄', legs: 4, mana: 3,  count: 5 },
//   { name: 'Deer', emoji: '🦌', legs: 4, mana: 97, count: 5 } ]
```

## Array Search - Find

Sometimes you want to `find` an array element based on its property values. The callback you provide must return a Boolean value.

`find` only the cow:

```javascript
const cow = animals.find((animal) => animal.name == "Cow");

console.log(cow.emoji);

// 🐄
```

If multiple elements match, only the first is returned.

## Array Tests - Includes

Sometimes you wish to know if your array contains a specific object.

Determine if the array `includes` a Gorilla:

```javascript
// Map to names and then test inclusion of 'Gorilla'.

if (animals.map((a) => a.name).includes("Gorilla")) {
  console.log("There are Gorillas in the mist.");
}

// There are Gorillas in the mist.
```

## Method Chaining

Calling a method on the result of a previous method is called "method chaining". In the above example `map` returns an array of strings and then `includes` looks through that array for a specific string.

## Array Tests - Some, Every

Sometime you wish to know if a specific Boolean condition occurs in `some` or `every` one of your array elements.

Are `some` animals ready for the rap battle?

```javascript
const manaNeededToBattle = 17;

const someAreReady = animals.some(
  (animal) => animal.mana >= manaNeededToBattle
); // true
```

Does `every` animal have enough mana for the rap battle?

```javascript
if (animals.every((animal) => animal.mana >= manaNeededToBattle)) {
  console.log("We can battle."); // Will not execute as Cow's mana is not sufficient.
}
```

## Array Reduction - Reduce

Sometimes we want to `reduce` an array down to a single value.

`reduce` the animal array down to a sum of all animal counts:

```javascript
// Sum animal counts into 'total' with a starting sum of zero.

const totalCount = animals.reduce((total, animal) => total + animal.count, 0);

console.log(`In total there are ${totalCount} animals.`);

// In total there are 25 animals.
```

## Reduce Explained

The `reduce` method takes a callback and a starting value. As it iterates through the array, the return value of the callback is assigned to an “accumulator” variable.

```javascript
const totalCount = animals.reduce((total, animal) => total + animal.count, 0);
```

Here, the callback’s first parameter `total` is the accumulator. It stays in scope across the entire array.

The callback’s second parameter `animal` is assigned each array element in turn.

In this example the accumulator's starting value is set to zero.

## Array Reduction - Join

Sometimes we want to `join` all array element together into a string.

First `map` to names and then `join` into a guest list:

```javascript
const guestList = animals.map((animal) => animal.name).join(", ");

console.log(guestList);

// Monkey, Dog, Cow, Gorilla, Deer, Kangaroo, Turkey
```

The `join` method takes a string value to use as "glue" between each element. You can use a empty string to go "glueless".

## Destructuring - Arrays

Destructuring is a way of teasing apart collections and assigning the component values to variables.

Instead of indexed array assignment:

```javascript
const hearts = ["🖤", "❤️", "💛"];

const black = hearts[0];
const red = hearts[1];
const yellow = hearts[2];

console.log(yellow); // 💛
```

We can write:

```javascript
const hearts = ["🖤", "❤️", "💛"];

const [black, red, yellow] = hearts;

console.log(yellow); // 💛
```

## Destructuring - Function Return Values

Let's say you a function named `weather` that returns an array of three temperatures.

```javascript
const temperatures = weather(); // [10, 15, 22]
```

And you know that the forecasted low, high, and average temperature appear in that order in the array.

You can destructure the returned array into the variables `low`, `high`, and `average`:

```javascript
const [low, high, average] = weather(); // [10, 15, 22]

console.log(`Average: ${average} Low: ${low} High: ${high} `);

// Average: 22 Low: 10 High: 15
```

## Destructuring - Objects

We can also promote object keys to variables using destructuring:

```javascript
const adventures = { mountain: "⛰️", desert: "🏜️" };
const { mountain, desert } = adventures;

console.log(mountain); // ⛰️
console.log(desert); // 🏜️
```

We can also name the variables sometime different from the object keys:

```javascript
const { mountain: everest, desert: sahara } = adventures;

console.log(sahara); // 🏜️
console.log(everest); // ⛰️
```

## Destructuring - Nested Data

Destructuring can also be used to pluck data out of nested data structures, like an array of objects:

```javascript
const animalFriends = [
  { name: "Monkey", emoji: "🐒" },
  { name: "Dog", emoji: "🐕" },
  { name: "Cow", emoji: "🐄" },
];

// - Skip the zeroth position in the array with a comma.
// - Grab the emoji out of the object at first position.
// - Skip the object in the final position of the array.
const [, { emoji: dogEmoji }] = animalsFriends;

console.log(dogEmoji); // 🐕
```

## Complex Nested Data

This example from [the MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Nested_object_and_array_destructuring) shows the destructuring of the kind of object you might get back from an API:

```javascript
// Let's pretend this data came from an API.
const apiResponse = {
  title: "JS Environment",
  translations: [
    {
      locale: "de - Germany",
      last_edit: "2014-04-14T08:43:37",
      title: "JS Umgebung",
    },
  ],
};

// Pluck the English and German title from the data.
let {
  title: englishTitle,
  translations: [{ title: localeTitle }],
} = apiResponse;

console.log(englishTitle); // "JS Environment"
console.log(localeTitle); // "JS Umgebung"
```

#### Resources

- [MDN Documentation on Destructuring Assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

## Object Tricks - Functions Properties

Functions can be added to objects too:

```javascript
const user = {
  username: "stungeye",
  age: 42,
  printInfo: function () {
    console.log(`${this.username} is ${this.age}.`);
  },
};

user.printInfo();

// "stungeye is 42."
```

Functions attached to objects are called methods.

**⚠️ Warning:** Arrow functions don't bind to the object's `this` so they don't work well as object properties:

```javascript
const brokenUser = {
  username: "stungeye",
  age: 42,
  printInfo: () => {
    console.log(`${this.username} is ${this.age}.`);
  },
};

user.printInfo(); // "undefined is undefined."
```

#### Resources

- [MDN Arrow Functions - No Separate This](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#No_separate_this)

## Object Tricks - Property Access

Object properties can be access by string index or by "dot" access.

```javascript
const games = { soccer: "⚽", baseball: `⚾` };

// Bracket notation using a string index:
console.log(games["soccer"]);

// Dot notation using a period:
console.log(games.baseball);

// ⚽
// ⚾
```

## Object Tricks - Looping

We can use destructuring along with the `Object.entries` method to loop over the key/value pairs in an object.

```javascript
for (const [game, ball] of Object.entries(games)) {
  console.log(`We use a ${ball} to play ${game}.`);
}

// We use a ⚽ to play soccer.
// We use a ⚾ to play baseball.
```

This works because `Object.entries(games)` returns an array of arrays:

```javascript
[
  ["soccer", "⚽"],
  ["baseball", "⚾"],
];
```

## Spread Syntax - Function Arguments

We sometimes need to "spread out" the contents of an array or a string into the arguments of a function call.

We can do this with the `...` spread syntax.

For example, the `Math.max` method takes any number of arguments.

```javascript
console.log(Math.max(42, 56, 102, 12, 15)); // 102
```

But what if the numbers are in an array?

```javascript
const numbers = [42, 56, 102, 12, 15];

console.log(Math.max(...numbers)); // 102
```

## Spread Syntax - Array Literals

The `...` spread syntax can also be used to "spread out" an array within a new array literal.

Array concatenation\* without `concat()`:

```javascript
const litanyStart = ["Fear", "is", "the"];
const litanyEnd = ["mind", "killer"];
const litanyFull = [...litanyStart, ...litanyEnd];

console.log(litanyFull);

// [ 'Fear', 'is', 'the', 'mind', 'killer' ]
```

Or even:

```javascript
const middle = ["is", "the"];
const litany = ["Fear", ...middle, "mind", "killer"];

console.log(litany);

// [ 'Fear', 'is', 'the', 'mind', 'killer' ]
```

\*In the coding world, _concatentation_ means gluing collections together.

## Spread Syntax - Array Destructuring

We can also involve the `...` spread syntax in our destructuring:

```javascript
const sentence = ["this", "is", "the", "house", "that", "🦆", "built"];
const [first, second, ...theRest] = sentence;

console.log(first);
console.log(second);
console.log(theRest);

// this
// is
// [ 'the', 'house", "that", "🦆", "built" ]
```

## Spread Syntax: Objects Literals

The spread syntax can also be used to merge objects.

```javascript
const userSome = { fullName: "Wally Glutton", age: 42 };
const moarUser = { username: "stungeye", friend: "Daisy" };

const userFull = { ...userSome, ...moarUser };

// { fullName: "Wally Glutton", age: 42, username: "stungeye", friend: "Daisy" }
```

If a key appears in more than one of the objects it's the last pair that gets to set the value.

```javascript
let book = { name: "Anathem", quote: "Boredom is a mask frustration wears." };

// Book already contains a 'quote' key but not an 'author' key.
book = { ...book, author: "Neal Stephenson", quote: "Topology is destiny." };

// { name: "Anathem", quote: "Topology is destiny.", author: "Neal Stephenson" }
```

#### Resources

- [MDN Documentation on Spread Syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

## Rest Parameters

Rest parameters use the same `...` syntax as spread, but here we use it to create functions that can take any number of arguments.

```javascript
function sayGoodnight(...names) {
  const nameList = names.join(", ");
  console.log(`Goodnight ${nameList}!`);
}

sayGoodnight("Wally");
sayGoodnight("Wally", "Daisy");
sayGoodnight("Wally", "Daisy", "Sammy", "June");

// Goodnight Wally!
// Goodnight Wally, Daisy!
// Goodnight Wally, Daisy, Sammy, June!
```

#### Resources

- [MDN Documentation on Rest Parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)

## What's Next?

The Javascript language is standardized and improved by way of [the ECMAScript specification](https://en.wikipedia.org/wiki/ECMAScript).

Starting with ECMASCript 6 (ES6 in 2015) a new version of the specification has been published yearly.

Additions to the language don't end up in the browsers immediately, but we can check [caniuse.com](https://www.caniuse.com) to see when new features are widely supported.

Along with improvements to the language syntax there are also new [Web APIs](https://developer.mozilla.org/en-US/docs/Web/API) being added to the browser.

A great way to keep up with the Javascript language is to listen to web development podcasts like [Syntax.fm](https://syntax.fm/) and [Javascript Jabber](https://devchat.tv/js-jabber/), or subscribe to email roundups like [Javascript Weekly](https://javascriptweekly.com/) and [Frontend Focus](https://frontendfoc.us/).

#### Resources

- [Javascript.info - The Modern Javascript Tutorial](https://javascript.info/) - Lots more to learn about modern Javascript here!
