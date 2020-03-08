# 🖋️ The Personal Blog of Drew Powers

Powered by [Cobalt][cobalt], a Rust-powered static site generator for very (very) fast builds.

## 🏎️ Local Dev

Ensure [Cobalt][cobalt] and [Node.js][node] are installed. Then run:

```bash
npm install
npm start
```

## 🚀 Deploying

```bash
npm run build:static
```

Deploy the `public/` folder using your method of choice (folder can be configured in
[`_cobalt.yml`](./_cobalt.yml))

## 📜 License

All the source code for generating my blog is yours. Take/modify/steal whatever you like that isn’t
under some existing license.

However, all my writing is **NOT** open source, and is ©️ Drew Powers. Do not use any `.md` files
whatsoever.

The webfont Cardinal Grotesque is 100% copyrighted material and is licensed for use **ONLY FOR THIS
SITE**. Go buy your own license at [verycoolstudio.com][verycool].

[cobalt]: https://cobalt-org.github.io/
[node]: https://nodejs.org
[now]: https://zeit.co/docs/v2/git-integrations/zeit-now-for-github
[verycool]: https://www.verycoolstudio.com/
