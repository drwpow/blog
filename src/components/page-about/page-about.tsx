import { Component, h } from '@stencil/core';

@Component({
  styleUrl: './page-about.css',
  tag: 'page-about',
})
export class PageAbout {
  render() {
    return (
      <div class="pageAbout" itemScope itemType="http://schema.org/Person">
        <stencil-route-title pageTitle="about // Drew Powers" />
        <h1 class="pageAbout-title">About</h1>
        <img
          itemProp="pageAbout-image"
          class="img"
          src="/assets/drew-about.jpg"
          width="2000"
          height="1000"
          alt="Drew"
        />
        <p>
          My name is <span itemProp="name">Drew Powers</span>. I’ve been building websites and
          spending way too much time online for over a decade. I’m passionate about using technology
          as an equalizer, both in my work and sharing what I know on this blog.
        </p>
        <p>
          Have a question, or a suggestion for something you’d like me to write about? Shoot me an{' '}
          <a href="mailto:drew@pow.rs">email</a> or{' '}
          <a href="https://twitter.com/_drewpowers" rel="noopener noreferrer" target="_blank">
            tweet
          </a>
          .
        </p>
      </div>
    );
  }
}
