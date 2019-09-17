const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, "server.js"),
    output: {
      path: path.resolve(__dirname, ''),
      filename: './index.js'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    }
  };