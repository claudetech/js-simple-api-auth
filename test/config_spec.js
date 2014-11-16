var config = require('../src/config');

describe('config', function () {
  it('should have default values', function () {
    expect(config).to.exist();
    expect(config.hasher).to.exist();
  });

  it('should be global', function () {
    config.foo = 'foo';
    expect(require('../src/config').foo).to.eq('foo');
  });
});
