import { Component, h, Prop } from '@stencil/core';
import { MatchResults } from '@stencil/router';
import postData from '../../data/posts.json';
import { Post } from '../../types/post';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const posts: Post[] = postData as any;

@Component({
  styleUrl: './page-tag.css',
  tag: 'page-tag',
})
export class PageHome {
  @Prop() match: MatchResults;

  render() {
    const { tag } = this.match.params;
    const tags = posts.filter(({ data }) => data.tag === tag);

    return (
      <div>
        <stencil-route-title pageTitle={`tag ${tag} // Drew Powers`} />
        <h1 class="pageTag-title">tag: {this.match.params.tag}</h1>
        {tags.map(post => (
          <post-preview post={post} />
        ))}
      </div>
    );
  }
}
