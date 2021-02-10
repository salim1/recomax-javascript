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

  beforeEach(function() {
    instance = new RecomaxRestApi.ItemApi();
  });

  describe('(package)', function() {
    describe('ItemApi', function() {
      describe('addItemAtUsingPUT', function() {
        it('should call addItemAtUsingPUT successfully', function(done) {
          // TODO: uncomment, update parameter values for addItemAtUsingPUT call and complete the assertions
          /*

          instance.addItemAtUsingPUT(, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(RecomaxRestApi.);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('addItemUsingPOST', function() {
        it('should call addItemUsingPOST successfully', function(done) {
          // TODO: uncomment, update parameter values for addItemUsingPOST call and complete the assertions
          /*

          instance.addItemUsingPOST(, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(RecomaxRestApi.);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('deleteItemUsingDELETE', function() {
        it('should call deleteItemUsingDELETE successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteItemUsingDELETE call and complete the assertions
          /*

          instance.deleteItemUsingDELETE(, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(RecomaxRestApi.);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('gettemUsingGET', function() {
        it('should call gettemUsingGET successfully', function(done) {
          // TODO: uncomment, update parameter values for gettemUsingGET call and complete the assertions
          /*

          instance.gettemUsingGET(, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(RecomaxRestApi.);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('listtemUsingGET', function() {
        it('should call listtemUsingGET successfully', function(done) {
          // TODO: uncomment, update parameter values for listtemUsingGET call and complete the assertions
          /*
          var opts = {};

          instance.listtemUsingGET(, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(RecomaxRestApi.);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('updateItemUsingPOST', function() {
        it('should call updateItemUsingPOST successfully', function(done) {
          // TODO: uncomment, update parameter values for updateItemUsingPOST call and complete the assertions
          /*

          instance.updateItemUsingPOST(, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(RecomaxRestApi.);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
