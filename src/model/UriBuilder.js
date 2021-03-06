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
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.RecomaxRestApi) {
      root.RecomaxRestApi = {};
    }
    root.RecomaxRestApi.UriBuilder = factory(root.RecomaxRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The UriBuilder model module.
   * @module model/UriBuilder
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>UriBuilder</code>.
   * @alias module:model/UriBuilder
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>UriBuilder</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UriBuilder} obj Optional instance to populate.
   * @return {module:model/UriBuilder} The populated <code>UriBuilder</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
    }
    return obj;
  }


  return exports;

}));
