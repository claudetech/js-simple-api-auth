var crypto = require('crypto');
var _      = require('lodash');

function Sha1Hasher() {
}

_.extend(Sha1Hasher.prototype, {
  hash: function (value) {
    return crypto.SHA1(value);
  },

  hmac: function (value, key) {
    return crypto.HmacSHA1(value, key);
  }
});

module.exports = Sha1Hasher;
