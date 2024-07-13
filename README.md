# [eleventeen](https://eleventeen.blog) <span role="img" aria-label="">🌈📓</span>

[![](https://o.famebot.com/file/famebot/eleventeen.png)](https://eleventeen.blog)

Eleventeen is an evolving variation of [Eleventy Base Blog](https://github.com/11ty/eleventy-base-blog), a blueprint to start a blog with [Eleventy (11ty)](https://www.11ty.dev/), the award-winning open source site generator created and maintained by [Zach Leatherman](https://www.zachleat.com/), who [blogs about Eleventy](https://www.zachleat.com/web/?category=eleventy) often.

[Ricky de Laveaga](https://rdela.com/bio/) builds [eleventeen on GitHub](https://github.com/rdela/eleventeen) for web projects by [Famebot](https://famebot.com/) and [Artist Activist](https://artact.io/). Famebot is the micro movie studio Ricky runs with [Laramie Dennis](https://laramiedennis.com/), and Artist Activist is a creative agency advocating for positive change Ricky co-founded with [Clifford J. Tasner](https://www.cliffordjtasner.com/).

The name eleventeen is an homage to the [Daisy Chainsaw album](https://en.wikipedia.org/wiki/Eleventeen_(album)) <span role="img" aria-label="">👩🏻‍🎤🎶</span>

## WARNING: Here Be Canaries <span role="img" aria-label="">🐥</span>

Eleventeen boldly embraced the alpha release of [Eleventy v3 canary](https://www.11ty.dev/blog/canary-eleventy-v3/) ahead of its upstream source in [PR #8](https://github.com/rdela/eleventeen/pull/8) / [v9.0.0-alpha.5](https://github.com/rdela/eleventeen/releases/tag/v9.0.0-alpha.5), while Eleventy Base Blog remains on the stable [v2 release](https://www.11ty.dev/blog/eleventy-v2/) as of 8 July 2024.

## Get Started

1. Edit `_data/metadata.js` with the information for your site.
2. (Optional) Review `eleventy.config.js` build [configuration](https://www.11ty.dev/docs/config/)

## Rainbow Mode™

In addition to Base Blog’s killer features and Eleventy 3’s bundler-free [ESM](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) support, eleventeen sports a novel new visual experience we call Rainbow Mode, powered by [Chromagen](https://github.com/famebot/chromagen), the color scheme generator we publish under the [Famebot organization](https://github.com/famebot). Our homegrown Rainbow Mode is wholly distinct from and not to be confused with Emacs [rainbow-mode](https://elpa.gnu.org/packages/rainbow-mode.html), which “sets background color to strings that match color names.”

### prefers-color-scheme: rainbow

We posit a third color scheme preference in addition to light and dark “modes,” rainbow. And here in the world of eleventeen, rainbow is the default. But we acknowledge not all sites are a match for Rainbow Mode, and still want those sites to enjoy the rest of what eleventeen has to offer.

## Mono Mode <span role="img" aria-label="">📓🏁</span>

v9.2.3-alpha.5 added a `mono` option to [`_data/metadata.js`](_data/metadata.js) that disables Rainbow Mode if you set it to `true`. `mono` is `false` by default, on purpose, because it beats making people set an option called `rainbow` to `false`.

### Show Me the Mono

You can see mono enabled at [mono.eleventeen.blog](https://mono.eleventeen.blog)

Try toggling light and dark mode using devtools, there are links to how at the bottom to [chromagen.io](https://chromagen.io/)

The rainbow eleventeen demo still lives (happily ever after) at [eleventeen.blog](https://eleventeen.blog)

## Other Additions to and Divergences from Eleventy Base Blog

Rejoicing and rainbows aside, eleventeen also adds post images, and makes some more subtle adjustments to Eleventy Base Blog. There are various changes in `public/css/index.css`, and in `_includes/postslist.njk`:

```njk
<ol reversed class="postlist" style="counter-reset: start-from {{ (postslistCounter or postslist.length) + 1 }}">
```
 
becomes:
 
```njk
<ul reversed class="postlist">
```

The example About page [`content/about/index.md`](content/about/index.md) tells the story as well.

Please remember to star [eleventeen on GitHub](https://github.com/rdela/eleventeen) <span role="img" aria-label="">⭐️🐙</span>

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

## Key Features

- Using [Eleventy ~~v2.0~~ 3.0 alpha](https://www.11ty.dev/blog/canary-eleventy-v3/) with zero-JavaScript output.
	- Content is exclusively pre-rendered (this is a static site).
	- Can easily [deploy to a subfolder without changing any content](https://www.11ty.dev/docs/plugins/html-base/)
	- All URLs are decoupled from the content’s location on the file system.
	- Configure templates via the [Eleventy Data Cascade](https://www.11ty.dev/docs/data-cascade/)
- **Performance focused**: four-hundos Lighthouse score out of the box!
	- [View the Lighthouse report for the latest eleventeen build](https://eleventeen.blog/reports/lighthouse/) courtesy of the [Netlify Lighthouse plugin](https://github.com/netlify/netlify-plugin-lighthouse).
	- _0 Cumulative Layout Shift_
	- _0ms Total Blocking Time_

## We Work Hard for These Hundies

Like Eleventy Base Blog, eleventeen scores a perfect 400 on Lighthouse audits, 100 in accessibility, best-practices, performance, and SEO.

If you deploy eleventeen to Netlify as is with its included `netlify.toml` build config file, eleventeen expects [netlify-plugin-lighthouse](https://github.com/netlify/netlify-plugin-lighthouse) to be installed at v6 or higher, so it can monitor Lighthouse audit performance thresholds in the `onPostBuild` event. v5 changed @netlify/plugin-lighthouse’s default behavior to running during the `onSuccess` build step in [PR #588](https://github.com/netlify/netlify-plugin-lighthouse/pull/588). Running the plugin in `onPostBuild` now requires `fail_deploy_on_score_thresholds` to be set to `true` in `netlify.toml`.

If the plugin is not installed or installed at a version older than 5.0.0, particularly 4.1.1 or lower, you will get a “failed due to plugin error” during the build. The deploy log shows “Deploy failed due to an error in @netlify/plugin-lighthouse plugin,” and more specifically: 

```
Plugin "@netlify/plugin-lighthouse" invalid/unknown input(s) "fail_deploy_on_score_thresholds"
```

You can [install the plugin through the Netlify UI](https://www.npmjs.com/package/@netlify/plugin-lighthouse#install-plugin-through-the-netlify-ui): “from the [Integrations Hub](https://www.netlify.com/integrations/lighthouse/), the [Plugins directory](https://app.netlify.com/plugins), or through this [direct installation link](https://app.netlify.com/plugins/@netlify/plugin-lighthouse/install).” One tricky part of installing it through the UI is making sure you are on version 6 or higher. v6 is the latest version as of 2024-05-01. To check you can visit your site’s [Enabled integrations](https://docs.netlify.com/integrations/build-plugins/#manage-plugin-versions) and select Options > Change version to make sure you are on a major version greater than or equal to 6.0.0.

Alternatively, you can install the plugin manually with: 

```sh
npm i -D @netlify/plugin-lighthouse
```

Some versions below v6 can exhibit an issue where the presence of a `x-robots-tag: noindex` header on deploy previews lowers the SEO score to 92, but even then production builds still score 100. The solution is to update the plugin, and this is what led to discovering the issues detailed here, in [PR #16](https://github.com/rdela/eleventeen/pull/16) / [commit 5172fb3](https://github.com/rdela/eleventeen/commit/5172fb3678da0b1c0bc03ace86a4175104efbd62), and [on Mastodon](https://mastodon.social/@rdela/112209383077547429). Note netlify-plugin-lighthouse is now in [maintenance(-only) mode](https://github.com/netlify/netlify-plugin-lighthouse/blob/main/CONTRIBUTING.md).

## More Features

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
	- Zero-maintenance tag pages ([View on the Demo](https://eleventeen.blog/tags/))
	- Content not found (404) page

## Demos

- eleventeen on Netlify, Rainbow Mode (default): <https://eleventeen.blog>
  or <https://eleventeen.netlify.app> ([Latest Lighthouse report](https://eleventeen.blog/reports/lighthouse/))
- eleventeen on Netlify, Mono Mode: <https://mono.eleventeen.blog> ([Latest Lighthouse report](https://mono.eleventeen.blog/reports/lighthouse/))
- [eleventy-base-blog on Netlify](https://eleventy-base-blog.netlify.app)
- [eleventy-base-blog on GitHub Pages](https://11ty.github.io/eleventy-base-blog/)
- [Remix eleventy-base-blog on Glitch](https://glitch.com/~11ty-eleventy-base-blog)
- [eleventy-base-blog on Cloudflare Pages](https://eleventy-base-blog-d2a.pages.dev/)

## Deploy This to Your Own Site

Deploy this Eleventy site in just a few clicks on these services:

- [Deploy eleventeen to **Netlify**](https://app.netlify.com/start/deploy?repository=https://github.com/rdela/eleventeen)
- [Deploy eleventeen to **Vercel**](https://vercel.com/import/project?template=rdela%2Feleventeen)
- Look in `.github/workflows/gh-pages.yml.sample` for information on Deploying to **GitHub Pages**.
- [Try it out on **Stackblitz**](https://stackblitz.com/github/rdela/eleventeen)
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

## Other Eleventy Resources

- [The 11ty Bundle](https://11tybundle.dev/), an ever-expanding collection of Eleventy news and resources curated by [Bob Monsour](https://www.bobmonsour.com/)
- [Eleventy Community Discord Server](https://www.11ty.dev/blog/discord/)
- [Eleventy YouTube channel](https://www.youtube.com/@EleventyVideo)
- [CloudCannon YouTube channel](https://www.youtube.com/@CloudCannon)
