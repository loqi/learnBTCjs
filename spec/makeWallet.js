var path = require('path');
var expect = require('chai').expect;

var makeWallet = require(path.join(__dirname, '..', './makeWallet.js'));

describe('makeWallet', function () {
  'use strict';

  it('exists', function () {
    expect(makeWallet).to.be.a('object');
  });

  it('should have a .generatePrivateKey method', function () {
    expect(makeWallet.generatePrivateKey).to.be.a('function');
  });

  it('should have a .generatePublicAddress method', function () {
    expect(makeWallet.generatePublicAddress).to.be.a('function');
  });

  describe('.generatePrivateKey', function(){
    
    it('should return a string', function () {
      var privateKey = makeWallet.generatePrivateKey();
      expect(privateKey).to.be.a('string');
    });

    it('should return a unique output', function(){
      var firstPrivateKey = makeWallet.generatePrivateKey();
      var secondPrivateKey = makeWallet.generatePrivateKey();
      expect(firstPrivateKey).to.not.equal(secondPrivateKey);
    });
    
  });

  describe('.generatePublicAddress', function(){
    
    it('does something else', function () {
      expect(true).to.equal(false);
    });

  });

});
