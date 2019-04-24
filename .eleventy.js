module.exports = function(eleventyConfig) {
    eleventyConfig.addLayoutAlias('base', 'layouts/base.njk');
    eleventyConfig.addPassthroughCopy('./src/css')
    eleventyConfig.addPassthroughCopy('./src/assets')
    return {
      passthroughFileCopy: true
    }
  }
