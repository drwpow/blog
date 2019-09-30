const fs = require('fs');
const path = require('path');
const remark = require('remark');
const frontmatter = require('remark-frontmatter');
const extractFrontmatter = require('remark-extract-frontmatter');
const recommended = require('remark-preset-lint-recommended');
const html = require('remark-html');
const { parse: yaml } = require('yaml');

function parseMd(file) {
  return remark()
    .use(recommended)
    .use(frontmatter)
    .use(extractFrontmatter, { yaml })
    .use(html)
    .process(file);
}

const POSTS_DIR = path.resolve(__dirname, '..', 'data');
const DATA_OUTPUT = path.resolve(__dirname, '..', 'src', 'data', 'posts.json');

async function buildPostJSON() {
  // read data directory
  const postData = fs
    .readdirSync(POSTS_DIR)
    .map(file => fs.readFileSync(path.resolve(POSTS_DIR, file), 'utf8'));

  // parse markdown
  const posts = await Promise.all(postData.map(parseMd));

  // filter out unpublished posts
  const published = posts.filter(({ data: { date } }) => new Date(date) <= new Date());
  published.sort((a, b) => b.data.date.localeCompare(a.data.date));

  // convert to JSON
  const json = published.reduce((allPosts, post) => [...allPosts, post], []);

  fs.writeFileSync(DATA_OUTPUT, JSON.stringify(json), 'utf8');
}

buildPostJSON();
