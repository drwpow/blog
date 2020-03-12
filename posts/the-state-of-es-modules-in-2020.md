---
slug: the-state-of-es-modules-in-2020
title: the state of ES Modules in 2020
description: The biggest change to JavaScript in years is a shockingly-quiet revolution
published_date: 2020-03-08 12:00:00 +0000
tags:
  - dev
data:
  updated_date: 2020-03-10 12:00:00 +0000
---

It’s 2020—March to be exact—ES Modules (ESM) are now supported in both [browsers][esm-browser] and
[Node.js][esm-node]. It’s a rather prolific change to JavaScript. So why aren’t more people talking
about it?

JavaScript going from no module system to _any_ module system is pretty big deal, because modules
affect _nearly everything_ about how you write code. Remember that as recently as 2016 we were still
[discussing CommonJS, AMD, UMD, and ESM alongside each other][js-modules]. Going from no module
system to one is enough, but fragmenting between **three** before landing on a common **fourth** has
given us all whiplash. But now that the dust is settling, why aren’t we all sold on ESM?

## modules affect everything

To expand a bit more on why module systems affect so much, let’s take an example of code in CommonJS
and see what it takes to upgrade to ESM:

```js
if (process.env.NODE_ENV === 'development') {
  require('./dev-tools');
}
```

Here, CommonJS has let us conditionally load or not load a module. But if we try and switch to ESM:

```js
if (process.env.NODE_ENV === 'development') {
  import './dev-tools'; // SyntaxError: import declarations may only appear at top level of a module
}
```

Uh oh. ESM demands all synchronous imports are in the top-level scope. So it’s not a 1:1 change. We
_could_, however, replace that with an async import:

```js
if (process.env.NODE_ENV === 'development') {
  import('./dev-tools'); // this works…
}

// … but now code that follows won’t wait for this module to be loaded because it’s async
```

However this fundamentally changes how our program works. Whereas `require()` was synchronous, and
any code that followed was blocked until that module finished loading, `import()` will do no such
thing—it’s a promise that must be handled separately. So now you’ll have to rewrite the rest of this
module to account for that.

Again, this just goes to show that changing a module system isn’t simple—if it was, then they
probably wouldn’t be two systems to begin with! **Changing the module system is one of the biggest
changes you can make in a language** because everything about application development changes with
it—the modules themselves, logic within, and dependency chains.

## Why switch to ESM

A common barrier to ESM is the sheer amount of CommonJS there is—virtually the entire NodeJS
ecosystem is still stick in CommonJS. But switching to ESM yields several benefits:

- ESM is universal, meaning the same JavaScript works in a browser & the server
- Remote module imports—you can load JavaScript [using a CDN][pika-cdn]! 🎉
- No bundling needed
- No transpilation needed (except for legacy browser support feature-by-feature)
- [Better caching][esm-caching] over traditional bundling

## ESM is the future!

So if module systems affect everything, down from the code we write to the JS-powered toolchains we
rely on, why do we continue to write new code that we all know now has an expiration date on it? In
case you’re not sure whether or not you’re writing ESM-ready code, if you‘re using any of the
following, you’re likely not:

- **React:** doesn’t ship an ESM-ready package (as of [Mar 2020][esm-react])
- **npm:** `< 8%` of npm packages [ship ESM][esm-npm] (as of [Oct 2019][esm-npm])
- **Node.js:** though it supports ESM, it’s not in a stable LTS release yet (as of [Nov
  2019][esm-node])
- **webpack**: can’t ship your code as ESM (as of Mar 2020)

By choosing these tools even in new projects, you’re shipping legacy code that already has a limited
lifespan. Be sure you understand the tradeoffs you’re making when doing so.

## How to make a difference

There are lots of new and exciting projects that are leading the way toward shipping more ESM-ready
code to the web:

### Snowpack

[Snowpack][snowpack] (a play on ”no pack”) is an install tool that lets you ship ESM-ready code
straight to the browser, without sacrificing npm. You can `npm install` like normal, and lets you
use Preact, Vue, Svelte, and more but with **zero build time** and **no configuration.**

[snowpack.dev][snowpack]

### Pika CDN

[Pika Registry][pika-registry] does all the work of finding ESM-ready packages for you. Search for
any keyword like you would on npm, except Pika Registry can tell you instantly whether or not that
package supports ESM.

[pika.dev/registry][pika-registry]

### Deno

[Deno][deno] is a new competitor to Node.js, built with V8, Rust, and Tokio and features native
TypeScript and ESM support out-of-the-box. Its guiding principle is to more closely mirror
ECMAScript in the areas where Node departed, principally only allowing ESM rather than CommonJS.
Though the project is in beta, it’s already gathering community attention and shows tons of promise.

[deno.land][deno]

To recap, the current state of ESM in 2020 is: **it’s ready to use everywhere,** but **it’s up to
you to opt-in!** Give some of the new ESM tools a try, and you might find yourself dealing with less
tooling, less configuration, and other great benefits while helping the community at large unify
around ESM.

[deno]: https://deno.land/
[esm-browser]: https://caniuse.com/#feat=es6-module
[esm-caching]: https://dev.to/pika/a-future-without-webpack-ago
[esm-node]:
  https://medium.com/@nodejs/announcing-core-node-js-support-for-ecmascript-modules-c5d6dc29b663
[esm-npm]: https://www.pika.dev/about/stats
[esm-react]: https://github.com/facebook/react/issues/11503
[esm-spec]: https://www.ecma-international.org/ecma-262/6.0/#sec-modules
[js-modules]: https://auth0.com/blog/javascript-module-systems-showdown/
[pika-cdn]: https://www.pika.dev/cdn
[pika-registry]: https://www.pika.dev/registry
[snowpack]: https://www.snowpack.dev/
