---
title: screen width media queries are a hack
date: 2019-11-06
description: Media queries are obsolete, and other thoughts after using them for a decade.
slug: screen-width-media-queries-are-a-hack
image: //www.placecage.com/800/450
tag: dev
updated: 2019-11-06
---

[Media queries][mq] are an indispensible part of CSS, with `min-width` (or `max-width`, depending on
your preference) being the most-used. Ever since [responsive design][rd] first came into view, we’ve
been able to pull off slick things like increasing the number of columns as the screen width
expands:

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

But with this new thinking of responsive design and fluidity, our designs became more complicated.
We had started to realize what the web was capable of and the unique challenges it brought. Instead
of one layout to design as was the case in print, now we had nearly-infinite (or so it would seem).
To handle this complexity we turned to **componentization**.

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
from our blog post component**—the very thing it was created to do.

## A Glimmer of Hope

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

If you aren’t quite following, you’re not alone. Grid is hard. If you’re a little lost, please
consult [Chen Hui Jing][chen-hui]’s video on `auto-fit` and `auto-fill`.

## A Dash of Despair

Though CSS Grid is a step in the right direction, it still has flaws. The biggest one is that **this
method can’t support columns of different widths** (Rachel Andrew bemoans the same thing in her
recent post, _[Things We Can’t (Yet) Do In CSS][ra]_).

Though if this one problem were solved, CSS Grid may very well be a new, better, media query.

[bem]: http://getbem.com/
[ch]: https://www.youtube-nocookie.com/embed/ZRtzk0371tk
[container-queries]: https://alistapart.com/article/container-queries-once-more-unto-the-breach/
[js]: https://labs.jensimmons.com/2017/03-009.html
[mq]: https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries
[oocss]: http://oocss.org/
[prefers-color-scheme]: https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme
[ra]: https://www.smashingmagazine.com/2019/11/css-things-cant-yet-do/
[rd]: https://www.smashingmagazine.com/2011/01/guidelines-for-responsive-web-design/
