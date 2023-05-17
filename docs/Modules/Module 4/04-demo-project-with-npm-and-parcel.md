---
title: Demo Project Using Parcel
parent: User Research and Persona Creation
nav_order: 4
---

<!--prettier-ignore-start-->
## Demo Project Using Parcel 
{: .no_toc }

Let's build a simple data charting project that makes use of a npm package (Chart.js) and uses a bundler (Parcel) to produce deployment-ready code.

## Table of Contents
{: .no_toc .text-delta }  

1. TOC
{:toc}

<!--prettier-ignore-end-->

## Initializing the Demo

Let's create a simple demo app using modules. To start:

- Create a new folder called `modules`.
- Open VS Code and add the `modules` folder to your workspace.
- Open the VS Code terminal. (Windows hotkey: `Ctrl` and `~`)

From the terminal, initialize the folder as a npm project:

```javascript
npm init -y
```

Take a peek at the `package.json` file that is now in your folder.

It should look something like this:

```javascript
{
  "name": "parcel-demo",
  "version": "1.0.0",
  "description": "Demo app using the parcel bundler.",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
  },
  "keywords": ["parcel", "demo"],
  "author": "Wally Glutton",
  "license": "Unlicense",
}
```

This metadata about your project can be updated by hand using any text editor.

## Install Node Packages

![Install Node Packages](chart.png){:class="small inline"}

Let's install a package. For this demo we're going to use the Javascript charting library [chart.js](https://www.chartjs.org/).

From you VS Code terminal:

```javascript
npm install chart.js
```

Look at how your `package.json` file has changed.

There should now be a `dependencies` key defining a dependency to a specific version of chart.js.

You should also now have a `package-lock.json` file. This is a generated file that should not be manually edited.

The `package-lock.json` contains information about your dependencies and also about the dependencies of your dependencies. Look through this file and peek into the `node_modules` folder. By adding chart.js to your project you have actually added six package dependencies to your project instead of one.

#### Resources

- [Official Chart.js Documentation](https://www.chartjs.org/docs/latest/)

## Installing Parcel

![Installing Parcel](parcel.png){:class="small inline"}

We now need a way to bundle our code. For this we'll install the [Parcel](https://parceljs.org/) bundler.

Use your terminal to add **Parcel** as a development dependency:

```javascript
npm install parcel-bundler --save-dev
```

Note the changes to your `package.json` file.

There should now be a `devDependencies` key defining a development dependency to a specific version of parcel.

Take another look at your `package-lock.json` file to see all the new sub-dependencies you've now added to this project. By adding two packages (chart.js and parcel) your project now depends on over 750 packages! Imagine trying to manage these dependencies without a dependency manager.

**Note:** The development dependencies won't be bundled with the app for deployment.

## Why Parcel?

Although webpack is [the most popular bundler](https://2019.stateofjs.com/other-tools/), it is complex to configure from scratch.

The React apps we build this term will come pre-configured to use webpack, but we're using [Parcel](https://parceljs.org/) here because it requires "zero config" for simple apps.

#### Resources

- [Official Parcel Bundler Documentation](https://parceljs.org/getting_started.html)

## Project Files

We're going to create a simple app that displays a pie chart using the chart.js npm module we just added.

- **index.js** - Our script that will import and use chart.js.
- **index.css** - A minimal stylesheet.
- **index.html** - Markup that references other two files.

Create these files and fill with the contents found here:

[Contents of JS / CSS / HTML Files](https://gist.github.com/stungeye/278cc02fa670e3b5ffda31f546905d3c)

Take a look at the code and see if you can figure out what the output might be.

## Parcel Scripts

Most bundlers run in two modes:

- **Development Mode** - Powered by an HTTP server for use while you are writing and testing your code locally.
- **Build Mode** - Bundles and transpiles your code for product with the results written to static html, css and js files.

In order to run `parcel` in these two modes we need to update the `scripts` section of your `package.json` file to include:

```javascript
"dev": "parcel index.html",
"build": "parcel build index.html"
```

## Running Parcel's Development Script

Run the development script from the VS Code terminal:

```javascript
npm run dev
```

The `dev` script tells `parcel` to bundle up our `index.html` with the Javascript and CSS files referred to in the markup.

Node modules imported by the Javascript are also bundled.

The resulting bundle is then hosted by a built-in HTTP server on [localhost:1234](http://localhost:1234).

## Automatical Reloads

![Automatical Reloads](instagram-1882329_640.png){:class="small inline"}

The parcel development server watches your files for changes.

Try changing the contents of the `h1` tag in the `index.html` file.

Notice that the browser page automatically updates to include your saved changes.

The same things goes for your Javascript files, your stylesheets, and dependency changes in your `package.json` file.

**Note:** The size of the chart depends on the CSS width applied to the `body`. Changing the body width in the `index.css` requires a manual reload of the page to properly resize the chart.

## Parcel Build

Run the build script from the VS Code terminal:

```javascript
npm run build
```

The `build` script instructs `parcel` to bundle our `index.html` with its dependencies and save the bundled files to a `dist` folder.

The files in the `dist` folder can now be deployed to a production HTTP server or cloud host.

Try serving the built project files from your Apache server! :)
