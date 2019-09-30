import { Component, h, Prop } from '@stencil/core';
import { Post } from '../../types/post';
import date from '../../utils/date';

@Component({
  shadow: true,
  styleUrl: './post-preview.css',
  tag: 'post-preview',
})
export class PostPreview {
  @Prop() post: Post;

  render() {
    return (
      <article class="card">
        <stencil-route-link url={`./post/${this.post.data.slug}`}>
          <div class="img">
            <img
              alt={this.post.data.title}
              src={this.post.data.image}
              loading="lazy"
              width="800"
              height="450"
            />
            <div class="tag">{this.post.data.tag}</div>
          </div>
          <time class="date" dateTime={this.post.data.date}>
            {date(this.post.data.date)}
          </time>
          <h1 class="title">{this.post.data.title}</h1>
          <p class="summary">
            {this.post.data.description}
            <span class="more">More ›</span>
          </p>
        </stencil-route-link>
      </article>
    );
  }
}
