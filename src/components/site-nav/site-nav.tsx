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
  shadow: true,
  styleUrl: './site-nav.css',
  tag: 'site-nav',
})
export class SiteNav {
  render() {
    return (
      <nav class="nav">
        <ol class="list">
          <li>
            <stencil-route-link url="/" exact={true}>
              <h1 class="title">
                <img
                  class="logo"
                  src="/assets/drew-monogram-black.png"
                  width="512"
                  height="512"
                  alt="Drew Powers"
                />
                <div class="blog">blog</div>
              </h1>
            </stencil-route-link>
          </li>
          <li class="item">
            <stencil-route-link url="/" exact={true}>
              <div class="link">All</div>
            </stencil-route-link>
          </li>
          {tags.map(tag => (
            <li class="item">
              <stencil-route-link url={`/tag/${tag}`}>
                <div class="link">{tag}</div>
              </stencil-route-link>
            </li>
          ))}
          <li class="page">
            <stencil-route-link url="/about" exact={true}>
              <div class="link">About</div>
            </stencil-route-link>
          </li>
        </ol>
      </nav>
    );
  }
}
