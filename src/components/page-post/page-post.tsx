import { Component, h, Prop, State } from '@stencil/core';
import { MatchResults } from '@stencil/router';
import { Post } from '../../types/post';
import postData from '../../data/posts.json';
import date from '../../utils/date';

const posts = postData as Post[];

@Component({
  shadow: true,
  styleUrl: './page-post.css',
  tag: 'page-post',
})
export class PagePost {
  @Prop() match: MatchResults;
  @State() post?: Post;

  componentWillLoad() {
    this.post = posts.find(({ data: { slug } }) => slug === this.match.params.slug);
  }

  render() {
    return (
      <article class="wrapper">
        {this.post ? (
          <div>
            <header>
              <h1 class="title">{this.post.data.title}</h1>
              <table class="meta">
                <tr>
                  <td>published</td>
                  <td>{date(this.post.data.date)}</td>
                </tr>
                {this.post.data.updated && (
                  <tr>
                    <td>updated</td>
                    <td>{date(this.post.data.updated)}</td>
                  </tr>
                )}
                <tr>
                  <td>tagged</td>
                  <td>
                    <stencil-route-link url={`/tag/${this.post.data.tag}`}>
                      {this.post.data.tag}
                    </stencil-route-link>
                  </td>
                </tr>
              </table>
              <div class="img-crop">
                <img
                  class="img"
                  alt={this.post.data.title}
                  src={this.post.data.image}
                  width="2000"
                  height="1000"
                />
              </div>
            </header>
            <div class="post" innerHTML={this.post.contents} />
          </div>
        ) : (
          <div>Post not found</div>
        )}
      </article>
    );
  }
}
