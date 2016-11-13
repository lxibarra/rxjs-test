module.exports = {
  entry:'./src/main.js',
  output: {
    path: __dirname + 'public/dist',
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  devServer: {
    proxy: {
      '/w/**': {
        target: 'https://en.wikipedia.org/',
        secure: false,
        port:80,
        changeOrigin:true
      }
    }
  },
  module:{
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
};
