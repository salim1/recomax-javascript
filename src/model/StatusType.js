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
    root.RecomaxRestApi.StatusType = factory(root.RecomaxRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The StatusType model module.
   * @module model/StatusType
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>StatusType</code>.
   * @alias module:model/StatusType
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>StatusType</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StatusType} obj Optional instance to populate.
   * @return {module:model/StatusType} The populated <code>StatusType</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('family'))
        obj.family = ApiClient.convertToType(data['family'], 'String');
      if (data.hasOwnProperty('reasonPhrase'))
        obj.reasonPhrase = ApiClient.convertToType(data['reasonPhrase'], 'String');
      if (data.hasOwnProperty('statusCode'))
        obj.statusCode = ApiClient.convertToType(data['statusCode'], 'Integer');
    }
    return obj;
  }

  /**
   * @member {module:model/StatusType.FamilyEnum} family
   */
  exports.prototype.family = undefined;

  /**
   * @member {String} reasonPhrase
   */
  exports.prototype.reasonPhrase = undefined;

  /**
   * @member {Integer} statusCode
   */
  exports.prototype.statusCode = undefined;



  /**
   * Allowed values for the <code>family</code> property.
   * @enum {String}
   * @readonly
   */
  exports.FamilyEnum = {
    /**
     * value: "INFORMATIONAL"
     * @const
     */
    INFORMATIONAL: "INFORMATIONAL",

    /**
     * value: "SUCCESSFUL"
     * @const
     */
    SUCCESSFUL: "SUCCESSFUL",

    /**
     * value: "REDIRECTION"
     * @const
     */
    REDIRECTION: "REDIRECTION",

    /**
     * value: "CLIENT_ERROR"
     * @const
     */
    CLIENT_ERROR: "CLIENT_ERROR",

    /**
     * value: "SERVER_ERROR"
     * @const
     */
    SERVER_ERROR: "SERVER_ERROR",

    /**
     * value: "OTHER"
     * @const
     */
    OTHER: "OTHER"
  };

  return exports;

}));
