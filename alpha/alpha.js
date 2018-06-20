/* eslint-disable global-require, no-console */
let config;

module.exports = {};

module.exports.load = path => new Promise(((resolve) => {
  if (path && typeof (path) === 'object') {
    config = path;
    return resolve();
  } else if (path) {
    process.env.NODE_CONFIG_DIR = path;
  }
  config = require('config');
  module.exports.config = config;
  return resolve();
}));

module.exports.info = () => {
  console.log('> Instance of Alpha');
};


module.exports.config = null;
