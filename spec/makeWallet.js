var path = require('path');
var expect = require('chai').expect;
var Bitcoin = require('bitcoinjs-lib');

var MakeWallet = require(path.join(__dirname, '..', './makeWallet.js'));

describe('MakeWallet', function () {
  'use strict';
  var wallet;

  beforeEach(function(){
    wallet = new MakeWallet();
  });

  it('exists', function () {
    expect(MakeWallet).to.be.a('function');
  });
  
  it('should return an object', function () {
    expect(wallet).to.be.a('object');
  });

  it('should have an address property', function(){
    expect(wallet.address).to.be.ok;
  });

  it('should have a privateKey property', function(){
    expect(wallet.privateKey).to.be.ok;
  });

  it('should have a balance property', function(){
    expect(wallet.balance).to.be.ok;
  });

  describe('address', function(){

    it('should be a string', function(){
      expect(wallet.address).to.be.a('string');
    });

    it('should be correct length', function(){
      expect(wallet.address.length).to.equal(34);
    });

    it('should be base58 format', function(){
      expect(Bitcoin.Address.fromBase58Check(wallet.address)).to.be.ok;
    });

    it('should be a testnet wallet', function(){
      expect(wallet.address[0]).to.match(/m|n/);
    });

  });

  describe('privateKey', function(){
    
  });
    
});
