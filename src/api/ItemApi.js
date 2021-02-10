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
    define(['ApiClient', 'model/Item', 'model/Attribute', 'model/Response'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Item'), require('../model/Attribute'), require('../model/Response'));
  } else {
    // Browser globals (root is window)
    if (!root.RecomaxRestApi) {
      root.RecomaxRestApi = {};
    }
    root.RecomaxRestApi.ItemApi = factory(root.RecomaxRestApi.ApiClient, root.RecomaxRestApi.Item, root.RecomaxRestApi.Attribute, root.RecomaxRestApi.Response);
  }
}(this, function(ApiClient, Item, Attribute, Response) {
  'use strict';

  /**
   * Item service.
   * @module api/ItemApi
   * @version 1.0.0
   */

  /**
   * Constructs a new ItemApi. 
   * @alias module:api/ItemApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addItemAtUsingPUT operation.
     * @callback module:api/ItemApi~addItemAtUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Item} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add item
     * @param {String} apiKey apiKey
     * @param {String} id id
     * @param {Array.<module:model/Attribute>} attributeList attributeList
     * @param {module:api/ItemApi~addItemAtUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Item}
     */
    this.addItemAtUsingPUT = function(, callback) {
      var postBody = attributeList;

      // verify the required parameter 'apiKey' is set
      if (apiKey === undefined || apiKey === null) {
        throw new Error("Missing the required parameter 'apiKey' when calling addItemAtUsingPUT");
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling addItemAtUsingPUT");
      }

      // verify the required parameter 'attributeList' is set
      if (attributeList === undefined || attributeList === null) {
        throw new Error("Missing the required parameter 'attributeList' when calling addItemAtUsingPUT");
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
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Item;

      return this.apiClient.callApi(
        '/{apiKey}/items/{id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addItemUsingPOST operation.
     * @callback module:api/ItemApi~addItemUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add item
     * @param {String} apiKey apiKey
     * @param {Array.<module:model/Attribute>} attributeList attributeList
     * @param {module:api/ItemApi~addItemUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Response}
     */
    this.addItemUsingPOST = function(, callback) {
      var postBody = attributeList;

      // verify the required parameter 'apiKey' is set
      if (apiKey === undefined || apiKey === null) {
        throw new Error("Missing the required parameter 'apiKey' when calling addItemUsingPOST");
      }

      // verify the required parameter 'attributeList' is set
      if (attributeList === undefined || attributeList === null) {
        throw new Error("Missing the required parameter 'attributeList' when calling addItemUsingPOST");
      }


      var pathParams = {
        'apiKey': apiKey
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
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Response;

      return this.apiClient.callApi(
        '/{apiKey}/items', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteItemUsingDELETE operation.
     * @callback module:api/ItemApi~deleteItemUsingDELETECallback
     * @param {String} error Error message, if any.
     * @param {module:model/Item} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete item
     * @param {String} apiKey apiKey
     * @param {String} id id
     * @param {module:api/ItemApi~deleteItemUsingDELETECallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Item}
     */
    this.deleteItemUsingDELETE = function(, callback) {
      var postBody = null;

      // verify the required parameter 'apiKey' is set
      if (apiKey === undefined || apiKey === null) {
        throw new Error("Missing the required parameter 'apiKey' when calling deleteItemUsingDELETE");
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteItemUsingDELETE");
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
      var returnType = Item;

      return this.apiClient.callApi(
        '/{apiKey}/items/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the gettemUsingGET operation.
     * @callback module:api/ItemApi~gettemUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Item} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get item
     * @param {String} apiKey apiKey
     * @param {String} id id
     * @param {module:api/ItemApi~gettemUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Item}
     */
    this.gettemUsingGET = function(, callback) {
      var postBody = null;

      // verify the required parameter 'apiKey' is set
      if (apiKey === undefined || apiKey === null) {
        throw new Error("Missing the required parameter 'apiKey' when calling gettemUsingGET");
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling gettemUsingGET");
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
      var returnType = Item;

      return this.apiClient.callApi(
        '/{apiKey}/items/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listtemUsingGET operation.
     * @callback module:api/ItemApi~listtemUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Item>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List items
     * @param {String} apiKey apiKey
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.offset offsel of the items list
     * @param {Integer} opts.limit limit of the items list
     * @param {module:api/ItemApi~listtemUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Item>}
     */
    this.listtemUsingGET = function(, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'apiKey' is set
      if (apiKey === undefined || apiKey === null) {
        throw new Error("Missing the required parameter 'apiKey' when calling listtemUsingGET");
      }


      var pathParams = {
        'apiKey': apiKey
      };
      var queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit'],
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
      var returnType = [Item];

      return this.apiClient.callApi(
        '/{apiKey}/items', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateItemUsingPOST operation.
     * @callback module:api/ItemApi~updateItemUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update item
     * @param {String} apiKey apiKey
     * @param {String} id id
     * @param {Array.<module:model/Attribute>} attributeList attributeList
     * @param {module:api/ItemApi~updateItemUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Response}
     */
    this.updateItemUsingPOST = function(, callback) {
      var postBody = attributeList;

      // verify the required parameter 'apiKey' is set
      if (apiKey === undefined || apiKey === null) {
        throw new Error("Missing the required parameter 'apiKey' when calling updateItemUsingPOST");
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateItemUsingPOST");
      }

      // verify the required parameter 'attributeList' is set
      if (attributeList === undefined || attributeList === null) {
        throw new Error("Missing the required parameter 'attributeList' when calling updateItemUsingPOST");
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
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Response;

      return this.apiClient.callApi(
        '/{apiKey}/items/{id}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
