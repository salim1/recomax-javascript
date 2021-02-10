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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Attribute', 'model/Character', 'model/EntityTag', 'model/Item', 'model/Link', 'model/Locale', 'model/MediaType', 'model/NewCookie', 'model/RecomResult', 'model/RecomResultItem', 'model/RecomVirtualCategory', 'model/Response', 'model/ResponseEntity', 'model/StatusType', 'model/URI', 'model/UriBuilder', 'model/User', 'api/EventApi', 'api/ItemApi', 'api/RecommendationApi', 'api/UserApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/Attribute'), require('./model/Character'), require('./model/EntityTag'), require('./model/Item'), require('./model/Link'), require('./model/Locale'), require('./model/MediaType'), require('./model/NewCookie'), require('./model/RecomResult'), require('./model/RecomResultItem'), require('./model/RecomVirtualCategory'), require('./model/Response'), require('./model/ResponseEntity'), require('./model/StatusType'), require('./model/URI'), require('./model/UriBuilder'), require('./model/User'), require('./api/EventApi'), require('./api/ItemApi'), require('./api/RecommendationApi'), require('./api/UserApi'));
  }
}(function(ApiClient, Attribute, Character, EntityTag, Item, Link, Locale, MediaType, NewCookie, RecomResult, RecomResultItem, RecomVirtualCategory, Response, ResponseEntity, StatusType, URI, UriBuilder, User, EventApi, ItemApi, RecommendationApi, UserApi) {
  'use strict';

  /**
   * Recomax_REST_API.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var RecomaxRestApi = require('index'); // See note below*.
   * var xxxSvc = new RecomaxRestApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new RecomaxRestApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new RecomaxRestApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new RecomaxRestApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.0.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The Attribute model constructor.
     * @property {module:model/Attribute}
     */
    Attribute: Attribute,
    /**
     * The Character model constructor.
     * @property {module:model/Character}
     */
    Character: Character,
    /**
     * The EntityTag model constructor.
     * @property {module:model/EntityTag}
     */
    EntityTag: EntityTag,
    /**
     * The Item model constructor.
     * @property {module:model/Item}
     */
    Item: Item,
    /**
     * The Link model constructor.
     * @property {module:model/Link}
     */
    Link: Link,
    /**
     * The Locale model constructor.
     * @property {module:model/Locale}
     */
    Locale: Locale,
    /**
     * The MediaType model constructor.
     * @property {module:model/MediaType}
     */
    MediaType: MediaType,
    /**
     * The NewCookie model constructor.
     * @property {module:model/NewCookie}
     */
    NewCookie: NewCookie,
    /**
     * The RecomResult model constructor.
     * @property {module:model/RecomResult}
     */
    RecomResult: RecomResult,
    /**
     * The RecomResultItem model constructor.
     * @property {module:model/RecomResultItem}
     */
    RecomResultItem: RecomResultItem,
    /**
     * The RecomVirtualCategory model constructor.
     * @property {module:model/RecomVirtualCategory}
     */
    RecomVirtualCategory: RecomVirtualCategory,
    /**
     * The Response model constructor.
     * @property {module:model/Response}
     */
    Response: Response,
    /**
     * The ResponseEntity model constructor.
     * @property {module:model/ResponseEntity}
     */
    ResponseEntity: ResponseEntity,
    /**
     * The StatusType model constructor.
     * @property {module:model/StatusType}
     */
    StatusType: StatusType,
    /**
     * The URI model constructor.
     * @property {module:model/URI}
     */
    URI: URI,
    /**
     * The UriBuilder model constructor.
     * @property {module:model/UriBuilder}
     */
    UriBuilder: UriBuilder,
    /**
     * The User model constructor.
     * @property {module:model/User}
     */
    User: User,
    /**
     * The EventApi service constructor.
     * @property {module:api/EventApi}
     */
    EventApi: EventApi,
    /**
     * The ItemApi service constructor.
     * @property {module:api/ItemApi}
     */
    ItemApi: ItemApi,
    /**
     * The RecommendationApi service constructor.
     * @property {module:api/RecommendationApi}
     */
    RecommendationApi: RecommendationApi,
    /**
     * The UserApi service constructor.
     * @property {module:api/UserApi}
     */
    UserApi: UserApi
  };

  return exports;
}));
