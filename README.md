# [eleventeen v8](https://github.com/rdela/eleventeen)

## WARNING: Here Be Canaries 🐥

This starter has advanced ahead of its upstream source, [eleventy-base-blog v8](https://github.com/11ty/eleventy-base-blog), to boldy embrace [Eleventy v3.0](https://www.11ty.dev/blog/canary-eleventy-v3/#how-to-require(@11ty/eleventy)-in-commonjs) in [PR #8](https://github.com/rdela/eleventeen/pull/8).

eleventy-base-blog describes itself as:

> A starter repository showing how to build a blog with the [Eleventy](https://www.11ty.dev/) site generator (using the [v2.0 release](https://www.11ty.dev/blog/eleventy-v2/)).

In addition to all of base-blog’s killer features and Eleventy 3’s bundler-free [ESM](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) support, eleventeen sports [MOTHEREFFIN Rainbow mode](https://github.com/rdela/eleventeen/pull/1) powered by [Chromagen](https://github.com/famebot/chromagen) 🌈📓➕🎨💥

Rejoicing and rainbows aside, eleventeen also makes some more subtle adjustments to eleventy-base-blog. There are various changes in `public/css/index.css`, and in `_includes/postslist.njk`:
 
```njk
<ol reversed class="postlist" style="counter-reset: start-from {{ (postslistCounter or postslist.length) + 1 }}">
```
 
becomes:
 
```njk
<ul reversed class="postlist">
```

The eleventeen name is an homage to the [Daisy Chainsaw album](https://en.wikipedia.org/wiki/Eleventeen_(album)) 👩🏻‍🎤🎶

Please remember to star [eleventeen on GitHub](https://github.com/rdela/eleventeen) ⭐️🐙

Visit the [live eleventeen demo](https://eleventeen.blog) on <https://eleventeen.blog> 🌈📓

[![Netlify Status](https://api.netlify.com/api/v1/badges/bd16afdb-d0a5-4de2-aa5c-19529038ed78/deploy-status)](https://app.netlify.com/sites/eleventeen/deploys)

## Getting Started

If you get stuck, try the [Eleventy Getting Started Guide](https://www.11ty.dev/docs/getting-started/).

1. Make a directory and navigate to it.

```
mkdir my-blog-name
cd my-blog-name
```


2. Clone this Repository to your new directory.

```
git clone https://github.com/rdela/eleventeen.git .
```

Edit `_data/metadata.js` to configure the site’s details.

_Optional:_ Review `eleventy.config.js` to customize the Eleventy build configuration.

3. Install dependencies

```
npm install
```

4. Run Eleventy

Develop:

```
npm run d
```

Or

```
npm run start
```

Generate a production-ready build:

```
npm run build
```

Or

```
npx @11ty/eleventy
```

Or build and host on a local development server:

```
npx @11ty/eleventy --serve
```

You can run [debug mode](https://www.11ty.dev/docs/debugging/) to see all the internals.

## Features

- Using [Eleventy v2.0](https://www.11ty.dev/blog/eleventy-v2/) with zero-JavaScript output.
	- Content is exclusively pre-rendered (this is a static site).
	- Can easily [deploy to a subfolder without changing any content](https://www.11ty.dev/docs/plugins/html-base/)
	- All URLs are decoupled from the content’s location on the file system.
	- Configure templates via the [Eleventy Data Cascade](https://www.11ty.dev/docs/data-cascade/)
- **Performance focused**: four-hundos Lighthouse score out of the box!
	- [View the Lighthouse report for the latest eleventeen build](https://eleventeen.blog/reports/lighthouse/) courtesy of the [Netlify Lighthouse plugin](https://github.com/netlify/netlify-plugin-lighthouse).
	- _0 Cumulative Layout Shift_
	- _0ms Total Blocking Time_
- Local development live reload provided by [Eleventy Dev Server](https://www.11ty.dev/docs/dev-server/).
- Content-driven [navigation menu](https://www.11ty.dev/docs/plugins/navigation/)
- [Image optimization](https://www.11ty.dev/docs/plugins/image/) via the `{% image %}` shortcode.
	- Zero-JavaScript output.
	- Support for modern image formats automatically (e.g. AVIF and WebP)
	- Prefers `<img>` markup if possible (single image format) but switches automatically to `<picture>` for multiple image formats.
	- Automated `<picture>` syntax markup with `srcset` and optional `sizes`
	- Includes `width`/`height` attributes to avoid [content layout shift](https://web.dev/cls/).
	- Includes `loading="lazy"` for native lazy loading without JavaScript.
	- Includes [`decoding="async"`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/decoding)
	- Images can be co-located with blog post files.
	- View the [Image plugin source code](https://github.com/11ty/eleventy-base-blog/blob/main/eleventy.config.images.js)
- Per page CSS bundles [via `eleventy-plugin-bundle`](https://github.com/11ty/eleventy-plugin-bundle).
- Built-in [syntax highlighter](https://www.11ty.dev/docs/plugins/syntaxhighlight/) (zero-JavaScript output).
- Blog Posts
	- Draft posts: use `draft: true` to mark a blog post as a draft. Drafts are **only** included during `--serve`/`--watch` and are excluded from full builds. View the [Drafts plugin source code](https://github.com/rdela/eleventeen/blob/trunk/eleventy.config.drafts.js).
	- Automated next/previous links
	- Accessible deep links to headings
- Generated Pages
	- Home, Archive, and About pages.
	- [Feeds for Atom and JSON](https://www.11ty.dev/docs/plugins/rss/)
	- `sitemap.xml`
	- Zero-maintenance tag pages ([View on the Demo](https://eleventy-base-blog.netlify.app/tags/))
	- Content not found (404) page

## Demos

- eleventeen on Netlify: <https://eleventeen.blog> or <https://eleventeen.netlify.app>
- [eleventy-base-blog on Netlify](https://eleventy-base-blog.netlify.app)
- [eleventy-base-blog on GitHub Pages](https://11ty.github.io/eleventy-base-blog/)
- [Remix eleventy-base-blog on Glitch](https://glitch.com/~11ty-eleventy-base-blog)
- [eleventy-base-blog on Cloudflare Pages](https://eleventy-base-blog-d2a.pages.dev/)

## Deploy this to your own site

Deploy this Eleventy site in just a few clicks on these services:

- [Get your own eleventeen site on Netlify](https://app.netlify.com/start/deploy?repository=https://github.com/rdela/eleventeen)
- If you run Eleventy locally you can drag your `_site` folder to [`drop.netlify.com`](https://drop.netlify.com/) to upload it without using `git`.
- [Get your own eleventeen site on Vercel](https://vercel.com/import/project?template=rdela%2Feleventeen)
- [Try it out on Stackblitz](https://stackblitz.com/github/rdela/eleventeen)
- Read more about [Deploying an Eleventy project](https://www.11ty.dev/docs/deployment/) to the web.

### Implementation Notes

- `content/about/index.md` is an example of a content page.
- `content/archive/` has the blog posts but really they can live in any directory, in eleventy-base-blog they are in [`content/blog/`](https://github.com/11ty/eleventy-base-blog/tree/main/content/blog). They only need the `posts` tag to be included in the blog posts [collection](https://www.11ty.dev/docs/collections/), see `content/archive/archive.11tydata.js`.
- Use the `eleventyNavigation` key (via the [Eleventy Navigation plugin](https://www.11ty.dev/docs/plugins/navigation/)) in your front matter to add a template to the top level site navigation. This is in use on `content/index.njk` and `content/about/index.md`.
- Content can be in _any template format_ (blog posts needn’t exclusively be markdown, for example). Configure your project’s supported templates in `eleventy.config.js` -> `templateFormats`.
- The `public` folder in your input directory will be copied to the output folder (via `addPassthroughCopy` in the `eleventy.config.js` file). This means `./public/css/*` will live at `./_site/css/*` after your build completes.
- Provides two content feeds:
	- `content/feed/feed.njk`
	- `content/feed/json.njk`
- This project uses three [Eleventy Layouts](https://www.11ty.dev/docs/layouts/):
	- `_includes/layouts/base.njk`: the top level HTML structure
	- `_includes/layouts/home.njk`: the home page template (wrapped into `base.njk`)
	- `_includes/layouts/post.njk`: the blog post template (wrapped into `base.njk`)
- `_includes/postslist.njk` is a Nunjucks include and is a reusable component used to display a list of all the posts. `content/index.njk` has an example of how to use it.

#### Content Security Policy

If your site enforces a [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) (as public-facing sites should), you should pick one:

1. In `base.njk`, remove `<style>{% getBundle "css" %}</style>` and uncomment `<link rel="stylesheet" href="{% getBundleFileUrl "css" %}">`
2. Configure the server with the CSP directive `style-src: 'unsafe-inline'` (less secure).
