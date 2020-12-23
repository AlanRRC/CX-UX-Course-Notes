---
title: React Events, State & Style (Draft)
nav_order: 13
---

<!--prettier-ignore-start-->
# React Events, State, and Style
{: .no_toc }

![Introduction](newtons-cradle-256213_640.jpg){:class="small inline"}

React components are functions that returns JSX that can be customized by passing in "props".

So far we've been creating components with JSX that remains unchanged once rendered.

Here we introduce the dynamic aspects of React that allow components to persist state and to _react_ to user events.

## Table of Contents
{: .no_toc }

1. TOC
{:toc}

<!--prettier-ignore-end-->

## Objective

By the end of this module, you should be able to:

- Bind callback functions to JSX element event handlers.
- Suppress the default behaviour of an event handlers while adding your own event behaviour.
- Fetch and modify the state of a component using the getters and setters provided by the UseState hook.
- Explain the role of immutable state in React components.
- Bind component state to form inputs.
- Change the look and feel of components using CSS files and inline JSX styles.
- Fetch JSON data from a URL when a component first mounts using React's useEffect hook.

## Reacting to Events

Adding events to JSX element is done using camelCase element attributes.

In this example we are adding an "on click" event to a button with the `onClick` attribute:

<p class="codepen" data-height="300" data-theme-id="light" data-default-tab="js,result" data-user="stungeye" data-slug-hash="eYJBOjv" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Events in React">
  <span>See the Pen <a href="https://codepen.io/stungeye/pen/eYJBOjv">
  Events in React</a> by Kyle Geske (<a href="https://codepen.io/stungeye">@stungeye</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

📢 **Note:**

- The function we are binding to is nested within our component. Functions defined within functions are a thing.
- The event attribute value is the name of the function inside curly braces.

#### Resources

- [List of Officially Support Events](https://reactjs.org/docs/events.html#supported-events) - Includes keyboard, mouse, and touch events.

## Inline Event Handlers

Short event handlers can be written inline within the attribute value:

<p class="codepen" data-height="285" data-theme-id="light" data-default-tab="js,result" data-user="stungeye" data-slug-hash="zYroNRJ" style="height: 285px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Inline Events in React">
  <span>See the Pen <a href="https://codepen.io/stungeye/pen/zYroNRJ">
  Inline Events in React</a> by Kyle Geske (<a href="https://codepen.io/stungeye">@stungeye</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

## The Event Object

The event object can be received as a function parameter and used to prevent default actions or to access the target DOM node:

<p class="codepen" data-height="385" data-theme-id="light" data-default-tab="js,result" data-user="stungeye" data-slug-hash="eYJBgjK" style="height: 385px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Event Parameter React">
  <span>See the Pen <a href="https://codepen.io/stungeye/pen/eYJBgjK">
  Event Parameter React</a> by Kyle Geske (<a href="https://codepen.io/stungeye">@stungeye</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

👆 `event.preventDefault()` stops browser from following the link.

`event.target.href` retrieves the `href` attribute of the target `<a>` DOM node.

## The State of Things

React components can be configured in two complimentary ways:

1. We've seen that properties can be passed to components as JSX attributes. These `props` are supplied by a component's parent. When these `props` change the component is re-rendered based on the new data.

2. Components can also manage their own internal "state" by way of special getters and setters. When a setter is used to change a component's state the component is re-rendered.

You can think of a component's state as being similar to an object's state. Like with an object's instance variables, every maintains its own unique state.

## The useState Hook

React has a concept called "Hooks" which are functions that let you "hook into" a component's state and its lifecycle.

Normally, variables in Javascript functions go out of scope when a function exits, but the `useState` hook allows us to preserve the internal state of a component.

To define a state variable called `count` that defaults to a value of 0:

```javascript
const [count, setCount] = React.useState(0); // The useState argument is the default value.
```

The `useState` function returns a two element array that we destructure into a getter and a setter.

```javascript
console.log(count); // Access the state via the getter.
setCount(42); // Update the state via the setter.
```

#### Resources

- [Official State Hook Documentation](https://reactjs.org/docs/hooks-state.html)

## Clickety Clicker

Now that we know about `useState` let's build a click counter. We'll use state to keep track of the count:

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="js,result" data-user="stungeye" data-slug-hash="BajKWxe" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="BajKWxe">
  <span>See the Pen <a href="https://codepen.io/stungeye/pen/BajKWxe">
  BajKWxe</a> by Kyle Geske (<a href="https://codepen.io/stungeye">@stungeye</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

👆 The button includes an inline `onClick` handler that increments the count using `setCount`.

📢 **Note:** Outside of CodePen, React apps will often import `useState` separately from the `React` object:

```javascript
import React, { useState } from "react";
```

Allowing `useState` to be accessed directly:

```javascript
const [count, setCount] = useState(0);
```

## Immutable State

It's important to note that component state in React is immutable.

When something is immutable, it means it cannot be changed.

State variables in React cannot be mutated. Instead we must render a new version of the component with new state.

This means we could not modify the `count` state directly in our previous example using:

```javascript
count++; // This would not work.
count = count + 1; // Neither would this.
```

Instead we used the setter provided by the `useState` hook:

```javascript
setCount(count + 1); // Set as one more than the current value of count.
```

Once a setter has been used the component will re-render with a new immutable version of the state.

## Upboat Downboat

Here's a component with a `count` state variable which is set via three different event handlers:

<p class="codepen" data-height="420" data-theme-id="light" data-default-tab="js,result" data-user="stungeye" data-slug-hash="LYGRwdR" style="height: 420px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Up and Down Counter React">
  <span>See the Pen <a href="https://codepen.io/stungeye/pen/LYGRwdR">
  Up and Down Counter React</a> by Kyle Geske (<a href="https://codepen.io/stungeye">@stungeye</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

## Forms in React

We can turn form inputs into "controlled components" by binding them to state using an `onChange` event handler and a `value` attribute.

<p class="codepen" data-height="375" data-theme-id="light" data-default-tab="js,result" data-user="stungeye" data-slug-hash="RwrKWqw" style="height: 375px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Mirror Mirror React">
  <span>See the Pen <a href="https://codepen.io/stungeye/pen/RwrKWqw">
  Mirror Mirror React</a> by Kyle Geske (<a href="https://codepen.io/stungeye">@stungeye</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

👆 Changes to the input text will trigger the `onChange` handler which will set the `text` state with `setState`.

⚠️ **Warning:** The `input` cannot be update via code unless the `value` attribute is bound to the state.

## Styling Components

There are many different ways to style React components.

Four common ways are:

1. Define styles in separate CSS documents and refer to them using JSX `className` attributes.
2. Add inline styles to JSX elements.
3. Use a CSS-in-JS library.
4. CSS Modules

We'll explore the first two of these styling options. See the resources below for links to details on the other two.

#### Resources

- [Comparison of the many CSS-in-JS libraries](https://github.com/MicheleBertoli/css-in-js).
- [Three Part Series on CSS Modules from css-tricks.com](https://css-tricks.com/css-modules-part-1-need/)

## ClassName Styling with .css Files

Here we have a toggle button with Boolean state that we use to set its `className`:

<p class="codepen" data-height="305" data-theme-id="light" data-default-tab="js,result" data-user="stungeye" data-slug-hash="XWXpYxj" style="height: 305px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="XWXpYxj">
  <span>See the Pen <a href="https://codepen.io/stungeye/pen/XWXpYxj">
  XWXpYxj</a> by Kyle Geske (<a href="https://codepen.io/stungeye">@stungeye</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

👆 Check the CSS tab to see the two class definitions.

📢 **Note:** Examples in these notes have additional styles applied by [MVP.css](https://andybrewer.github.io/mvp/), which is included via the CodePen CSS settings.

In the above example the button's flat look, rounded corners, white text, and hover effect, were added by MVP.css.

Only the orange/purple toggle is controlled by the component via the `className` attribute.

## Inline JSX Styles

Styles can be define as Javascript objects and applied using a `style` attribute:

<p class="codepen" data-height="350" data-theme-id="light" data-default-tab="js,result" data-user="stungeye" data-slug-hash="YzwNjYg" style="height: 350px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Inline Styling React">
  <span>See the Pen <a href="https://codepen.io/stungeye/pen/YzwNjYg">
  Inline Styling React</a> by Kyle Geske (<a href="https://codepen.io/stungeye">@stungeye</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

⚠️ **Warning:** This is not actually inline CSS. It's Javascript.

- Style object keys must be converted from CSS hypen-style to camelCase.
- Style object values must be strings.

## Dynamic Inline Styles

Inline styles can be combined with state and events to create dynamic styles:

<p class="codepen" data-height="525" data-theme-id="light" data-default-tab="js,result" data-user="stungeye" data-slug-hash="QWydBVG" style="height: 525px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="QWydBVG">
  <span>See the Pen <a href="https://codepen.io/stungeye/pen/QWydBVG">
  QWydBVG</a> by Kyle Geske (<a href="https://codepen.io/stungeye">@stungeye</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

👆 In this example we're using state to keep track of the mouse's position. The background colour of the button is dynamically defined based on the x and y location of the mouse.

In `handleMouseMovement` the x and y position of the mouse is adjusted to reflects a value from 0 to 255 within the button.

⚠️ **Warning:** This example may not work on mouse-less devices like phones and tablets.

## Fetching Data

Loading data from a JSON file URL or an HTTP API can be integrated into a component using the `useEffect` hook:

<p class="codepen" data-height="350" data-theme-id="light" data-default-tab="js,result" data-user="stungeye" data-slug-hash="vYLgGZd" style="height: 350px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Fetching Dogs with React">
  <span>See the Pen <a href="https://codepen.io/stungeye/pen/vYLgGZd">
  Fetching Dogs with React</a> by Kyle Geske (<a href="https://codepen.io/stungeye">@stungeye</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

📢 **Note:**

- The first argument of `React.useEffect` is a callback function that fetches data and sets state.
- If the second argument is an empty array (like above) the callback will only execute when the component first mounts.
- Without this optional second argument the callback will execute with every update.

#### Resources

- [Fetching Data with Hooks](https://www.robinwieruch.de/react-hooks-fetch-data).
- [More information on `React.useEffect`'s second argument](https://reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects).

## What's Next?

There's so much more to learn about React.

**From here you might want to explore more React concepts:**

- [Thinking in React](https://reactjs.org/docs/thinking-in-react.html) - The thought process behind building a searchable product data table using React.
- [Fragments](https://reactjs.org/docs/fragments.html) - Group JSX children without adding an extra DOM node. The short syntax is particularly nice.
- [Context](https://reactjs.org/docs/context.html) - Pass data through your component tree.
- [Render Props](https://reactjs.org/docs/render-props.html) and [Higher Order Components](https://reactjs.org/docs/higher-order-components.html) - Reusable component logic.

**And check out these complimentary tools and frameworks:**

- [React Router](https://reacttraining.com/react-router/) - Route-based component navigation.
- [Redux](https://redux.js.org/) - A state container for JS apps.
- [Next.js](https://nextjs.org/) - Popular React-based app framework.
- [Gatsby](https://www.gatsbyjs.org/) - Static site generator for React.
- You might also want to explore outside the React ecosystem and look into [Vue](https://vuejs.org/) or [Svelte](https://svelte.dev/).
