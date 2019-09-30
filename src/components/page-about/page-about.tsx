import { Component, h } from '@stencil/core';
import { SITE_NAME } from '../../lib/constants';

@Component({
  shadow: true,
  styleUrl: './page-about.css',
  tag: 'page-about',
})
export class PageAbout {
  render() {
    return (
      <div>
        <stencil-route-title title={`about // ${SITE_NAME}`} />
        <h1 class="title">About</h1>
        <p>Drew Powers is a human man boy</p>
      </div>
    );
  }
}
