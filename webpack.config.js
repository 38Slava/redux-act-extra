module.exports = {
 entry: './index.js',
 output: {
   filename: 'dist/index.js'
 },
 module: {
   loaders: [
     {
       test: /\.js$/,
       exclude: /node_modules/,
       loader: 'babel-loader',
      }
   ]
 }
}
