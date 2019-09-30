import { SITE_URL } from '../lib/constants';

export default function postURL(slug: string) {
  return `${SITE_URL}/post/${slug}`;
}
