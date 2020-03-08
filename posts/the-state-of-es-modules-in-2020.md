---
slug: the-state-of-es-modules-in-2020
title: the state of ES Modules in 2020
description: The biggest change to JavaScript in years is a shockingly-quiet revolution
published_date: 2020-03-08 12:00:00 +0000
tags:
  - dev
---

It’s 2020—March to be exact—ES Modules (ESM) are now supported in both [browsers][esm-browser] and
[Node.js][esm-node]. In the world of JS Development, this news is a prolific milestone. But if
that’s the case, why aren’t more people talking about it?

Remember that as recently as 2016 we were still [discussing CommonJS, AMD, UMD, and ESM alongside
each other][js-modules]. There are probably more apps using AMD & UMD than most realize. JavaScript
going from no module system to a module system is pretty big deal. Modules affect _everything_ about
how you write your code.

## modules affect everything

Say you wrote a program in CommonJS that let you conditionally `require()` something, or not:

```js
if (process.env.NODE_ENV === 'development') {
  require('./dev-tools');
}
```

ESM demands all synchronous imports are in the top-level scope… in other words, they can’t be loaded
conditionally at-runtime. You _could_, however, replace that with an async import:

```js
if (process.env.NODE_ENV === 'development') {
  import('./dev-tools');
}
```

But this fundamentally changes how your program works. Whereas `require()` was synchronous, and the
code that followed would wait on that to be imported before executing, `import()` will do no such
thing. So now you’ll have to rewrite the rest of your application to handle that.

This isn’t an ESM-vs-CJS comparison; this is simply highlighting that **changing the module system
is one of the biggest changes you can make in a language** because everything about application
development changes with it—the modules themselves, logic within, and dependency chains.

## What are the benefits of ESM?

The benefits of ESM, apart from the fact that it’s a unified module system that can drastically
simplify the fragmented JavaScript ecosystem as a whole, supports the following:

- Remote module imports (you can load JavaScript [using a CDN][pika-cdn] 🎉)
- No bundling needed
- No transpilation needed (except for legacy browser support feature-by-feature)
- [Better caching][esm-caching] over traditional bundling

## ESM is the future!

So if module systems affect everything, down from the code we write to the JS-powered toolchains we
rely on, why aren’t we all racing to ESM? After all, ESM is the first [official module
system][esm-spec] for JavaScript.

And yet, not only are we _not_ switching to ESM, we’re still making it harder to unify by writing
more CommonJS and creating more apps that rely on non-ESM-supported tools. A few that come to mind:

- **React:** doesn’t ship an ESM-ready package (as of [Mar 2020][esm-react])
- **npm:** `< 8%` of npm packages [ship ESM][esm-npm] (as of [Oct 2019][esm-npm])
- **Node.js:** though it supports ESM, it’s not in a stable LTS release yet (as of [Nov
  2019][esm-node])
- **webpack**: can’t ship your code as ESM (as of Mar 2020)

By choosing these tools, you’re adding more non-ESM code to the world that will make switching all
the more hard later.

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
