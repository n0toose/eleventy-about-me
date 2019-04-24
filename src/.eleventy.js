module.exports = function(eleventyConfig) {
    eleventyConfig.addLayoutAlias('base', 'layouts/base.njk');
    eleventyConfig.addPassthroughCopy('css')
    eleventyConfig.addPassthroughCopy('assets')
    return {
      passthroughFileCopy: true
    }
  }