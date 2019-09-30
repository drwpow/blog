---
title: screen width media queries are obsolete
date: 2019-09-30
description: Media queries are absolute, and other thoughts after using them for a decade.
slug: screen-width-media-queries-are-obsolete
image: //www.placecage.com/800/450
tag: dev
updated: 2019-09-31
---

Ah, the noble `@media` query. Useful for all sorts of things nowadays, like
[prefers-color-scheme][prefers-color-scheme]:

```css
@media (prefers-color-scheme: dark) {
  background: black;
  color: white;
}
```

But consider the `min-width` query—the one we all cut our teeth on when [responsive design][rd]
first came into view. This is how we’d pull off those fancy responsive columns, for instance:

```css
/* Mobile first™! */
float: none;

/* small tablet sizes */
@media (min-width: 600px) {
  float: left;
  width: 50%;
}

/* medium tablet / small laptop sizes */
@media (min-width: 900px) {
  width: 33.33333333%;
}

/* desktop size */
@media (min-width: 1200px) {
  width: 25%;
}

/* large screen size */
@media (min-width: 1800px) {
  width: 20%;
}
```

Suddenly a new world opened up! We were able to use CSS to rearrange content based on device size!
No more awkward scrollbars! No more tiny, tiny, tiny text on phones! With our newfound power, the
web became a much better place.

This new, multi-device world gave rise to complexity in our designs. Suddenly, we had not one screen
to design for, but dozens! The web ascended beyond its print origins. And it was amazing. But we had
to deal with this complexity somehow. We did via **componentization**.

Component thinking for the web started with CSS paradigms like Nicole Sullivan’s [OOCSS][oocss] and
[BEM][bem] in the early 2010s, to name a few. In a nutshell, component thinking involves building:

1. Modular, reusable bits of UI (think `.nav` and `.btn`)
1. Components that keep track of their own state and styles
1. Components that maintain reusability by displaying the same, regardless of context

Let’s take a look back at screen width media queries again—see how that breaks component thinking?
If I have, say, a blog post component (like the one you’re looking at now!) that is responsible for
word wrap, but I also have it next to a sidebar that can open and close, how should that be managed?

<video controls loop muted autoplay title="recording of a sidebar expanding and contracting, destroying text flow beside it">
  <source src="/assets/screen-width-media-queries-are-a-hack/expanding-sidebar.mp4" type="video/mp4">
</video>

We should be stacking those images a little better, and now screen width media queries can’t help us
here. **The screen width isn’t changing!** Instead, we’d have to now create some parent component
that controls the layout. But in order to do that, we have to **strip responsibility of layout away
from our blog post component**—the very thing it was created to do!

[Container queries][container-queries] have been requested since 2015 to solve this problem, so this
isn’t new. But it’s now 2019, and, well, it’s time we found another way to solve this. What should
we do?

Currently, **CSS Grid** is the closest, most versatile thing we have to a media query that respects
the actual width of a component. Consider this beautiful CSS snippet from [Jen Simmons][js]:

```css
.grid {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
```

Here we have a pretty sophsticated bit of logic in only 3 lines of CSS. Let’s focus on the last
property, `grid-template-columns`. With that, we’re able to:

| Code                 | Result                                                                                                                                            |
| :------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------ |
| `repeat`             | Automatically figure out columns based on this logic                                                                                              |
| `auto-fit`           | If the items don’t fill up the first row, stretch them out till they do                                                                           |
| `minmax(300px, 1fr)` | `1fr` sizes every component proportionally to each other. `300px` tells grid that once they get smaller than that to push them to the next row 🎉 |

## Diving deeper

I can’t recommend this video by [Chen Hui Jing][chen-hui] enough for understanding the difficult
parts of Grid like `auto-fit` vs `auto-fill`. Definitely worth a watch!

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/ZRtzk0371tk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[bem]: http://getbem.com/
[chen-hui]: https://www.chenhuijing.com/#%F0%9F%9A%B2
[container-queries]: https://alistapart.com/article/container-queries-once-more-unto-the-breach/
[js]: https://labs.jensimmons.com/2017/03-009.html
[oocss]: http://oocss.org/
[prefers-color-scheme]: https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme
