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
    describe('EntityTag', function() {
      beforeEach(function() {
        instance = new RecomaxRestApi.EntityTag();
      });

      it('should create an instance of EntityTag', function() {
        // TODO: update the code to test EntityTag
        expect(instance).to.be.a(RecomaxRestApi.EntityTag);
      });

      it('should have the property value (base name: "value")', function() {
        // TODO: update the code to test the property value
        expect(instance).to.have.property('value');
        // expect(instance.value).to.be(expectedValueLiteral);
      });

      it('should have the property weak (base name: "weak")', function() {
        // TODO: update the code to test the property weak
        expect(instance).to.have.property('weak');
        // expect(instance.weak).to.be(expectedValueLiteral);
      });

    });
  });

}));
