const fs = require('fs');
const path = require('path');
const { Feed } = require('feed');
const remark = require('remark');
const frontmatter = require('remark-frontmatter');
const extractFrontmatter = require('remark-extract-frontmatter');
const recommended = require('remark-preset-lint-recommended');
const html = require('remark-html');
const { parse: yaml } = require('yaml');

const SITE_URL = 'https://blog.pow.rs';
const SITE_IMAGE = `${SITE_URL}/static/thumb.jpg`;
const SITE_TITLE = 'blog // Drew Powers';
const OUT_DIR = path.resolve(__dirname, '..', 'public');
const author = {
  email: 'drew@pow.rs',
  link: 'https://twitter.com/_drewpowers',
  name: 'Drew Powers',
};

function generateURL(slug) {
  return `${SITE_URL}/post/${slug}`;
}

function parseMd(file) {
  return remark()
    .use(recommended)
    .use(frontmatter)
    .use(extractFrontmatter, { yaml })
    .use(html)
    .process(file);
}

async function buildRSS() {
  // read /data dir
  const postsDir = path.resolve(__dirname, '..', 'data');
  const postData = fs
    .readdirSync(postsDir)
    .map(file => fs.readFileSync(path.resolve(postsDir, file), 'utf8'));

  // parse markdown
  const posts = await Promise.all(postData.map(parseMd));

  // generate feed
  const feed = new Feed({
    author,
    copyright: 'All rights reserved 2019, Drew Powers',
    date: new Date(),
    description: 'The personal blog of Drew Powers',
    feedLinks: {
      atom: `${SITE_URL}/atom.xml`,
      json: `${SITE_URL}/feed.json`,
      rss: `${SITE_URL}/feed.rss`,
    },
    id: SITE_URL,
    image: SITE_IMAGE,
    language: 'en',
    link: SITE_URL,
    title: SITE_TITLE,
  });

  // add posts with a publish date of today or sooner
  const published = posts.filter(({ data: { date } }) => new Date(date) <= new Date());
  published.sort((a, b) => b.data.date.localeCompare(a.data.date));
  published.forEach(post => {
    feed.addItem({
      author,
      content: post.contents,
      date: new Date(post.data.date),
      description: post.data.description,
      id: generateURL(post.data.slug),
      image: post.data.image || SITE_IMAGE,
      link: generateURL(post.data.slug),
      title: post.data.title,
    });
  });

  // output files
  fs.writeFileSync(path.resolve(OUT_DIR, 'feed.rss'), feed.rss2(), 'utf8');
  fs.writeFileSync(path.resolve(OUT_DIR, 'atom.xml'), feed.atom1(), 'utf8');
  fs.writeFileSync(path.resolve(OUT_DIR, 'feed.json'), feed.json1(), 'utf8');
}

buildRSS();
