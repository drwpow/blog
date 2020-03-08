---
title: playfulness budget
published_date: 2019-11-06 12:00:00 +0000
description: Finding that sweet spot of delight and whimsy in application design
slug: playfulness-budget
tags:
  - design
data:
  updated_date: 2019-03-09 12:00:00 +0000
---

_Homo Ludens_ is a notable work of literature by Dutch philospher Henry Van Friedrick. In it he
argues:

> Play is essential for the building of culture and intellect.

“Play—” that sudden urge you have to jump in that puddle and ruin your shoes. That spark of humor
when you imagine your toaster complaining at you for never cleaning all the crumbs out. When you see
an empty street and decide to run just because “who says I shouldn’t be allowed to run in normal
clothes without a reason?” The sense of play is something we crave on a regular basis—some more than
others—but can be seen as _verboten_ in application design.

There’s some reasonable cause for this feeling—application design does seek to be boring and
predictable. For this reason I feel it’s hard for print and advertising designers to cross over into
UI, and vice-versa. A magazine cover seeks to disrupt the space around it and draw your eye—either
with boldness in a sea of consistency, or starkness in a sea of boldness—the separation from the
pack is what drives the design. A user interface seeks to be predictable and usable without a
manual, allowing a user to accomplish a complicated task with friendly buttons and maybe an input or
two.

But where do we draw the line? When does “predictable” and “usable” cross over into sucking the life
out of an interface?

## 4 ways to spend playfulness points

I typically envision some imaginary bank or budget of playfulness that I draw from. I only have a
few “points” to spend to disrupt a user’s expectations in an application before they get frustrated.
How, and when? Here are 5 tips to spending your few points wisely.

### 1. spend playfulness points during slow tasks

Every user, when using your application, will be in varying states of panic. Typically, the type of
application will lean one way or another.

Booking a hotel, tickets for a show, or flight? These can feel **rushed**, sometimes intentionally,
and even feature anxiety-inducing timers, _BOOK NOW!_ calls to action, and the impending sense that
someone will snag this before you do (_23 people have looked at this Airbnb in the last hour_).

This is **not a good time to test the user’s patience with playfulness.** But in times when they’re
not rushed or panicked, make their day a little better!

<figure>
  <img src="/assets/images/playfulness-budget/pizza-tracker.jpg" alt="Domino’s Pizza Tracker" />
  <figcaption>The Domino’s Pizza Tracker: probably my favorite example of a playful time-passer</figcaption>
</figure>

What better way to kill a 30-minute wait for a pizza to arrive than stare at a pizza tracker? Or say
a user is shopping for beds—the opposite of stressful—and you came up with a cheeky “bounce
simulator” that compares mattresses’ bounciness with a fun, interactive animation. These are all
wonderful opportunities to turn a slow experience where a user has time to spare into a memorable
interaction.

### 2. spend playfulness points during frustrating tasks

<figure>
  <video autoplay="true" controls muted loop playsinline width="1376" height="600">
    <source src="/assets/images/playfulness-budget/little-known-goods-carousel.mp4" type="video/mp4" />
  </video>
  <figcaption>Little Known Goods Carousel animation</figcaption>
</figure>

For a recent [ecommerce site I built][lkg], I wanted to address 2 pain points that are the bane of
my online shopping experience: image carousels and zoom views.

For some reason, I just find most sites that have these to be buggy, unexpected, and frustrating.
Hoping I wasn’t alone, I decided to introduce a little unpredictability for a little bit of whimsy.

Using the metaphor of a map, I created a carousel that folds and unfolds as you click through it,
animating smoothly between the stops. For the zoom view, on desktop I made the hover interaction
reveal the zoomed-in view without clicking. Quick to navigate, quick to dismiss. And on smaller
devices when you find yourself pinch—zooming anyway, I simply made the image itself high-res, and
disabled the zoom so users can use the natural zoom on their device (I personally find the simulated
zoom, like Twitter’s mobile site, to be buggy, and I always have images flying off into space or
re-centering wildly, which I don’t understand because zooming in on static images works just great).

Perhaps I got a little too anecdotal here, but the main point is: if there’s an interaction that is
typically laden with frustration (date-picking availability, calendars, actually just dates and
times in general are hard…), it may be a good opportunity to turn a bad expectation into an
unexpected joy by making it playful.

### 3. spend playfulness points on first impressions

<figure>
  <video autoplay="true" controls muted loop playsinline width="1375" height="600">
    <source src="/assets/images/playfulness-budget/playdate.mp4" type="video/mp4" />
  </video>
  <figcaption>A 3D, rotatable portable game console right at the top of the page? Yes, please.</figcaption>
</figure>

A user’s first several seconds on a site is a critical time for them. They’re orienting to the
site—to the layout, colors, language, etc.—while also having something they want to accomplish.
While often times this is a winding path for the user to clarify what they want while orienting
themselves to a new interface, that first few seconds that a user suspends judgment can be just the
right moment for playfulness.

Greeting a user, for instance, with a fun animation on page load doesn’t disrupt their task while
they figure out where it is they need to go.

Granted, there are good and bad types of animation. A good animation would simply be adding motion
to the hero graphic, where a bad animation would be hiding the top menu and animating in items
one-by-one so the user has to wait painfully to even start their task. But assuming you executed the
former, setting an impression for playfulness right off the bat can pay dividends later.

### 4. spend playfulness points during successes

Errors are frustrating. Messages like `Oops! Something went wrong!` can be flippant and tone-deaf,
especially when it resulted in data loss. Believe it or not, that was an actual error message I
encountered that left me unable to pay a bill! _Oops!?_ More like “Oops! I accidentally cancelled
your horrible service!”

In light of so many failures we encounter on the web, successes are something that should be
celebrated! 🎉 Did a user finish sending an email? Add a fun illustration and some congratulatory
copy on that succes page! Has a user reached a certain milestone in your app (miles walked,
achievement reached, numbers hit)? Add a cool badge to their profile.

Studies have shown that unexpected rewards result in the most positively-perceived experiences. So
let’s try and help the humans that use our application feel appreciated because they’re worth it.

## how will you spend yours?

An application’s primary purpose is to help a user accomplish a task, and help them accomplish it as
quickly and effortlessly as possible. But that can be a little too robotic.

As we’re reminded by _Homo Ludens_, when we’re dealing with people, sometimes _too much_ efficiency
can be boring and detrimental to the squishy humans you’re guiding. Sometimes the straightest roads
can have us feeling sleepy behind the wheel a bit. Sometimes the little detours, the fun little dips
and curves, _make_ the journey memorable.

[lkg]: https://littleknowngoods.com
