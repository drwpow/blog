import { Component, h } from '@stencil/core';
import postData from '../../data/posts.json';

const tagMap = postData.reduce((tags, { data: { tag } }) => {
  if (tag) {
    return {
      ...tags,
      [tag]: true,
    };
  }
  return tags;
}, {});
const tags = Object.keys(tagMap).sort((a, b) => a.localeCompare(b));

@Component({
  styleUrl: './site-nav.css',
  tag: 'site-nav',
})
export class SiteNav {
  render() {
    return (
      <nav class="siteNav">
        <ol class="siteNav-list">
          <li>
            <stencil-route-link url="/" exact={true}>
              <h1 class="siteNav-title">
                <img
                  class="siteNav-logo"
                  src="/assets/drew-monogram-black.png"
                  width="512"
                  height="512"
                  alt="Drew Powers"
                />
                <div class="siteNav-blog">blog</div>
              </h1>
            </stencil-route-link>
          </li>
          <li class="siteNav-item">
            <stencil-route-link url="/" exact={true}>
              <div class="siteNav-link">All</div>
            </stencil-route-link>
          </li>
          {tags.map(tag => (
            <li class="siteNav-item">
              <stencil-route-link url={`/tag/${tag}`}>
                <div class="siteNav-link">{tag}</div>
              </stencil-route-link>
            </li>
          ))}
          <li class="siteNav-page">
            <stencil-route-link url="/about" exact={true}>
              <div class="siteNav-link">About</div>
            </stencil-route-link>
          </li>
        </ol>
      </nav>
    );
  }
}
