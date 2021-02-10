# RecomaxRestApi.ItemApi

All URIs are relative to *https://convertein.com:8083/convertein/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addItemAtUsingPUT**](ItemApi.md#addItemAtUsingPUT) | **PUT** /{apiKey}/items/{id} | Add item
[**addItemUsingPOST**](ItemApi.md#addItemUsingPOST) | **POST** /{apiKey}/items | Add item
[**deleteItemUsingDELETE**](ItemApi.md#deleteItemUsingDELETE) | **DELETE** /{apiKey}/items/{id} | Delete item
[**gettemUsingGET**](ItemApi.md#gettemUsingGET) | **GET** /{apiKey}/items/{id} | Get item
[**listtemUsingGET**](ItemApi.md#listtemUsingGET) | **GET** /{apiKey}/items | List items
[**updateItemUsingPOST**](ItemApi.md#updateItemUsingPOST) | **POST** /{apiKey}/items/{id} | Update item


<a name="addItemAtUsingPUT"></a>
# **addItemAtUsingPUT**
> Item addItemAtUsingPUT(apiKey, id, attributeList)

Add item

### Example
```javascript
var RecomaxRestApi = require('recomax_rest_api');

var apiInstance = new RecomaxRestApi.ItemApi();

var apiKey = "apiKey_example"; // String | apiKey

var id = "id_example"; // String | id

var attributeList = [new RecomaxRestApi.Attribute()]; // [Attribute] | attributeList


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addItemAtUsingPUT(apiKey, id, attributeList, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**| apiKey | 
 **id** | **String**| id | 
 **attributeList** | [**[Attribute]**](Attribute.md)| attributeList | 

### Return type

[**Item**](Item.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addItemUsingPOST"></a>
# **addItemUsingPOST**
> Response addItemUsingPOST(apiKey, attributeList)

Add item

### Example
```javascript
var RecomaxRestApi = require('recomax_rest_api');

var apiInstance = new RecomaxRestApi.ItemApi();

var apiKey = "apiKey_example"; // String | apiKey

var attributeList = [new RecomaxRestApi.Attribute()]; // [Attribute] | attributeList


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addItemUsingPOST(apiKey, attributeList, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**| apiKey | 
 **attributeList** | [**[Attribute]**](Attribute.md)| attributeList | 

### Return type

[**Response**](Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteItemUsingDELETE"></a>
# **deleteItemUsingDELETE**
> Item deleteItemUsingDELETE(apiKey, id)

Delete item

### Example
```javascript
var RecomaxRestApi = require('recomax_rest_api');

var apiInstance = new RecomaxRestApi.ItemApi();

var apiKey = "apiKey_example"; // String | apiKey

var id = "id_example"; // String | id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteItemUsingDELETE(apiKey, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**| apiKey | 
 **id** | **String**| id | 

### Return type

[**Item**](Item.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="gettemUsingGET"></a>
# **gettemUsingGET**
> Item gettemUsingGET(apiKey, id)

Get item

### Example
```javascript
var RecomaxRestApi = require('recomax_rest_api');

var apiInstance = new RecomaxRestApi.ItemApi();

var apiKey = "apiKey_example"; // String | apiKey

var id = "id_example"; // String | id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.gettemUsingGET(apiKey, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**| apiKey | 
 **id** | **String**| id | 

### Return type

[**Item**](Item.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listtemUsingGET"></a>
# **listtemUsingGET**
> [Item] listtemUsingGET(apiKey, opts)

List items

### Example
```javascript
var RecomaxRestApi = require('recomax_rest_api');

var apiInstance = new RecomaxRestApi.ItemApi();

var apiKey = "apiKey_example"; // String | apiKey

var opts = { 
  'offset': 56, // Integer | offsel of the items list
  'limit': 56 // Integer | limit of the items list
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listtemUsingGET(apiKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**| apiKey | 
 **offset** | **Integer**| offsel of the items list | [optional] 
 **limit** | **Integer**| limit of the items list | [optional] 

### Return type

[**[Item]**](Item.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateItemUsingPOST"></a>
# **updateItemUsingPOST**
> Response updateItemUsingPOST(apiKey, id, attributeList)

Update item

### Example
```javascript
var RecomaxRestApi = require('recomax_rest_api');

var apiInstance = new RecomaxRestApi.ItemApi();

var apiKey = "apiKey_example"; // String | apiKey

var id = "id_example"; // String | id

var attributeList = [new RecomaxRestApi.Attribute()]; // [Attribute] | attributeList


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateItemUsingPOST(apiKey, id, attributeList, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**| apiKey | 
 **id** | **String**| id | 
 **attributeList** | [**[Attribute]**](Attribute.md)| attributeList | 

### Return type

[**Response**](Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

