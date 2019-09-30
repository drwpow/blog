import { Component, h, Prop } from '@stencil/core';
import { MatchResults } from '@stencil/router';
import postData from '../../data/posts.json';
import { SITE_NAME } from '../../lib/constants';

@Component({
  shadow: true,
  styleUrl: './page-tag.css',
  tag: 'page-tag',
})
export class PageHome {
  @Prop() match: MatchResults;

  render() {
    const tags = postData.filter(({ data: { tag } }) => tag === this.match.params.tag);

    return (
      <div>
        <stencil-route-title title={`tag ${this.match.params.tag} // ${SITE_NAME}`} />
        <h1 class="title">tag: {this.match.params.tag}</h1>
        {tags.map(post => (
          <post-preview post={post} />
        ))}
      </div>
    );
  }
}
