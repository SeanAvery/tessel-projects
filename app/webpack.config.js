module.exports = {
  entry: __dirname + '/index.js',
  output: {
    path: __dirname,
    filename: 'dist.js'
  },
  module: {
    loaders: [
      {
        test: /.(js)?$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-2']
        },
        exclude: /node_modules/
      },
    ]
  }
}
