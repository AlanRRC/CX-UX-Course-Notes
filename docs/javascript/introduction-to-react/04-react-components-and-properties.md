---
title: React Components and Properties
parent: Introduction to React (Draft)
nav_order: 4
---

<!--prettier-ignore-start-->
## React Components and Properties 
{: .no_toc }

React components are functions that return JSX. The JSX returned can be customized through the use of component properties.

## Table of Contents
{: .no_toc .text-delta }  

1. TOC
{:toc}

<!--prettier-ignore-end-->

## My First React Component

Let's render a simple React component:

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="js" data-user="stungeye" data-slug-hash="OJMNpZG" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Hello React Component">
  <span>See the Pen <a href="https://codepen.io/stungeye/pen/OJMNpZG">
  Hello React Component</a> by Kyle Geske (<a href="https://codepen.io/stungeye">@stungeye</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

**Things to know about React components:**

- React components are functions named in CamelCase.
- Functional components return JSX.
- Components are declared as JSX elements of the same name: `<Hello />`

📢 **Note:** We won't be learning about legacy [class-based components](https://www.freecodecamp.org/news/functional-components-vs-class-components-in-react/).

## CodePen Auto-Imports Dependencies

These CodePens were configured to auto-include the React dependencies, so missing from the code are the imports:

```javascript
import React from "react";
import ReactDOM from "react-dom";
```

## Props is Short for Properties

React components can be made configurable by accepting a single `props` parameter.

Let's update the `Hello` component to accept and use a `name` property:

```javascript
function Hello(props) {
  return <p>Hello {props.name}</p>;
}
```

A component's attributes become properties of the `props` object:

```javascript
<Hello name="Wally" />
<Hello name="Daisy" />
```

👆 In this example the values of the `name` attributes are assigned to `props.name` within the declared `Hello` components.

## Components within Component

To demo `props` let's nest two `Hello` components in a new `App` component:

<p class="codepen" data-height="400" data-theme-id="light" data-default-tab="js" data-user="stungeye" data-slug-hash="ZEQWyYq" style="height: 400px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="React Components within Components">
  <span>See the Pen <a href="https://codepen.io/stungeye/pen/ZEQWyYq">
  React Components within Components</a> by Kyle Geske (<a href="https://codepen.io/stungeye">@stungeye</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

👆 Rendering the `App` component into the `rootElement` on the last line of code.

## Multiple Props

Components can accept any number of props. Let's add a `greeting` prop:

<p class="codepen" data-height="400" data-theme-id="light" data-default-tab="js" data-user="stungeye" data-slug-hash="xxZVJeV" style="height: 400px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Multiple Props React">
  <span>See the Pen <a href="https://codepen.io/stungeye/pen/xxZVJeV">
  Multiple Props React</a> by Kyle Geske (<a href="https://codepen.io/stungeye">@stungeye</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

📢 **Note:** The order of the attributes on a JSX element does not matter.

## Destructuring Props

Use a destructuring function parameter to unpack the prop object properties:

<p class="codepen" data-height="400" data-theme-id="light" data-default-tab="js" data-user="stungeye" data-slug-hash="eYJdoPY" style="height: 400px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Destructuring Props React">
  <span>See the Pen <a href="https://codepen.io/stungeye/pen/eYJdoPY">
  Destructuring Props React</a> by Kyle Geske (<a href="https://codepen.io/stungeye">@stungeye</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

👆 Instead of `props.greeting` and `props.name` we now use `greeting` and `name` within the component.

## Destructuring Function Parameters

Destructuring can be used for any function parameter in Javascript. For example:

```javascript
function logLove({ count, animals }) {
  console.log(`I love you as much as ${count} ${animals}.`);
}

const data = { count: 42, animals: "Elephants" };
logLove(data);
```

#### Resources

- [Unpacking fields from objects passed as function parameter - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Unpacking_fields_from_objects_passed_as_function_parameter)

## Default Props Values

Destructuring the function parameter allows for prop defaults:

<p class="codepen" data-height="400" data-theme-id="light" data-default-tab="js" data-user="stungeye" data-slug-hash="pogyQBB" style="height: 400px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Default Props Values React">
  <span>See the Pen <a href="https://codepen.io/stungeye/pen/pogyQBB">
  Default Props Values React</a> by Kyle Geske (<a href="https://codepen.io/stungeye">@stungeye</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

👆 The `Hello` component can now be declared with zero, one, or two attributes.

#### Resources

- [Setting defaults for object parameters with destructuring - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Setting_a_function_parameters_default_value)
