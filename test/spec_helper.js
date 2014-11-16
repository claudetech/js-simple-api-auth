var mocks = require('./support/mocks');

var clock;

beforeEach(function () {
  clock = sinon.useFakeTimers(mocks.date.getTime());
});

module.exports = {
  restoreDate: function () {
    clock.restore();
  }
};
