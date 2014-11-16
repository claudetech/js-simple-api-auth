var crypto = require('./crypto-js');
require('imports?CryptoJS!../components/cryptojslib/rollups/sha1');
require('imports?CryptoJS!../components/cryptojslib/rollups/hmac-sha1.js');
module.exports = crypto;
