/*
 * Recomax REST API
 * Recomax REST API
 *
 * OpenAPI spec version: 1.0.0
 * Contact: info@recomax.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.RecomaxRestApi);
  }
}(this, function(expect, RecomaxRestApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('NewCookie', function() {
      beforeEach(function() {
        instance = new RecomaxRestApi.NewCookie();
      });

      it('should create an instance of NewCookie', function() {
        // TODO: update the code to test NewCookie
        expect(instance).to.be.a(RecomaxRestApi.NewCookie);
      });

      it('should have the property comment (base name: "comment")', function() {
        // TODO: update the code to test the property comment
        expect(instance).to.have.property('comment');
        // expect(instance.comment).to.be(expectedValueLiteral);
      });

      it('should have the property domain (base name: "domain")', function() {
        // TODO: update the code to test the property domain
        expect(instance).to.have.property('domain');
        // expect(instance.domain).to.be(expectedValueLiteral);
      });

      it('should have the property expiry (base name: "expiry")', function() {
        // TODO: update the code to test the property expiry
        expect(instance).to.have.property('expiry');
        // expect(instance.expiry).to.be(expectedValueLiteral);
      });

      it('should have the property httpOnly (base name: "httpOnly")', function() {
        // TODO: update the code to test the property httpOnly
        expect(instance).to.have.property('httpOnly');
        // expect(instance.httpOnly).to.be(expectedValueLiteral);
      });

      it('should have the property maxAge (base name: "maxAge")', function() {
        // TODO: update the code to test the property maxAge
        expect(instance).to.have.property('maxAge');
        // expect(instance.maxAge).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property path (base name: "path")', function() {
        // TODO: update the code to test the property path
        expect(instance).to.have.property('path');
        // expect(instance.path).to.be(expectedValueLiteral);
      });

      it('should have the property secure (base name: "secure")', function() {
        // TODO: update the code to test the property secure
        expect(instance).to.have.property('secure');
        // expect(instance.secure).to.be(expectedValueLiteral);
      });

      it('should have the property value (base name: "value")', function() {
        // TODO: update the code to test the property value
        expect(instance).to.have.property('value');
        // expect(instance.value).to.be(expectedValueLiteral);
      });

      it('should have the property version (base name: "version")', function() {
        // TODO: update the code to test the property version
        expect(instance).to.have.property('version');
        // expect(instance.version).to.be(expectedValueLiteral);
      });

    });
  });

}));
