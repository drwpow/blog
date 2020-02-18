import { Component, h, Prop } from '@stencil/core';
import { Post } from '../../types/post';
import date from '../../utils/date';

@Component({
  styleUrl: './post-preview.css',
  tag: 'post-preview',
})
export class PostPreview {
  @Prop() post: Post;

  render() {
    return (
      <article class="postPreview">
        <stencil-route-link url={`/post/${this.post.data.slug}`}>
          {this.post.data.image && (
            <div class="postPreview-img">
              <img
                alt={this.post.data.title}
                src={this.post.data.image}
                loading="lazy"
                width="800"
                height="450"
              />
            </div>
          )}
          <time class="postPreview-date" dateTime={this.post.data.date}>
            {date(this.post.data.date)}
          </time>
          <h1 class="postPreview-title">{this.post.data.title}</h1>
          <p class="postPreview-summary">
            {this.post.data.description}
            <span class="postPreview-more">More ›</span>
          </p>
          <div class="postPreview-tagged">
            tagged:
            <span class="postPreview-tag">{this.post.data.tag}</span>
          </div>
        </stencil-route-link>
      </article>
    );
  }
}
