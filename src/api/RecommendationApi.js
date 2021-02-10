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
    define(['ApiClient', 'model/RecomResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/RecomResult'));
  } else {
    // Browser globals (root is window)
    if (!root.RecomaxRestApi) {
      root.RecomaxRestApi = {};
    }
    root.RecomaxRestApi.RecommendationApi = factory(root.RecomaxRestApi.ApiClient, root.RecomaxRestApi.RecomResult);
  }
}(this, function(ApiClient, RecomResult) {
  'use strict';

  /**
   * Recommendation service.
   * @module api/RecommendationApi
   * @version 1.0.0
   */

  /**
   * Constructs a new RecommendationApi. 
   * @alias module:api/RecommendationApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the queryItemUsingGET operation.
     * @callback module:api/RecommendationApi~queryItemUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RecomResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Recommendations for items
     * @param {String} apiKey apiKey
     * @param {String} id id
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.start start (default to 0)
     * @param {Integer} opts.pageSize pageSize (default to 10)
     * @param {String} opts.sortField sortField
     * @param {String} opts.sortType sortType (default to asc)
     * @param {String} opts.token token
     * @param {String} opts.did did
     * @param {String} opts.user user
     * @param {Array.<String>} opts.fq fq
     * @param {String} opts.event event (default to ON_QUERY)
     * @param {String} opts.sb sb (default to false)
     * @param {String} opts.callback callback
     * @param {String} opts.uidCookie uidCookie
     * @param {module:api/RecommendationApi~queryItemUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RecomResult}
     */
    this.queryItemUsingGET = function(, callback) {
      opts = opts || {};
      var postBody = opts['uidCookie'];

      // verify the required parameter 'apiKey' is set
      if (apiKey === undefined || apiKey === null) {
        throw new Error("Missing the required parameter 'apiKey' when calling queryItemUsingGET");
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling queryItemUsingGET");
      }


      var pathParams = {
        'apiKey': apiKey,
        'id': id
      };
      var queryParams = {
        'start': opts['start'],
        'pageSize': opts['pageSize'],
        'sortField': opts['sortField'],
        'sortType': opts['sortType'],
        'token': opts['token'],
        'did': opts['did'],
        'user': opts['user'],
        'event': opts['event'],
        'sb': opts['sb'],
        'callback': opts['callback'],
      };
      var collectionQueryParams = {
        'fq': {
          value: opts['fq'],
          collectionFormat: 'multi'
        },
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = RecomResult;

      return this.apiClient.callApi(
        '/{apiKey}/recommendations/items/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the recommendForUserUsingGET operation.
     * @callback module:api/RecommendationApi~recommendForUserUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RecomResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Recommendations for user
     * @param {String} apiKey apiKey
     * @param {String} id id
     * @param {module:api/RecommendationApi~recommendForUserUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RecomResult}
     */
    this.recommendForUserUsingGET = function(, callback) {
      var postBody = null;

      // verify the required parameter 'apiKey' is set
      if (apiKey === undefined || apiKey === null) {
        throw new Error("Missing the required parameter 'apiKey' when calling recommendForUserUsingGET");
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling recommendForUserUsingGET");
      }


      var pathParams = {
        'apiKey': apiKey,
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = RecomResult;

      return this.apiClient.callApi(
        '/{apiKey}/recommendations/users/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
