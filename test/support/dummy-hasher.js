var _ = require('lodash');

function DummyHasher() {
}

_.extend(DummyHasher.prototype, {
  hash: function(value) {
    return "hashed:" + value;
  },

  hmac: function (value, key) {
    return key + ":" + value;
  }
});

module.exports = DummyHasher;
