---
title: Define & Use Modules
parent: Javascript Modules and Bundling (Draft)
nav_order: 3
---

<!--prettier-ignore-start-->
## Defining and Using Modules
{: .no_toc }

Javascript modules allow us to export and import functions and objects between files.

## Table of Contents
{: .no_toc .text-delta }  

1. TOC
{:toc}

<!--prettier-ignore-end-->

## Modules - Some History

![Modules - Some History](markus-spiske-xekxE_VR0Ec-unsplash.jpg){:class="small inline"}

During the first twenty years of Javascript development (1995-2015) all of the code added to a web page shared a global namespace.

During this time, third-party libraries and frameworks were most commonly added to a Javascript codebase by manually downloading the library code and loading it through a `<script>` tag.

## Namespace Collisions

![Namespace Collisions](uriel-soberanes-L1bAGEWYCtk-unsplash.jpg){:class="small inline"}

A global namespace worked for simple applications but if any included libraries used the same names for global functions, objects, or variables, the names would collide and the code would break.

Web developers came up with work-arounds, like using global objects as namespaces or [immediately-invoked function expressions](https://developer.mozilla.org/en-US/docs/Glossary/IIFE), but these solutions were not ideal.

## A Simple Example Collision

Imagine including the following in your `index.html` document:

```javascript
<script src="library.js"></script>
<script src="framework.js"></script>
<script src="index.js"></script>
```

In `library.js`:

```javascript
// Saves data to browser's localStorage.
function save(storageData) {
  // Implementation details skipped.
}
```

In `framework.js`:

```javascript
// Saves data to server logs using the fetch API.
function save(logData) {
  // Implementation details skipped.
}
```

And then somewhere in `index.js`:

```javascript
save("Important Data That Needs Saving!");
```

Which `save()` will run? The one from `library.js` or the one from `framework.js`?

## CommonJS and ES Modules

![CommonJS and ES Modules](02_module_scope_04.png){:class="small inline"}

In 2009 NodeJS added a module system called **CommonJS**.

Browser code did not support modules until the 2015 addition of **ES Modules** to the Javascript specification.

🎉🎉🎉

We can now import code into our javascript apps in a safe and standard way!

#### Resources

- Image Source: [ES modules: A cartoon deep-dive](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/)

## Export and Import

Modules in Javascript are just files.

Files can export functionality which can then be imported by other files.

Two new keywords were added to the language to support this:

- `export`: Marks variables, functions, and objects as accessible from outside the current module.
- `import`: Used to import the functionality exported by other modules.

#### Resources

- [Modules Introduction @ Javascript.info](https://javascript.info/modules-intro)

## Export / Import Example

The file `colour.js` exports a function:

```javascript
export function randomColour() {
  return `#${Math.random().toString(16).slice(2, 8).padEnd(6, "0")}`;
}
```

The file `index.js` can now import and use the `randomColour` function:

```javascript
import { randomColour } from "./colour.js";

console.log(randomColour());
```

## Renamed Imports

To avoid name collisions we can change the name of imports:

```javascript
import { randomColour as randHex } from "./colour.js";

console.log(randHex());
```

## Export After Declaration

The `export` statement can also be used after the declaration.

Knowing this, our `colour.js` file could also be written:

```javascript
function randomColour() {
  return `#${Math.random().toString(16).slice(2, 8).padEnd(6, '0')}`;
}

export randomColour; // Export by name.
```

## Default Exports

A module might have a single `export` or it might `export` a number of functions, objects, or variables.

Single exports can be made `default`:

```javascript
// In textHelpers.js:

function reverse(str) {
  return [...str].reverse().join("");
}

export default reverse;

// And then in index.js:

import reverse from "./textHelpers.js";

console.log(reverse("Learn to Question"));
```

**⚠️ Warning: ** No curly braces around the import name when importing defaults.

## Bundling Modules

![Bundling Modules](straw-230112_640.jpg){:class="small inline"}

Although all modern browsers support modules, it isn't yet common practice to rely on browsers to load modules.

Instead, web developers use special programs called "bundlers" to \*bundle\*\* all their modules together.

Some common bundlers are [webpack](https://webpack.js.org/), [parcel](https://parceljs.org/), and [rollup](https://rollupjs.org/guide/en/).

_\*Bundle: When used as a verb, bundle means to "tie or roll up a number of things together as though into a parcel."_

#### Resources

- [Can I Use Browser Modules?](https://caniuse.com/#search=modules%20script%20tag) - Mid-2020: 8% of global web traffic comes from browsers without module support.

## Node Modules

An added benefit of bundling is the ability to easily integrate open source libraries.

Libraries are installed from the command line using the `npm` CLI.

The libraries you install with `npm` are tracked in the `package.json` and `package-lock.json` files, with their source code placed in a `node_modules` folder.

#### Resources

To get a sense of the size of the Javascript open-source ecosystem enabled by `npm`:

- [Awesome Javascript](https://github.com/sorrycc/awesome-javascript#readme) - A collection of awesome browser-side JavaScript libraries, resources and shiny things.

"Awesome Lists" like 👆 exist for all sorts of topics and technolgies:

- [Here's an Awesome List of Awesome Lists](https://github.com/sindresorhus/awesome) - Meta-meta!
