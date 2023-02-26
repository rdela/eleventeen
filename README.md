# [eleventeen v8](https://github.com/rdela/eleventeen)

A work in progress variation of

## [eleventy-base-blog v8](https://github.com/11ty/eleventy-base-blog)

> A starter repository showing how to build a blog with the [Eleventy](https://www.11ty.dev/) site generator (using the [v2.0 release](https://www.11ty.dev/blog/eleventy-v2/)).

The name is an homage to the [Daisy Chainsaw album](https://en.wikipedia.org/wiki/Eleventeen_(album)).

[![Netlify Status](https://api.netlify.com/api/v1/badges/bd16afdb-d0a5-4de2-aa5c-19529038ed78/deploy-status)](https://app.netlify.com/sites/eleventeen/deploys)

[Live eleventeen demo](https://eleventeen.netlify.app)

[eleventeen on GitHub](https://github.com/rdela/eleventeen)

## Getting Started

1. Clone this Repository

```
git clone https://github.com/rdela/eleventeen.git my-blog-name
```

2. Navigate to the directory

```
cd my-blog-name
```

Specifically have a look at `eleventy.config.js` to see if you want to configure any Eleventy options differently.

3. Have a look at `eleventy.config.js` to see if you want to configure any Eleventy options differently.
4. Install dependencies

```
npm install
```

5. Edit `_data/metadata.js`

6. Run Eleventy

Generate a production-ready build:

```
npx @11ty/eleventy
```

Or build and host locally on a local development server:

```
npx @11ty/eleventy --serve
```

Or you can run [debug mode](https://www.11ty.dev/docs/debugging/) to see all the internals.

## Features

- Using [Eleventy v2.0](https://www.11ty.dev/blog/eleventy-v2/) with zero-JavaScript output.
	- Content is exclusively pre-rendered (this is a static site).
	- Can easily [deploy to a subfolder without changing any content](https://www.11ty.dev/docs/plugins/html-base/)
	- All URLs are decoupled from the content’s location on the file system.
	- Configure templates via the [Eleventy Data Cascade](https://www.11ty.dev/docs/data-cascade/)
- **Performance focused**: four-hundos Lighthouse score out of the box!
	- [View the Lighthouse report for the latest eleventeen build](https://eleventeen.netlify.app/reports/lighthouse/) courtesy of the [Netlify Lighthouse plugin](https://github.com/netlify/netlify-plugin-lighthouse).
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

- [eleventeen on Netlify](https://eleventeen.netlify.app/)
- [eleventy-base-blog on Netlify](https://eleventy-base-blog.netlify.app)
- [eleventy-base-blog on GitHub Pages](https://11ty.github.io/eleventy-base-blog/)
- [Remix eleventy-base-blog on Glitch](https://glitch.com/~11ty-eleventy-base-blog)

## Deploy this to your own site

Deploy this Eleventy site in just a few clicks on these services:

- [Get your own eleventeen site on Netlify](https://app.netlify.com/start/deploy?repository=https://github.com/rdela/eleventeen)
- If you run Eleventy locally you can drag your `_site` folder to [`drop.netlify.com`](https://drop.netlify.com/) to upload it without using `git`.
- [Get your own eleventeen site on Vercel](https://vercel.com/import/project?template=rdela%2Feleventeen)
- Read more about [Deploying an Eleventy project](https://www.11ty.dev/docs/deployment/) to the web.

### Implementation Notes

- `content/about/index.md` is an example of a content page.
- `content/archive/` has the blog posts but really they can live in any directory, they are in [`content/blog/`](https://github.com/11ty/eleventy-base-blog/tree/main/content/blog) in eleventy-base-blog. They need only the `post` tag to be included in the blog posts [collection](https://www.11ty.dev/docs/collections/).
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
