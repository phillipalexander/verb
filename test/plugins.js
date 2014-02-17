var expect = require('chai').expect;
var phaser = require('../');


/**
 * plugins
 */

describe('plugins:', function () {

  /**
   * Homepage
   */

  describe('homepage:', function () {
    it('should return a normalized version of the homepage URL listed in package.json.', function () {
      var actual = phaser.process('{%= homepage %}');
      var expected = 'https://github.com/assemble/phaser';
      expect(actual.content).to.eql(expected);
    });

    it('should return a custom hompage URL passed in through the options.metadata property.', function () {
      var actual = phaser.process('{%= homepage %}', {metadata: {homepage: 'git://github.com/foo/bar'}
      });
      var expected = 'git://github.com/foo/bar';
      expect(actual.content).to.eql(expected);
    });

    it('should return a custom homepage URL passed in directly on the options.', function () {
      var actual = phaser.process('{%= homepage %}', {homepage: 'git://github.com/baz/quux/'});
      var expected = 'git://github.com/baz/quux/';
      expect(actual.content).to.eql(expected);
    });
  });


  describe('repo:', function () {
    it('should extract a repo URL in the format of `username/repo` from a GitHub URL.', function () {
      var actual = phaser.process('{%= repo %}');
      var expected = 'assemble/phaser';
      expect(actual.content).to.eql(expected);
    });
  });

  describe('username:', function () {
    it('should extract a username from a GitHub URL.', function () {
      var actual = phaser.process('{%= username %}');
      var expected = 'assemble';
      expect(actual.content).to.eql(expected);
    });
  });

  describe('username:', function () {
    it('should override the username on the context with one passed in through the options.', function () {
      var actual = phaser.process('{%= username %}', {username: 'jonschlinkert'});
      var expected = 'jonschlinkert';
      expect(actual.content).to.eql(expected);
    });
  });
});
