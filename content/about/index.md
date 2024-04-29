---
layout: layouts/base.njk
eleventyNavigation:
  key: About
  order: 3
---

# About eleventeen <span role="img" aria-label="">🌈📓</span>

Eleventeen is an evolving variation of [Eleventy Base Blog](https://github.com/11ty/eleventy-base-blog), an [Eleventy](https://www.11ty.dev) blog starter. The name is an homage to the [Daisy Chainsaw album](https://en.wikipedia.org/wiki/Eleventeen_(album)) <span role="img" aria-label="">👩🏻‍🎤🎶</span>

Eleventy Base Blog is:

> A starter repository showing how to build a blog with the [Eleventy](https://www.11ty.dev/) site generator (using the [v2.0 release](https://www.11ty.dev/blog/eleventy-v2/)).

## Rainbow Mode™

In addition to Base Blog’s killer features and [Eleventy v3](https://www.11ty.dev/blog/canary-eleventy-v3/)’s bundler-free [ESM](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) support, eleventeen sports a novel new visual experience we call [Rainbow Mode](https://github.com/rdela/eleventeen/pull/1), powered by [Chromagen](https://github.com/famebot/chromagen), the color scheme generator we publish under the [Famebot](https://github.com/famebot) organization. Our homegrown Rainbow Mode is wholly distinct from and not to be confused with Emacs [rainbow-mode](https://elpa.gnu.org/packages/rainbow-mode.html), which “sets background color to strings that match color&nbsp;names.”

### prefers-color-scheme: rainbow

We posit a third color scheme preference in addition to light and dark “modes,” rainbow. And here in the world of eleventeen, rainbow is the default. But we acknowledge not all sites are a match for Rainbow Mode, and still want those sites to enjoy the rest of what eleventeen has to offer.

## Mono Mode <span role="img" aria-label="">📓🏁</span>

[v9.2.3-alpha.5](https://github.com/rdela/eleventeen/releases/tag/v9.2.3-alpha.5) added a `mono` option to [`_data/metadata.js`](https://github.com/rdela/eleventeen/blob/trunk/_data/metadata.js) in [PR #13](https://github.com/rdela/eleventeen/pull/13) that disables Rainbow Mode if you set it to `true`.

`mono` is `false` by default, on purpose, because it beats making people set an option called `rainbow` to `false`. Plus it might make the current  {% raw %}`{%- if not metadata.mono %}`{% endraw %} template logic in [`_includes/layouts/base.njk`](https://github.com/rdela/eleventeen/blob/trunk/_includes/layouts/base.njk) a little more resilient.

### Show Me the Mono

You can see Mono Mode enabled at [mono.eleventeen.blog](https://mono.eleventeen.blog)

Try toggling light and dark mode using devtools, there are links to how at the bottom to [chromagen.io](https://chromagen.io/)

The rainbow eleventeen demo still lives (happily ever after) at [eleventeen.blog](https://eleventeen.blog)

## Star Power <span role="img" aria-label="">⭐️⚡️</span>

Please remember to star [eleventeen on GitHub](https://github.com/rdela/eleventeen) <span role="img" aria-label="">⭐️🐙</span>