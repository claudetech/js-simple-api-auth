var crypto = require('crypto');

var Hasher = require('./hashers/sha1-hasher');

var hasher = new Hasher();

var hash = hasher.hash('foo');
console.log(hash.toString());

var hmac = hasher.hmac('message', 'secret');
console.log(hmac.toString());

