var moment = require('moment');

var config = require('./config');

function Signer(options) {
  this.options = options || {};
  var hasherClass = this.options.hasher || config.hasher;
  this.hasher = new hasherClass();
}

_.extend(Signer.prototype, {
  makeSigningKey: function (request, secretKey) {
    var date = moment(request.time).format('YYYYMMDD');
    var hashedDate = this.hasher.hmac(date, 'saa' + secretKey);
    return this.hasher.hmac('saa_request', hashedDate);
  }
});

module.exports = Signer;
