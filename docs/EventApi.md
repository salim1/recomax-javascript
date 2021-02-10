# RecomaxRestApi.EventApi

All URIs are relative to *https://convertein.com:8083/convertein/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createEventTestUsingPOST**](EventApi.md#createEventTestUsingPOST) | **POST** /{apiKey}/events | Get Event List
[**createEventUsingPUT**](EventApi.md#createEventUsingPUT) | **PUT** /{apiKey}/event/{id} | Create event


<a name="createEventTestUsingPOST"></a>
# **createEventTestUsingPOST**
> ResponseEntity createEventTestUsingPOST(apiKey, itemId, userId, name)

Get Event List

### Example
```javascript
var RecomaxRestApi = require('recomax_rest_api');

var apiInstance = new RecomaxRestApi.EventApi();

var apiKey = "apiKey_example"; // String | apiKey

var itemId = "itemId_example"; // String | itemId

var userId = "userId_example"; // String | userId

var name = "name_example"; // String | name


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createEventTestUsingPOST(apiKey, itemId, userId, name, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**| apiKey | 
 **itemId** | **String**| itemId | 
 **userId** | **String**| userId | 
 **name** | **String**| name | 

### Return type

[**ResponseEntity**](ResponseEntity.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createEventUsingPUT"></a>
# **createEventUsingPUT**
> ResponseEntity createEventUsingPUT(apiKey, id, opts)

Create event

### Example
```javascript
var RecomaxRestApi = require('recomax_rest_api');

var apiInstance = new RecomaxRestApi.EventApi();

var apiKey = "apiKey_example"; // String | apiKey

var id = "id_example"; // String | id

var opts = { 
  'itemId': "itemId_example", // String | itemId
  'userId': "userId_example", // String | userId
  'name': "VIEW" // String | name
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createEventUsingPUT(apiKey, id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**| apiKey | 
 **id** | **String**| id | 
 **itemId** | **String**| itemId | [optional] 
 **userId** | **String**| userId | [optional] 
 **name** | **String**| name | [optional] [default to VIEW]

### Return type

[**ResponseEntity**](ResponseEntity.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

