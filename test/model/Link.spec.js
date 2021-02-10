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
    describe('Link', function() {
      beforeEach(function() {
        instance = new RecomaxRestApi.Link();
      });

      it('should create an instance of Link', function() {
        // TODO: update the code to test Link
        expect(instance).to.be.a(RecomaxRestApi.Link);
      });

      it('should have the property params (base name: "params")', function() {
        // TODO: update the code to test the property params
        expect(instance).to.have.property('params');
        // expect(instance.params).to.be(expectedValueLiteral);
      });

      it('should have the property rel (base name: "rel")', function() {
        // TODO: update the code to test the property rel
        expect(instance).to.have.property('rel');
        // expect(instance.rel).to.be(expectedValueLiteral);
      });

      it('should have the property rels (base name: "rels")', function() {
        // TODO: update the code to test the property rels
        expect(instance).to.have.property('rels');
        // expect(instance.rels).to.be(expectedValueLiteral);
      });

      it('should have the property title (base name: "title")', function() {
        // TODO: update the code to test the property title
        expect(instance).to.have.property('title');
        // expect(instance.title).to.be(expectedValueLiteral);
      });

      it('should have the property type (base name: "type")', function() {
        // TODO: update the code to test the property type
        expect(instance).to.have.property('type');
        // expect(instance.type).to.be(expectedValueLiteral);
      });

      it('should have the property uri (base name: "uri")', function() {
        // TODO: update the code to test the property uri
        expect(instance).to.have.property('uri');
        // expect(instance.uri).to.be(expectedValueLiteral);
      });

      it('should have the property uriBuilder (base name: "uriBuilder")', function() {
        // TODO: update the code to test the property uriBuilder
        expect(instance).to.have.property('uriBuilder');
        // expect(instance.uriBuilder).to.be(expectedValueLiteral);
      });

    });
  });

}));