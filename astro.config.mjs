// @ts-check
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  trailingSlash: 'never',
  build: {
    format: 'preserve',
  },
  /*
   * Astro 7 changed the default to 'jsx', which drops the whitespace between
   * text and an inline element when the source has a line break between them
   * (e.g. "tech that\n<strong>doesn't suck</strong>"). Prettier reflows these
   * templates, so keep the pre-v7 collapsing behaviour instead.
   */
  compressHTML: true,
})
