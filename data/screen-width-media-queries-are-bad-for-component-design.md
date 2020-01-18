---
title: screen width media queries are bad for component design
description: Screen width media queries fall short of solving today’s layout needs
slug: screen-width-media-queries-are-bad-for-component-design
tag: dev
updated: 2019-11-06
---

_Note: this blog post focuses on “screen width” media queries such as `@media (min-width: 600px)`,
as distinct from other media queries like `print` media queries, `preferred-color-scheme`,
`supports`, etc. For the record I think media queries are wonderful. I’m just attempting to
illustrate how the most widely-used subset of media queries—screen width—has major flaws that have
never been addressed._

Since [responsive design][rd] changed our thinking about web layout from a print-derivative medium
to a print-superlative medium, screen width [media queries][mq] have become an indispensible part of
our design vocabulary. So much so that even design programs like Sketch and Figma now bake in
responsive design into their tooling.

But with this shift in thinking from fixed-size print to fluid-size web, our designs became more
complicated. To handle this complexity we turned to **componentization**. Component thinking for the
web started with CSS paradigms like Nicole Sullivan’s [OOCSS][oocss] and [BEM][bem] in the early
2010s. We started viewing our UI in terms of recomposible, reusable components, strung together here
and there by layout logic.

So with the rise of component design to simplify applications, media queries adapted, right? If your
answer is “media queries and CSS in general didn’t bat an eye” you’d be correct.

Just how bad is it? Let’s come up with a simple example to illustrate how even basic layout needs
can’t be handled by screen width media queries, still, in 2019. Say I have a blog post component
(like the one you’re looking at now!) that is responsible for word wrap, but I also have it next to
a sidebar that can open and close, how should that be managed?

<video controls loop muted autoplay title="recording of a sidebar expanding and contracting, destroying text flow beside it">
  <source src="/assets/screen-width-media-queries-are-bad-for-component-design/expanding-sidebar.mp4" type="video/mp4">
</video>

We should be stacking those images a little better, and now screen width media queries can’t help us
here. **The screen width isn’t changing!** Instead, we’d have to now create some parent component
that controls the layout. But in order to do that, we have to **strip responsibility of layout away
from our blog post component**—the very thing it was created to do.

## CSS Grid: a step in the right direction.

?

Currently, **CSS Grid** is the closest, most versatile thing we have to a media query that respects
the actual width of a component. Consider this beautiful CSS snippet from [Jen Simmons][js]:

```css
.grid {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
```

Here we have a pretty sophsticated bit of logic in only 3 lines of CSS that handles horizontal and
vertical gutters for us, and when columns get squished smaller than `300px` wide, they’ll just wrap
to the next line. This is wonderful component thinking, because it lets the component decide the
minimum space it needs to lay out properly.

**But this is still incomplete**, and it can’t solve our sidebar problem from earlier. The major
drawback is that **it can’t handle columns of different widths.** _But that’s not true!_ you may
think instinctively. CSS Grid _can_ handle columns of different widths, but only if you manually set
each column’s sizing using—you guessed it—screen-width media queries. Which brings us right back to
the original problem. There’s no way to use `auto-fit` or `auto-fill` with different-width columns
(yet). Rachel Andrew expands on this in a recent post, _[Things We Can’t (Yet) Do In CSS][ra]_.

## So what’s the solution?

[Container queries][container-queries] have been requested since 2015 to solve this problem. But
rather than end the blog post with a predictable “Container queries should exist. The end. —Drew
Powers” like others have done, I’ll pose a new question: _would container queries even matter, if
CSS Grid would support different column widths?_

I’d argue no.

Already CSS Grid has saved me from the bane of the CSS float days: gutters. Just for this feature
alone will I sing the merits of CSS Grid till the end of my days. For layouts where every column is
equally-proportioned, CSS Grid doesn’t need screen width media queries, either. So if it added
flexible column width support, what would I need container queries for?

Perhaps you could imagine some complicated where many CSS properties—not just column layout—needed
to rearrange across device sizes. While there are always usecases in the wild I can’t imagine, I’d
argue that anything more complicated than layout, and you’re generally not looking at the same
components. Typically when the experience needs to drastically change for a device, beyond layout,
that will typically expand to differences in the entire experience. You’re generally beyond simple
media queries, then, and possibly even hiding/showing components based on device size. Ideally,
you’re aiming to deliver the same experience across platforms, but with very minor tweaks, for
predictability for users.

So, almost unsurprisingly, I’m not ending this blog post with “Container queries should be a thing.
The end.” But “Different-width columns with CSS Grid `auto-fit`/`auto-fill` should be a thing. The
end.”

The end.

[bem]: http://getbem.com/
[ch]: https://www.youtube-nocookie.com/embed/ZRtzk0371tk
[container-queries]: https://alistapart.com/article/container-queries-once-more-unto-the-breach/
[js]: https://labs.jensimmons.com/2017/03-009.html
[mq]: https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries
[oocss]: http://oocss.org/
[prefers-color-scheme]: https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme
[ra]: https://www.smashingmagazine.com/2019/11/css-things-cant-yet-do/
[rd]: https://www.smashingmagazine.com/2011/01/guidelines-for-responsive-web-design/
