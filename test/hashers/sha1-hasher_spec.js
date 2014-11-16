var crypto     = require('crypto');

var Sha1Hasher = require('../../src/hashers/sha1-hasher');

describe('Sha1Hasher', function() {
  var hasher;

  beforeEach(function () {
    hasher = new Sha1Hasher();
  });

  describe('hash', function () {
    it('should hash value', function() {
      var value = 'foo';
      var hash = hasher.hash(value);
      expect(hash).to.exist();
      expect(hash.toString()).to.eq('0beec7b5ea3f0fdbc95d0dd47f3c5bc275da8a33');
    });
  });

  describe('hmac', function () {
    it('should hmac value', function () {
      var value = 'foo';
      var key   = 'secret';
      var hash  = hasher.hmac(value, key);
      expect(hash).to.exist();
      expect(hash.toString()).to.eq('9baed91be7f58b57c824b60da7cb262b2ecafbd2');
    });
  });
});
