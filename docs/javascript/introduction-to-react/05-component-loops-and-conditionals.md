---
title: Component Loops and Conditionals
parent: Introduction to React (Draft)
nav_order: 5
---

<!--prettier-ignore-start-->
## Component Loops and Conditionals 
{: .no_toc }

## Table of Contents
{: .no_toc .text-delta }  

1. TOC
{:toc}

<!--prettier-ignore-end-->

## Loop Da Loop With Map

Use `map` to create components from collections of data:

<p class="codepen" data-height="385" data-theme-id="light" data-default-tab="js" data-user="stungeye" data-slug-hash="oNbxJwG" style="height: 385px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Looping with Map React">
  <span>See the Pen <a href="https://codepen.io/stungeye/pen/oNbxJwG">
  Looping with Map React</a> by Kyle Geske (<a href="https://codepen.io/stungeye">@stungeye</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

📢 **Note:** Components created with map must be assigned a unique `key` attribute.

_It's best to use database IDs for keys, but if IDs aren't available use the map index as above._

#### Resources

- [Lists and Keys - Official React Docs](https://reactjs.org/docs/lists-and-keys.html)

## Country Explorer App

![Country Explorer App](heart-3204671_640.png){:class="small inline"}

**A "World Countries" React app using:**

- Array of country data from the [restcountries.eu](https://restcountries.eu/) API.
- `Country` component that accepts props for a name, population, area, and flag image url.
- `App` component that uses `map` to declare one `Country` component for each element in our country array.

📢 **Note:** Let's agree not to worry about how the data loading works for now.

_We'll learn a more integrated approach to loading data in React in a later module._

#### Resources

- [Sample Country JSON data returned from restcountries.eu](https://gist.github.com/stungeye/e34eee4f6665a077d320e15e2910b97a)

## React Countries App

Our shiny new Country App:

<p class="codepen" data-height="490" data-theme-id="light" data-default-tab="js" data-user="stungeye" data-slug-hash="dyGprML" style="height: 490px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="React Countries Basic">
  <span>See the Pen <a href="https://codepen.io/stungeye/pen/dyGprML">
  React Countries Basic</a> by Kyle Geske (<a href="https://codepen.io/stungeye">@stungeye</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

📢 **Note:**

- Component styles are provided by [MVP.css](https://andybrewer.github.io/mvp/), which is a dependency of our codepen. There's a small amount of additional CSS in the CSS tab.
- The `Country` component leverages HTML details/summary elements for expandable content.
- JSX elements can be declared across multiple lines as seen within `App` where a `Country` element spans three lines.

## Conditional JSX - &&

We can optionally include JSX using a Boolean `&&`.

Let's add an optional `sup` element for densely populated countries:

<p class="codepen" data-height="410" data-theme-id="light" data-default-tab="js" data-user="stungeye" data-slug-hash="vYLXqWY" style="height: 410px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="React Countries Conditional JSX">
  <span>See the Pen <a href="https://codepen.io/stungeye/pen/vYLXqWY">
  React Countries Conditional JSX</a> by Kyle Geske (<a href="https://codepen.io/stungeye">@stungeye</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

👆 Our first component with code above the return statement.

📢 **Note:** This technique works because `true && expression` always evaluates to `expression`, and `false && expression` always evaluates to `false`.

#### Resources

- [Conditional Rendering - Official React Docs](https://reactjs.org/docs/conditional-rendering.html)

## Conditional JSX - Ternary

Use a ternary to conditionally render different text or different components:

<p class="codepen" data-height="410" data-theme-id="light" data-default-tab="js" data-user="stungeye" data-slug-hash="pogEXBK" style="height: 410px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="React Countries Ternary Conditional JSX">
  <span>See the Pen <a href="https://codepen.io/stungeye/pen/pogEXBK">
  React Countries Ternary Conditional JSX</a> by Kyle Geske (<a href="https://codepen.io/stungeye">@stungeye</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

👆 The `Region` component will display "None" if `region` prop is an empty string.

_Scroll to "Bouvet Island" to see this in action._

#### Resources

- [Official React Docs on Other Conditional Rendering Techniques](https://reactjs.org/docs/conditional-rendering.html)
- [Javascript Ternary Operator - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)

## What's Next?

You've now reviewed the basics of React.

In the next module you'll learn more advanced React topics like:

- Handling User Events
- Maintaining Component State
- Fetching JSON Data
- Handling Form Input
- Styling Components with CSS
