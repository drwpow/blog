---
slug: did-we-fuck-up-the-internet-pt-1
title: 'did we fuck up the internet? part 1'
published_date: 2020-08-26 12:00:00 +0000
description:
  2020 has been… a year. Amdist a global pandemic, collapse of the United States, and other acts of
  God, several events transpired this year that has made us question the internet’s trajectory. Are
  we boned?
tags:
  - dev
---

2020 has been… a year. I have neither the time nor energy to really describe all the extreme,
heartbreaking, life-shattering events in 2020. So I won’t.

There are lots of “was the internet a mistake?” blog posts (“we’re monkeys that tricked rocks to
think; we deserve what we get! ha ha”), but they’re a bit melodramatic. I’ve never written one
(besides a mild [questioning of HTML](./was-html-a-mistake.html)). I’m pretty bad in general at
feeding off sensationalism. I think I might even irrationally avoid it.

However, recent events have led me to question if our current trajectory of building the web is the
right one, for the the first time in my 11+ year professional career of web development (though take
that with a grain of salt—2020 has me questioning everything my life has led to so far). But by
“direction” I don’t mean it shouldn’t exist. Yes, I believe in radical democratization of knowledge.
Yes, I believe the internet has the capability to be a great social equalizer. Yes, I believe open
access to knowledge is the most ethical thing I can probably do with my life. Yes, yes, yes.

But, rather, I’m questioning our execution of it thusfar. Our understanding and [relationship with
the internet has evolved][social-media] since its inception. And perhaps—just perhaps—our collective
first stab at one of the most important transformations in human history wasn’t completely perfect
only 20-something years in.

What follows are my thoughts leading up to this questioning. Part 1 (this post) will outline what
led up to now by highlighting some notable discussions happening in the community. The following
parts will outline whatever harebrained solutions I think may get us out of this giant-ass digital
pickle.

### the Mozilla layoffs

Our journey begins with [Mozilla laying off 25% of its staff in August 2020][mozilla-layoffs].
Software layoffs suck in general, but they _really_ suck when they carry global impact. An extreme
(but possible) take on the outcome is: this is the [death of Firefox][cc] and MDN as we know it
([Rust may be OK][mozilla-rust]).

If Firefox goes, then the burden of the internet rests practically on the shoulders of Chromium (if
you’re reading this in the far future, remember that [Microsoft recently abandoned their historic
browser project in favor of Chromium][microsoft-chromium]).

At worst, such monopolistic control over the internet is so dangerous it had to be held in check by
a [2001 Supreme Court ruling][microsoft-v-us]. At best, the responsibility of stewarding the
development of _the entire internet_ is so monumental, it crushes any mere team of mortals tasked
with it. Either way, if Chromium is the last browser standing, it’s bad news for all.

> Do you think the web has almost 'priced itself out of the market' in terms of complexity if only
> 1-2 organisations are capable of building rendering engines for it?
>
> Microsoft gave up, Mozilla will struggle as you say.
>
> — [Mike Healey on Aug 20](https://twitter.com/i/status/1296573362223759361)

I guess there’s WebKit still 🤷‍♂️. Until Apple remembers they’re supposed to maintain it.

### an ecosystem fracturing (further)

We pause there, and join the developer discussion in another part of the dev sphere, where people
(like myself) are having existential meltdowns over what they’ve been doing their entire career.
_[Second-guessing the modern web][second-guessing-modern-web]_ by Tom MacWright in May 2020 comes to
mind as a post at the center of the discussion questioning whether or not our current JS-heavy
trajectory is _evolution_ or _de-evolution_.

Sure, JS has always had nay-sayers. [JavaScript fatigue][js-fatigue] had been questioning this
direction since 2015. And there have been no shortage of the “get off my lawn“ old guard complaining
about any attempt at replacing jQuery ([link][fuchs-react]). However, MacWright’s post was a more
considered viewpoint that hit just at the right time, finding agreement among the old guard [as well
as the new React folk][abramov].

So after years in the spotlight, JS is under question again. In rough chronological order, here are
a few notable discussions/milestones that amount to some key players in tech all rethinking their
choices:

- 2019: Web Components gain widespread browser support, but [devs don’t like them][wc-rh]
- 2019–2020: websites are over 2MB and [getting bigger][page-weight] thanks to more JS
- Apr 2020: a [pretty damning study of JS frameworks][cost-of-js] comes out
- May 2020: Tom Wright’s [Second-guessing the modern web][second-guessing-modern-web] post
- 2020: A new (JS-free) static site generator, [Eleventy, grows in popularity][eleventy]

Back in 2015, React + webpack were our saviors, solving all our problems and paving the way to a
bright future of the web. Sure, there were questions, but we all figured the kinks would be hammered
out in due time.

Now, at almost 6 years in, the luster has faded. We know that many of our questions (_how can I view
this page if there’s a single JS error?_) will never be answered. It’s not that React let us down;
on the contrary, React was a prolific achievement. But the internet, [vast and complex as it
is][the-two-webs], demands more of its tools, and React has proven to be an imperfect solution. That
leaves us back at no consensus what the future of building the web looks like for all cases, for all
people.

Sure, there are, and will continue to be, new experiments that pose new ideas (like recently
[Svelte][svelte]). But as of the time of this post, React has been the closest thing to a unifier
since jQuery, and signs point to it being on the decline, with no clear replacement.

### no true path forward

So we’re at a bit of a jam: both [questioning our browser-centric standards process][clean-start],
and [questioning our tools][second-guessing-modern-web], what _are_ we to do? (…No, seriously, what
are we to do? I was really asking you, the reader. Help me out a little.)

In planning out this post, I was going to highlight an even more fractured ecosystem with the above
by reminding you, the reader, that the Java/Springboot, Laravl/PHP, Ruby/RoR, Django, and
Elixir/Phoenix communities exist. And have been largely ignoring the Node community. I was going to
drive that point home, but instead, I’m going to tangent into this [really interesting post from
2005 ragging on Rails][rails-is-a-joke]:

> **Ruby on rails demo video (why do people buy into this shit?)**
>
> In these respects Rails is a step in the wrong direction that will complicate our lives further, …
> In Java I myself can produce the same sort of results in the same amount of time using J2EE even
> without hibernate but with a decent IDE.
>
> The syntax seemed like a simpler version of JSP with extensive use of scriptlets and no custom
> tags, the IDE doesn’t seem to have even basic features like completion and the documentation seems
> monolithic and dissorganized although when delving into a particular feature it seems quite
> detailed.

I don’t know why, but I found some comfort in the reminder that Rails, a mostly unifying force, was
met with criticism when it came out (though I don’t know why I would expect any change to be
received with open, loving arms by this community). That back in 2005, we were decrying the death of
the internet, or our tooling, or whatever.

I still see the situation now as far worse as it was back then, but at least I’m reminded that we’ve
gotten by so far on complete uncertainty and done all right.

In part 2, I’d like to shift into something a little more fun by outlining some possible futures. A
Marvelesque _multiverse_ of possibilities, if you will. _Part 2 coming soon!_

[abramov]: https://twitter.com/dan_abramov/status/1259614150386425858?s=20
[cc]: https://twitter.com/chriscoyier/status/1296573362223759361?s=20
[clean-start]: https://macwright.com/2020/08/22/clean-starts-for-the-web.html
[cost-of-js]: https://twitter.com/tkadlec/status/1252613423361376256?s=20
[eleventy]: https://twitter.com/zachleat/status/1296817280098205699?s=20
[fuchs-react]: https://twitter.com/search?q=%40thomasfuchs%20react&src=typed_query
[js-fatigue]: https://medium.com/@ericclemmons/javascript-fatigue-48d4011b6fc4
[page-weight]: https://twitter.com/scottjehl/status/1263492890979979264?s=20
[microsoft-chromium]:
  https://www.theverge.com/2019/5/6/18527550/microsoft-chromium-edge-google-history-collaboration
[microsoft-v-us]: https://en.wikipedia.org/wiki/United_States_v._Microsoft_Corp.
[mozilla-layoffs]:
  https://www.theverge.com/2020/8/11/21363424/mozilla-layoffs-quarter-staff-250-people-new-revenue-focus
[mozilla-rust]:
  https://blog.rust-lang.org/2020/08/18/laying-the-foundation-for-rusts-future.html?ref=hvper.com
[rails-is-a-joke]:
  https://vprise.wordpress.com/2005/12/14/ruby-on-rails-demo-video-why-do-people-buy-into-this-shit/
[second-guessing-modern-web]: https://macwright.com/2020/05/10/spa-fatigue.html
[so-survey]: https://insights.stackoverflow.com/survey/2020
[social-media]: https://www.apa.org/members/content/social-media-research
[svelte]: https://github.com/sveltejs/svelte
[wc-rh]: https://twitter.com/Rich_Harris/status/1198332398561353728?s=20
