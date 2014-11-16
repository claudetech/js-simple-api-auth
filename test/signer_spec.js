var specHelper = require('./spec_helper');
var mocks      = require('./support/mocks');

var Signer     = require('../src/signer');
var config     = require('../src/config');

describe('Signer', function () {
  var signer;

  before(function () {
    config.hasher = require('./support/dummy-hasher');
  });

  beforeEach(function () {
    signer = new Signer();
  });

  it('should have a hasher', function () {
    expect(signer.hasher).to.exist();
    expect(signer.hasher.hash).to.be.a('function');
  });

  describe('sign', function () {
  });

  describe('makeSigningKey', function () {
    it('should generate signing', function () {
      var signingKey = signer.makeSigningKey(mocks.request, mocks.secretKey);
      expect(signingKey).to.exist();
      expect(signingKey.toString()).to.eq('saaultra_secret_key:20141117:saa_request');
    });
  });
});
