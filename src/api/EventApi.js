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
    define(['ApiClient', 'model/ResponseEntity'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ResponseEntity'));
  } else {
    // Browser globals (root is window)
    if (!root.RecomaxRestApi) {
      root.RecomaxRestApi = {};
    }
    root.RecomaxRestApi.EventApi = factory(root.RecomaxRestApi.ApiClient, root.RecomaxRestApi.ResponseEntity);
  }
}(this, function(ApiClient, ResponseEntity) {
  'use strict';

  /**
   * Event service.
   * @module api/EventApi
   * @version 1.0.0
   */

  /**
   * Constructs a new EventApi. 
   * @alias module:api/EventApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createEventTestUsingPOST operation.
     * @callback module:api/EventApi~createEventTestUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseEntity} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Event List
     * @param {String} apiKey apiKey
     * @param {String} itemId itemId
     * @param {String} userId userId
     * @param {String} name name
     * @param {module:api/EventApi~createEventTestUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResponseEntity}
     */
    this.createEventTestUsingPOST = function(, callback) {
      var postBody = null;

      // verify the required parameter 'apiKey' is set
      if (apiKey === undefined || apiKey === null) {
        throw new Error("Missing the required parameter 'apiKey' when calling createEventTestUsingPOST");
      }

      // verify the required parameter 'itemId' is set
      if (itemId === undefined || itemId === null) {
        throw new Error("Missing the required parameter 'itemId' when calling createEventTestUsingPOST");
      }

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling createEventTestUsingPOST");
      }

      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling createEventTestUsingPOST");
      }


      var pathParams = {
        'apiKey': apiKey
      };
      var queryParams = {
        'itemId': itemId,
        'userId': userId,
        'name': name,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ResponseEntity;

      return this.apiClient.callApi(
        '/{apiKey}/events', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createEventUsingPUT operation.
     * @callback module:api/EventApi~createEventUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseEntity} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create event
     * @param {String} apiKey apiKey
     * @param {String} id id
     * @param {Object} opts Optional parameters
     * @param {String} opts.itemId itemId
     * @param {String} opts.userId userId
     * @param {String} opts.name name (default to VIEW)
     * @param {module:api/EventApi~createEventUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResponseEntity}
     */
    this.createEventUsingPUT = function(, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'apiKey' is set
      if (apiKey === undefined || apiKey === null) {
        throw new Error("Missing the required parameter 'apiKey' when calling createEventUsingPUT");
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling createEventUsingPUT");
      }


      var pathParams = {
        'apiKey': apiKey,
        'id': id
      };
      var queryParams = {
        'itemId': opts['itemId'],
        'userId': opts['userId'],
        'name': opts['name'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ResponseEntity;

      return this.apiClient.callApi(
        '/{apiKey}/event/{id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
