---
title: media queries are (still) a hack
slug: media-queries-are-still-a-hack
description: Revisiting Ian Storm Taylor’s thoughts 7 years later
tag: dev
date: 2020-01-18
---

## preface

It’s now been over 15 years of me working with CSS, and I’d had a longstanding itch to write down my
grievances about how media queries were insufficient for web and responsive design, even in 2019. It
was going to be a thoughtpiece for the ages.

I was going to start out with some great shared experience and get everyone going “yeah, mate! Been
there! This guy really gets it.” Next, I would carefully craft a scenario to show how media queries
are a hacky solution, rallying sympathizers to my plight by selling it on a practical level. To sell
it on the intellectual level I was going to throw in some design bullshit about how media queries
are antithetical to design component thinking. And to tie it all up, I’d wax poetic about a future
where this problem doesn’t exist, going beyond the shortcomings of [container queries][cs] and even
CSS Grid to dream of a solution.

The title for such a blog post? I needed to really sell it. Something borderline-click-baity, while
staying true to my opinions. Something with candor. I titled it: _Media Queries are a Hack_.

Then [@zachleat][@zachleat] made this tweet:

> I’m trying to find the earliest mention of Element Queries or Container Queries (or this idea in
> practice, if not name).
>
> In the lead right now is @joecritch’s very early work in March 2013
> [https://github.com/joecritch/container-queries](https://github.com/joecritch/container-queries)
> (via @innovati).
>
> Does anyone have evidence of earlier work?
>
> @zachleat 12:50 PM · Dec 10, 2019 https://twitter.com/zachleat/status/1204488622386417665?s=20

And in that tweet thread, it mentioned Ian Storm Taylor’s blog post titled—you guessed it—[_Media
Queries are a Hack_][ist].

Written in **2013.**

I am not as original as I think I am. But all things considered, I’m glad I procrastinated on
finishing my blog post because now I can produce something of more value by stealing all these other
smart peoples’ ideas.

## media queries are (still) a hack

Ian summarizes the major failing of media queries:

> I want **write-once, use-anywhere**—that’s what modular code is.
>
> Media queries are not that. They’re **write-everywhere**. They’re relative to your screen, so
> every time you write a media query for max-width or min-width, you’re connecting the appearance of
> your module to the width of the entire canvas—exactly what you were trying to avoid.

This has only become more true and more of a problem in our React-influenced,
_everything-is-modular_ landscape of contemporary web design. And this lack of component-oriented
thinking lead Ian to pine for what we all do—Container Queries.

## container queries?

If, for example, I have a user card component that I want to rearrange when there’s not enough room,
I can only do that based on the browser width, **not the component width itself.**

<figure>
  <img src="/assets/media-queries-are-still-a-hack/user-cards.svg" alt="A horizontally-laid out user card next to a vertical one" />
  <figcaption>What if I wanted to stack a card vertically not based on screen width, but based on whether or not the text will fit side-by-side? In 2020, I still can’t.</figcaption>
</figure>

Container Queries seem to check off all the boxes:

- ✅ Modular and composable
- ✅ Attack the root cause of responsive design: resizing based on **content**
- ✅ CSS-based

But perfect as they may be, Container Queries are not happening anytime soon. In Zach Leatherman’s
recent article [_The Origin Story of Container Queries_][zl], after much research, he even admits
the grim reality of our beloved Container Queries:

> [Container Queries] become almost cliché to mention it when talking about problems we’d like the
> web platform to solve… Everyone wants it, but it sure seems like no one is actively working on it.

So what’s a person to do?

## css grid repeat(auto-fit, minmax())?

If you’ve used CSS Grid, you may be familiar with this wonderful snippet:

```css
.grid {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
```

I was first introduced to this by [Jen Simmons][js]’ wonderful demo. With only 3 lines of CSS, we
have something that used to take hundreds:

- Responsive without any media queries
- Gutters built-in 😍
- And last, but most importantly, **items that resize based on their width** (kinda sounds like
  Container Queries, don’t it?)

But despite being incredibly-useful, CSS Grid’s `repeat(auto-fit, minmax())` has 2 major drawbacks:

- 🚫 It can’t be used on the component level like a Container Query could, so components can’t
  declare their own widths and breakpoints; their parents must.
- 🚫 It doesn’t allow for columns of different widths. Neither can you tell items to responsively
  span multiple columns without media queries (and if we’re using media queries we‘re all the way
  back to where we started).

## container queries.

It’s really hard to make a better pitch than Container Queries as a solution to the problem of
modular responsive design, after **7 years** and hundreds of great minds have all shared their
collective vision of how this holy-grail-of-a-CSS-selector should work. There are no downsides to
Container Queries, other than the belabored point that _they don’t exist_.

So in parting, as I alluded to earlier, I will leave you, dear reader, with nary an original
thought, instead, rehashing my favorite line from Phillip Walton’s well-referenced [_Responsive
Components: A Solution to the Container Queries Problem_][pw]:

> While I think we’d all agree a pure CSS solution is the ultimate goal, I hope we as a community
> are able prevent the perfect from becoming the enemy of the good.
>
> In matters like this, I like to remind myself of this quote from the [W3C’s HTML design
> principles][w3c]: “In case of conflict, consider users over authors over implementors over
> specifiers over theoretical purity.”

In other words, in 2020, the best solution we have to media queries’ failings is, somewhat
disappointingly, JavaScript. But not JavaScript for the sake of JavaScript; JavaScript for the sake
of users.

In the immortal [words of Zach Leatherman][zl]:

> In conclusion, 🤷‍♂️.

## more reading

- [Media Queries are a Hack][ist] (the real one)
- [Responsive Components: A Solution to the Container Queries Problem][pw]
- [Let’s Not Forget About Container Queries][css]
- [The Origin Story of Container Queries][zl]

[@zachleat]: https://twitter.com/zachleat
[cs]: https://github.com/joecritch/container-queries
[css]: https://css-tricks.com/lets-not-forget-about-container-queries/
[js]: https://labs.jensimmons.com/2017/03-009.html
[ist]: https://ianstormtaylor.com/media-queries-are-a-hack/
[pw]:
  https://philipwalton.com/articles/responsive-components-a-solution-to-the-container-queries-problem/
[w3c]: https://www.w3.org/TR/html-design-principles/
[zl]: https://www.zachleat.com/web/origin-container-queries/
