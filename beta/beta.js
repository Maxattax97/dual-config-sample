/* eslint-disable global-require, no-console */
let config;

module.exports = {};

module.exports.load = path => new Promise(((resolve) => {
  if (path) {
    process.env.NODE_CONFIG_DIR = path;
  }
  config = require('config');
  module.exports.config = config;
  resolve();
}));

module.exports.info = () => {
  console.log('> Instance of Beta');
};

module.exports.config = null;
