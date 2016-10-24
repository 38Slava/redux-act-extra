module.exports = {
 entry: './index.js',
 output: {
   path: './dist',
   filename: 'index.js'
 },
 module: {
  loaders: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'stage-0']
      }
    }
  ]
  }
}
