module.exports = {
 entry: './app.js',
 output: {
   filename: 'index.js',
   libraryTarget: 'umd'
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
