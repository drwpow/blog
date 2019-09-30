import { Post } from '../types/post';

export default function postsPublished(posts: Post[]) {
  return posts.filter(post => new Date(post.data.date) <= new Date());
}
