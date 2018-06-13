const images = require('remark-images')
const emoji = require('remark-emoji')

module.exports = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  webpack: (config, { defaultLoaders }) => {
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        defaultLoaders.babel,
        {
          loader: '@mdx-js/loader',
          options: {
            mdPlugins: [images, emoji]
          }
        }
      ]
    })

    config.module.rules.push({
      test: /\.jsx$/,
      exclude: /node_modules/,
      use: [
        'babel-loader',
        {
          loader: '@compositor/jsx-loader',
          options: {
            scope: `import * as scope from './scope.js'`
          }
        }
      ]
    })

    return config
  }
}
