const CleanCSS = require("clean-css");

module.exports = function(eleventyConfig) {
    
    eleventyConfig.addFilter("cssmin", function(code) {
        return new CleanCSS({}).minify(code).styles;
    });


    eleventyConfig.addLayoutAlias('base', 'layouts/base.njk');
    eleventyConfig.addPassthroughCopy('src/assets');

    return {

        templateFormats: [
          "md",
          "njk",
        ],

        dir: {
          input: "src/",
          includes: "_includes",
          output: "_site"
        },
        
        passthroughFileCopy: true

    };
};
