---
title: Other Concerns
parent: User Research and Persona Creation
nav_order: 5
---

<!--prettier-ignore-start-->
## Other Concerns 
{: .no_toc }

There are a few other module and bundling adjacent topics that we need to cover to round out our knowledge.

## Table of Contents
{: .no_toc .text-delta }  

1. TOC
{:toc}

<!--prettier-ignore-end-->

## Semantic Versioning

![Semantic Versioning](wheelbarrel-no-tilde-caret-white-bg-w1000.jpg){:class="small inline"}

When you look into your `package.json` file you will see that dependency version numbers are listed using the **semver** or semantic versioning format: **MAJOR.MINOR.PATCH**

Library authors increment the:

- MAJOR version when code changes break backwards compatibility.
- MINOR version when backward compatible new features are added.
- PATCH version when backwards compatible bug fixes are applied.

## Why Use Semantic Version Numbers?

By specifying the semver of a library in your `package.json` you ensure that you'll be able to rebundle your application in the future using the same library versions you used while you developed the application.

Without semver `npm` might accidentally bundle your application with newer but incompatible versions of a module.

To future proof your code, or for security reasons, you might want to allow `npm` to incorporate the latest MINOR or PATCH release of a dependency. There's a resource linked below with more information.

#### Resources

- [Configuring npm to Fetch the Latest Minor or Patch Version of a Module](https://stackoverflow.com/questions/22343224/whats-the-difference-between-tilde-and-caret-in-package-json)
- [Semantic Versioning Specification](https://semver.org/)
- [About Semantic Versioning and npm](https://docs.npmjs.com/about-semantic-versioning)
- Image Source: [Semantic Versioning Cheatsheet](https://bytearcher.com/goodies/semantic-versioning-cheatsheet/)

## Source Code Transpiling

![Transpiling](babel.jpg){:class="small inline"}

Bundlers can also be configured to convert (or _transpile_\*) code written using modern Javascript syntax into old school Javascript.

Code that is bundled and transpiled will then run on older browsers that don't support modern Javascript syntax.

Parcel automatically uses [Babel](https://babeljs.io/) to transpile our bundled code.

By default Parcel uses Babel to target "every browser that has 0.25% or more of the total amount of active web users."

_\*Transpile: A process similar to compilation that translates source code from one programming language to another language, or from one version of a language to another version of that language._

#### Resources

- [Parcel Babel Default Transformations](https://parceljs.org/javascript.html#default-babel-transforms)

## Browser Modules

If you don't need `npm` packages, and your users have modern browsers, then you can load modules using the browser instead of a bundler.

This is done using a `type` attribute of `module` on your script tag:

```javascript
<script type='module'>import reverse from './textHelpers.js'; console.log(reverse('Learn to Question'));</script>
```

Or even:

```javascript
<script type"module" src="index.js"></script>
```

Assuming that `index.js` uses an `import` statement.

## How Browsers Load Modules

Files imported by scripts marked as `type="module"` are loaded using [Cross-Origin Resource Sharing](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) (CORS) requests.

**⚠️ WARNING:** Browsers don't support CORS requests for local files using `file:///` URLs.

If you want to test browser modules your files need to be loaded from an HTTP server.

This could be the Apache server you already have installed, or you could install [the VS Code Live Server Extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).

### With VS Code Live Server Installed

Click "Go Live" in bottom status bar to launch an HTTP server on port 5500. Your `index.html` will open in the browser. As you make changes to your files the browser will automatically reload the page. Clicking "Port 5500" in the status bar will shut down the server.

#### Resources

- [Snowpack](https://www.snowpack.dev) - A build tool that leverages browser modules to remove bundling from your development workflow.
- [Browser Modules Documentation @ MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
