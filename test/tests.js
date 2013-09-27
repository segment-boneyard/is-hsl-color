
describe('is-hsl-color', function () {

  var assert = require('assert');
  var hsl = require('is-hsl-color');

  it('should recognize hsl strings', function () {
    assert(hsl('hsl(255,100%,100%)'));
    assert(hsl('hsl(0, 0%, 0%)'));
    assert(hsl('hsl( 33 , 18% , 02% )'));
  });

  it('should recognize hsla strings', function () {
    assert(hsl('hsla(255,100%,100%,1)'));
    assert(hsl('hsla(0, 0%, 0%, 0)'));
    assert(hsl('hsla( 34 , 13% , 0% , 0.433333)'));
  });

  it('should recognize non hsl strings', function () {
    assert(!hsl('a'));
    assert(!hsl('hsl()'));
    assert(!hsl('#FFFFFF'));
  });

});