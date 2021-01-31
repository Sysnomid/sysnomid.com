const pluginRss = require("@11ty/eleventy-plugin-rss");
const Image = require("@11ty/eleventy-img");

async function imageShortcode(src, alt, sizes) {
  let metadata = await Image(src, {
    widths: [300],
    formats: ["avif", "jpeg"]
  });

  let imageAttributes = {
    alt,
    sizes,
    loading: "lazy",
    decoding: "async",
  };

  // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
  return Image.generateHTML(metadata, imageAttributes);
}
module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter('readableDate', require('./lib/filters/readableDate'));
  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);
  eleventyConfig.addLiquidShortcode("image", imageShortcode);
  eleventyConfig.addJavaScriptFunction("image", imageShortcode);
    eleventyConfig.addPassthroughCopy('assets')
    eleventyConfig.addPassthroughCopy('img')
    eleventyConfig.setDynamicPermalinks(false);
    eleventyConfig.addPlugin(pluginRss);
    return {
      passthroughFileCopy: true
    }
}