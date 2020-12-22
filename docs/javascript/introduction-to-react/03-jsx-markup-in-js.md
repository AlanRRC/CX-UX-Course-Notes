---
title: JSX - Markup in JS
parent: Introduction to React (Draft)
nav_order: 3
---

<!--prettier-ignore-start-->
## JSX - Markup in JS 
{: .no_toc }

When defining our component templates in React we use a form of HTML/XML embedded within our Javascript code. This markup is called JSX.

## Table of Contents
{: .no_toc .text-delta }  

1. TOC
{:toc}

<!--prettier-ignore-end-->

## JSX

Consider the following Javascript:

```javascript
const header = <h1>Hello JSX!</h1>;
```

**Wait! Is that HTML mixed in with Javascript?**

_Almost..._

It's JSX, a syntax extension to Javascript that allows us to declare markup within our code.

JSX is XML in Javascript.

But watch out, JSX isn't built into Javascript. We need **Babel** to transpile our JSX into regular Javascript.

## Babel Compiles JSX into Pure Javascript

Go back to the last CodePen and click the "View Compiled" button to see the Javascript version of the JSX. Babel transpilation is built in to [our React CodePen Template](https://codepen.io/stungeye/pen/rNxeMWL) settings.

#### Resources

- [W3 Schools Intro to XML](https://www.w3schools.com/xml/xml_whatis.asp)
- [Babel](https://babeljs.io/) - The transpiler that allows us to use JSX in our Javascript.

## JSX Validity

Browsers are very forgiving when parsing markup. The following is valid HTML5:

```javascript
<p>We are not closing our paragraphs.
<p><img src="image.png">
<p>And the img tag does not self close.
```

In order to be valid JSX we'd have to include the paragraph close tags and self-close the image tag with a trailing `/` like this:

```javascript
<img src="image.png" />
```

**The rules of JSX:**

- Tags with content must have close tags.
- Tags without content must "self-close" with a forward slash.

## Embedding Expressions in JSX

![Embedding Expressions in JSX ](disguise-1296221_640_a.png){:class="small inline"}

Use curly "moustache" braces to echo variables in JSX:

```javascript
const name = "Moustache Face";
const element = <h1>Hello, {name}!</h1>;

// <h1>Hello, Moustache Face!</h1>
```

Any valid Javascript expression works:

```javascript
const math = <p>2 plus 2 = {2 + 2}</p>;
const text = "Wally Glutton is a Ghost.";
const h2 = <h2>{text.replace("Wally", "Daisy")}</h2>;

// <p>2 plus 2 = 4</p>
// <h2>Daisy Glutton is a Ghost.</h2>
```

Use curly braces to set element attributes:

```javascript
const filename = "image.png";
const image = <img src={filename} />;

// <img src="image.png" />
```

⚠️ **Warning:** When setting attributes don't wrap curly braces in quotes.

If you have: `const inputText = "Wooky!";`

✔️ Do: `<input value={inputText} />`

❌ Don't: `<input value="{inputText}" />`

❌ Don't: `<input value="inputText" />`

## Rendering JSX

We can display JSX within a webpage using `ReactDOM.render()`:

<p class="codepen" data-height="245" data-theme-id="light" data-default-tab="js" data-user="stungeye" data-slug-hash="YzwqGZL" style="height: 245px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Our First JSX Element">
  <span>See the Pen <a href="https://codepen.io/stungeye/pen/YzwqGZL">
  Our First JSX Element</a> by Kyle Geske (<a href="https://codepen.io/stungeye">@stungeye</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

`jsxElement` - The first argument of `ReactDOM.render()` is the JSX to render.

`rootElement` - The second arg is the render location in the HTML (DOM reference).

📢 **Note:** Click the HTML tab to see the `div#root` referenced by `rootElement`.

## JSX Quirks

As you work with JSX you'll notice that it differs from HTML in a few ways:

### Assigning a Class an Element

✔️ Do: Use `className` attribute instead of a `class` attribute.

### Event Handler Attributes

✔️ Do: Use CamelCase for all event attributes. Example: `onClick` instead of `onclick`.

### Associating Input Elements with Labels

✔️ Do: Use `htmlFor` attribute instead of a `for` attribute.

## JSX Quirks - Forms

A few JSX form inputs also differ from HTML:

### Textarea Element Values

✔️ Do use a `value` attribute: `<textarea value="☕" />`

❌ Don’t use content: `<textarea>☕</textarea>`

### Specifying Selected Options

✔️ Do specific selected option using a `value` attribute on the `select`:

```javascript
<select value="⚡">
  <option value="⚡">
  <option value="🎈">
</select>
```

❌ Don’t use the `selected` attribute to select an `option`:

```javascript
<select>
  <option selected value="⚡">
  <option value="🎈">
</select>
```
