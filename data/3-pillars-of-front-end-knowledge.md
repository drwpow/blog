---
title: the 3 pillars of front-end knowledge
date: 2020-02-17
description: The world of front-end is vast, so where does one start? And where does mastery end?
slug: 3-pillars-of-front-end-knowledge
tag: dev
updated: 2020-02-17
---

It’s been a little over a year since Chris Coyier’s post [_The Great Divide_][css-gd] came out, the
first blog post I remember reading that drew a line in the sand between two distinct camps (armies?)
of front-end developers. Which I guess are, like, at war with each other, or something:

> On one side, an army of developers whose interests, responsibilities, and skill sets are heavily
> revolved around JavaScript. On the other, an army of developers whose interests, responsibilities,
> and skill sets are focused on other areas of the front end, like HTML, CSS, design, interaction,
> patterns, accessibility, etc.

In that year following the post, more of us have begin to see these spheres of expertise pulling
apart, whether this post opened our eyes, or we witnessed the same patterns Chris did.

**But what if the divide was actually made up?** What if, instead of a divide, we just collectively
admitted that front-end development is bigger, and more complicated than we originally thought? If
we recognized that doing JavaScript _well_ was harder than anticipated, and that it took smart
cookies with Computer Science (CS) degrees a couple decades to push the ecosystem closer to where it
needed to be?

This post is an appeal to view it all as one, core knowledge, and one core role (albeit big as
hell). Maybe it’s harder to attain true mastery than we originally thought. But isn’t that what
makes it deep, and exciting, and satisfying to try?

I started thinking about this subject again recently when a backend developer reached out to me,
wanting to learn about modern front-end dev (they hadn’t really kept up for the past, oh, 6 years or
so). In listing out all the things they could learn, I noticed **three** (not two) major groupings
started forming. In my mind this not only lays a groundwork for possible starting points, but
distinct axes of mastery to pursue the more you commit to front-end.

So here are the three pillars to front-end development, not in any particular order, that your
journey should cross into at some point:

## 👨‍🎨 Pillar 1: Browser APIs & Rendering (HTML/CSS)

The pillar of Browser APIs & Rendering revolves around two central questions: **On the web, how do I
make things look like things?** and **How does a browser work to help me accomplish this?**

At beginner levels, browser rendering involves understanding the fundamentals of HTML & CSS to get
code to look like a design. At intermediate levels, this gets into animations, render profiling, and
making interactive things perform adequately in a browser environment. At the highest levels,
mastery of browser rendering means being able to describe in great detail how assets are requested
and the priority of their loading, the browser paint API, and how to render anything—even 3D—at 60
frames per second (the [maximum a browser will allow][surma-120fps]).

For the traditional CS student, the browser is something that often gets underestimated. This
results in the common “I don’t understand CSS” state of confusion that so many backend developers
find themselves in. And it _is_ confusing, until you treat the browser as the special, weird runtime
environment that it is. Often times it’s what you’re fighting with here—your own misconceptions of
what the browser is doing.

Take the following with a grain of salt, but here is roughly how you might track growth of your
knowledge in this area:

### Beginner

| Skill                             | Example                                                                                       |
| :-------------------------------- | :-------------------------------------------------------------------------------------------- |
| Fundamentals of HTML              | _I understand what different HTML tags do_                                                    |
| Fundamentals of CSS               | _I understand how to use & apply CSS to HTML to style pages_                                  |
| Fundamentals of Browser Resources | _I understand where to put CSS & JS files and reference them in the HTML for them to show up_ |

### Intermediate

| Skill                        | Example                                                                                                                                                                     |
| :--------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Accessibility                | _I can ensure sites are usable for people that use screen readers and other assistive technologies_                                                                         |
| Animations                   | _I can animate objects using either [CSS][css-animation] or a JavaScript framework like [Three.js][three]_                                                                  |
| Hardware acceleration        | _I understand certain properties & animations can [use the GPU][gpu-acceleration] for performance_                                                                          |
| Render profiling²            | _I can use tools like [Lighthouse](lighthouse) to understand what is slowing down browser rendering & performance_                                                          |
| Image formats                | _I understand when to use each image format (`JPG`, `PNG`, `WebP`, …), and how to [optimize them][imageoptim]_                                                              |
| Common Browser API knowledge | _I understand common [browser APIs][browser-api] like [`fetch`][fetch] and [`history`][history], and know when to leverage the browser and when to write my own JavaScript_ |

### Master

| Skill                                | Example                                                                                                                                                                             |
| :----------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Resource prioritization² ³           | _I understand [resource prioritization][resource-prioritization] and the steps from streaming initial HTML payload, to fetching the resources, to rendering them in priority order_ |
| Render debugging²                    | _I understand how the browser performs [paint operations][simplify-paint] and how to optimize them_                                                                                 |
| Comprehensive Browser API Knowledge² | _I understand more invisible APIs like [WebGL][webgl-api], [Paint][paint-api], and the [DOM][dom] and understand how they differ or can work in sync to render parts of a page_     |
| Browser processes                    | _I understand the [Browser, Renderer, and GPU processes][browser-processes] that lie underneath the higher-level APIs_                                                              |

_² related to Pillar 2 / ³ related to Pillar 3_

You may find that much of the “CSS Dev” from the _Great Divide_ post fits in here, with the addition
of JavaScript like `fetch` and `history`, and the omission of CSS frameworks like [SMACSS][smacss].
So already we’re breaking up that division! As for CSS framework knowledge, that fits more neatly
in…

## 👩‍🔬 Pillar 2: JS Programming & Architecture

The pillar of JavaScript & Architecture is the recent development of front-end into a more formal,
proper software environment from web dev’s _laissez-faire_ “just throw that code anywhere”
beginnings. This roughly correlates with the JavaScript-oriented type in Chris’ post somewhat, and
is closer to the comfort sphere of a traditional Computer Science education. Whereas Pillar 1 trends
toward static display, Pillar 2 adds dynamism, automation, and interaction. You could even call this
“the backend of front-end.”

This pillar is concerned with **How should this application be interacted with?** and **How should
code for the front-end be organized for delivery and team maintainability?** The pursuit of these 2
questions, together, have led to many milestones such as that React thing you’ve heard so much about
(along with Node.js, which we’ll cover more in the last pillar).

Though JavaScript is one of the most popular programming ecosystems, it’s still developing. And for
that reason I don’t feel comfortable dividing intermediate- and master-level topics. Everyone’s
journey through here will differ, and for that reason, I only distinguish between basics and
non-basics.

In your rebuttal of this blog post, please be gentle with this section ;)

### Beginner

| Skill                             | Example                                                                                                                                      |
| :-------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------- |
| Fundamentals of JavaScript        | _I can build basic things with vanilla JS and don’t always need a library (only sometimes)_                                                  |
| JavaScript quirks                 | _I understand the basics of [working with objects][objects] in JS, the basics of [`this`][js-this], and a rough understanding of scopes_     |
| Async knowledge                   | _I understand the basics of [`Promise()`][promise] and can write code to fetch remote data (AJAX) or deal with async operations_             |
| Fundamentals of Frameworks³       | _I understand how to spin up a React / Vue / Svelte / whatever project and get something visible_                                            |
| Fundamentals of CSS organization¹ | _I have some basic strategies to organize styles, whether that’s a methodology like [SMACSS][smacss] or a utility like [Tailwind][tailwind]_ |

### Intermediate/Master

| Skill                       | Example                                                                                                                                                                                                         |
| :-------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Comprehensive JS knowledge³ | _I can solve any common problem in JS (when sensible), and I possess up-to-date knowledge of the latest [ECMAScript 20xx][ecma] features_                                                                       |
| Front-end philosophy        | _I have cursory-to-advanced knowledge of how strategies like [State Machines][xstate], [Observables][rxjs], [Component-based architecture][react], etc. solve different problems for building web applications_ |
| Performance profiling       | _I understand how to profile JavaScript’s performance, even moving operations [off the main thread][js-main-thread] where needed_                                                                               |
| Inheritance and prototypes  | _Beyond data types, I understand JavaScript’s [prototypal inheritance][prototypes] design_                                                                                                                      |
| Type System                 | _I understand JavaScript’s type system and [coercion][coercion], and know how best to leverage it (and potentially possess TypeScript knowledge)_                                                               |
| Testing                     | _I ensure all JavaScript is tested, whether with [unit / E2E][jest] tests, [headless browser tests][puppeteer], or [VRT][vrt]_                                                                                  |
| Advanced network knowledge¹ | _I have comprehensive strategies for consuming API data and feel comfortable using client like [Apollo][apollo] or rolling my own._                                                                             |
| DOM manipulation¹           | _I understand JavaScript’s role in DOM manipulation, and strategies for managing this such as [React][react] (related to Pillar 1)_                                                                             |
| WebAssembly                 | _I understand how JavaScript interops with [WebAssembly][wasm] and know when to leverage it_                                                                                                                    |

_¹ related to Pillar 1 / ³ related to Pillar 3_

In JavaScript’s strange, strange development, something very weird happened that few could have
predicted: _JavaScript turned into a backend language with Node.js._ This not only changed how we
_prepared_ JavaScript for the browser (Pillar 1); it also changed how we wrote it (Pillar 2).

Let’s be clear: _Node.js is a backend language._ In this post we’re not talking about the backend,
but we can’t deny that Node.js has changed the front-end ecosystem forever with advanced tooling to
npm. And this knowledge makes up the final pillar.

## 👷‍♀️ Pillar 3: The Toolchain (Node.js, npm, Babel, bundlers)

The final pillar—The Toolchain—concerns itself with the “meta” parts of front-end development. Its
concern is: **Can the way we develop web applications be improved?** and it’s given rise to [module
systems][esm], [package managers][npm], [transpilers][babel], [bundlers][webpack], and even [new
languages][jsx].

While this pillar is the slipperiest to understand, because by its very nature it questions the
ontology of front-end development, it’s also the most powerful because it has the ability to
transform how we work. For beginners that have started their front-end journey fairly recently, all
the kooky toolchains probably comprise the bulk of their learning curve. And for many, they won’t
truly develop a deep understanding of this until they’ve worked in at least several different
environments and contexts. Once they do, intermediates that understand the lay of the land can
deftly rig up any development pipeline to fulfill a need. Toolchain masters shape the direction and
the future of the common tools we all use.

### Beginner

| Skill           | Example                                                                                          |
| :-------------- | :----------------------------------------------------------------------------------------------- |
| Boilerplates    | _I can operate Boilerplates such as [Vue CLI][vue-cli] to create apps in my preferred ecosystem_ |
| Basic npm       | _I can add/remove/update npm libraries for use in my front-end app_                              |
| Basic ecosystem | _I understand how to examine npm package contents and load the correct library build I need_     |

### Intermediate

| Skill                    | Example                                                                                                                 |
| :----------------------- | :---------------------------------------------------------------------------------------------------------------------- |
| Configuration            | _I can configure a local development without a boilerplate, working directly with tools like Gulp, webpack, and Parcel_ |
| Transpilation¹           | _I can configure Babel and PostCSS to transpile code for specific targets_                                              |
| Bundling & optimization² | _I can set up build pipelines to ship production-ready code and optimize delivery of those bundles_                     |
| Advanced npm             | _I’ve deployed my own packages to npm_                                                                                  |

### Master

| Skill                   | Example                                                                                                       |
| :---------------------- | :------------------------------------------------------------------------------------------------------------ |
| Architect               | _I can build front-end boilerplates for other people to use_                                                  |
| AST understanding       | _I can create my own [Babel][babel-plugin] or ESLint plugins_                                                 |
| Bundler understanding   | _I can create my own webpack plugins_                                                                         |
| Code Generation         | _I can generate JS programatically_                                                                           |
| CI²                     | _I create automated pipelines for deploying npm packages as well as shipping optimized bundles to production_ |
| Ecosystem understanding | _I understand how to deploy npm packages for Node.js, web browsers, and CLI tools, and how to target each_    |

_¹ related to Pillar 1 / ² related to Pillar 2_

Usually when complaints arise about the state of front-end development, whether that’s how much it’s
changed, or if it’s too complicated, usually JavaScript gets the blame when really it’s the
toolchain. Of course, this is confusing, since JavaScript is both the engine that runs the toolchain
(Node.js) and the input/output of the toolchain itself (browser JS).

This is also the pillar that’s undergone the biggest changes of front-end development, and it won’t
be settling any time soon. Still, now’s the perfect time to jump in and contribute _because_ all
these things aren’t settled yet.

## A final note on mastery

Hopefully you noticed the superscript ¹s, ²s, and ³s linking skills in one pillar to another.
Hopefully, too, you started to get confused about where the barriers lay between the pillars, and
what kept them as distinct. And, hopefully, you realized that all this knowledge feeds into itself,
and any one pillar is incomplete, and can’t support a standing structure without the others.

Mastery itself is a slippery thing. I’m reminded of Matt Might’s post, [_The illustrated guide to a
Ph.D._][phd] To merely reach the limits of human knowledge is not enough; we’re all pushing to try
and make that little “dent” in the shape of what’s possible. And with that act, we leave behind a
bigger world to explore for the next generation.

While this post was meant to paint a more unified, comprehensive view of front-end development, it’s
not meant to guilt you into figuring all this stuff out on your own. That’s impossible. You won’t
master everything, but even theoretically if you could, it would only last for a short time until
someone came along and changed what’s possible with their dent.

So above all else, **be kind to yourself,** and pursue mastery only to the extent it’s rewarding for
you and others around you. And while it’s OK to know different things than everyone else, for the
love of God, don’t create more “us vs them” rhetoric.

[apollo]: https://www.apollographql.com/
[babel]: https://babeljs.io/
[babel-plugin]:
  https://github.com/jamiebuilds/babel-handbook/blob/master/translations/en/plugin-handbook.md
[browser-api]: https://developer.mozilla.org/en-US/docs/Web/API
[browser-processes]: https://developers.google.com/web/updates/2018/09/inside-browser-part2
[coercion]: https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion
[css-animation]:
  https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations
[css-gd]: https://css-tricks.com/the-great-divide/
[dom]: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
[ecma]:
  https://developer.mozilla.org/en-US/docs/Archive/Web/JavaScript/ECMAScript_Next_support_in_Mozilla
[es-lexer]: https://github.com/guybedford/es-module-lexer
[esm]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
[fetch]: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
[gpu-acceleration]: https://www.smashingmagazine.com/2016/12/gpu-animation-doing-it-right/
[history]: https://developer.mozilla.org/en-US/docs/Web/API/History_API
[imageoptim]: http://imageoptim.com/
[jest]: https://jestjs.io/
[js-main-thread]:
  https://developers.google.com/web/fundamentals/performance/rendering/optimize-javascript-execution
[js-profiling]: https://developers.google.com/web/tools/chrome-devtools/rendering-tools
[js-this]: https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/objects-classes/ch1.md
[jsx]: https://reactjs.org/docs/introducing-jsx.html
[lighthouse]: https://developers.google.com/web/tools/lighthouse/
[npm]: https://www.npmjs.com/
[objects]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
[paint-api]: https://developer.mozilla.org/en-US/docs/Web/API/CSS_Painting_API
[phd]: http://matt.might.net/articles/phd-school-in-pictures/
[promise]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
[prototypes]:
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
[puppeteer]: https://developers.google.com/web/tools/puppeteer/
[react]: https://reactjs.org/docs/design-principles.html
[resource-prioritization]:
  https://developers.google.com/web/fundamentals/performance/resource-prioritization
[rxjs]: https://www.learnrxjs.io/
[simplify-paint]:
  https://developers.google.com/web/fundamentals/performance/rendering/simplify-paint-complexity-and-reduce-paint-areas
[smacss]: http://smacss.com/
[surma-120fps]: https://dassur.ma/things/120fps/
[tailwind]: https://tailwindcss.com
[three]: https://github.com/mrdoob/three.js/
[vue-cli]: https://cli.vuejs.org/
[vrt]: https://happo.io/
[wasm]: https://webassembly.org/
[webgl-api]: https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API
[webpack]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
[xstate]: https://xstate.js.org/
