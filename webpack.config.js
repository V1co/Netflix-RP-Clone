module.exports = {
  "entry": './app/index.js',
  output: {
    path: path.join(__dirname, '/build/static/js'),
    filename: 'index.js',
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: true,
    port: 3000
  },
    "module": {
      "rules": [
        {
          "use": {
            "loader": "babel-loader",
            "options": {
              "presets": [
                "babel-preset-env",
                "babel-preset-react"
              ]
            }
          },
          "exclude": /node_modules/,
          "test": /\.js$/
        }
      ]
    }
  };