const config = require('./webpack.config');
const path = require('path');
config.mode = 'development';
config.devServer = {
  contentBase: path.join(__dirname, 'doc'),
  compress: true,
  port: 9000
}

module.exports = config;