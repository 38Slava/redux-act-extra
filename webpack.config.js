var webpack = require('webpack')

module.exports = {
 entry: './index.js',
 output: {
   path: './dist',
   filename: 'bundle.js'
 },
 module: {
  loaders: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'stage-0'],
        plugins: [
          'transform-runtime'
        ]
      }
    }
  ]
  }
}
