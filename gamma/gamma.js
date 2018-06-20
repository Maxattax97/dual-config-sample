/* eslint-disable no-console, global-require */
const alpha = require('../alpha/alpha.js');
const beta = require('../beta/beta.js');
const path = require('path');

let anotherBeta = null;
let anotherAlpha = null;
let trySub = null;

alpha.load(path.join(`${__dirname}/../alpha/config`))
  .then(() => beta.load(path.join(`${__dirname}/../beta/config`)))
  .then(() => {
    alpha.info();
    console.log('Alpha Name:', alpha.config.get('Name'), '(should be Apple)');

    beta.info();
    console.log('Beta Name:', beta.config.get('Name'), '(should be Beta)');

    anotherBeta = require('../beta/beta.js');
    return anotherBeta.load(path.join(`${__dirname}/config`));
  })
  .then(() => {
    anotherBeta.info();
    console.log('Another Beta:', anotherBeta.config.get('Name'), '(should be Guacamole)');

    anotherAlpha = require('../alpha/alpha.js');
    process.env.NODE_APP_INSTANCE = 2;
    return anotherAlpha.load(path.join(`${__dirname}/../beta/config`));
  })
  .then(() => {
    anotherAlpha.info();
    console.log('Another Alpha:', anotherAlpha.config.get('Name'), '(should be Banana)');

    trySub = require('../alpha/alpha.js');
    return trySub.load(alpha.config.util.toObject(alpha.config.get('Sub')));
  })
  .then(() => {
    console.log('Try Sub:', trySub.config.get('Name'), '(should be Artichoke)');
  })
  .catch((err) => {
    console.error(err);
  });

