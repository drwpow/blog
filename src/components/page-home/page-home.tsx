import { Component, h } from '@stencil/core';
import postData from '../../data/posts.json';
import { Post } from '../../types/post';

const posts: Post[] = postData;

@Component({
  styleUrl: './page-home.css',
  tag: 'page-home',
})
export class PageHome {
  render() {
    return (
      <div>
        <stencil-route-title pageTitle="blog // Drew Powers" />
        <h1 class="pageHome-title">all posts</h1>
        {posts.map(post => (
          <post-preview post={post} />
        ))}
      </div>
    );
  }
}
