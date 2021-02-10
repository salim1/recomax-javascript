# RecomaxRestApi.RecommendationApi

All URIs are relative to *https://convertein.com:8083/convertein/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**queryItemUsingGET**](RecommendationApi.md#queryItemUsingGET) | **GET** /{apiKey}/recommendations/items/{id} | Get Recommendations for items
[**recommendForUserUsingGET**](RecommendationApi.md#recommendForUserUsingGET) | **GET** /{apiKey}/recommendations/users/{id} | Get Recommendations for user


<a name="queryItemUsingGET"></a>
# **queryItemUsingGET**
> RecomResult queryItemUsingGET(apiKey, id, opts)

Get Recommendations for items

### Example
```javascript
var RecomaxRestApi = require('recomax_rest_api');

var apiInstance = new RecomaxRestApi.RecommendationApi();

var apiKey = "apiKey_example"; // String | apiKey

var id = "id_example"; // String | id

var opts = { 
  'start': 0, // Integer | start
  'pageSize': 10, // Integer | pageSize
  'sortField': "sortField_example", // String | sortField
  'sortType': "asc", // String | sortType
  'token': "token_example", // String | token
  'did': "did_example", // String | did
  'user': "user_example", // String | user
  'fq': ["fq_example"], // [String] | fq
  'event': "ON_QUERY", // String | event
  'sb': "false", // String | sb
  'callback': "callback_example", // String | callback
  'uidCookie': "uidCookie_example" // String | uidCookie
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.queryItemUsingGET(apiKey, id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**| apiKey | 
 **id** | **String**| id | 
 **start** | **Integer**| start | [optional] [default to 0]
 **pageSize** | **Integer**| pageSize | [optional] [default to 10]
 **sortField** | **String**| sortField | [optional] 
 **sortType** | **String**| sortType | [optional] [default to asc]
 **token** | **String**| token | [optional] 
 **did** | **String**| did | [optional] 
 **user** | **String**| user | [optional] 
 **fq** | [**[String]**](String.md)| fq | [optional] 
 **event** | **String**| event | [optional] [default to ON_QUERY]
 **sb** | **String**| sb | [optional] [default to false]
 **callback** | **String**| callback | [optional] 
 **uidCookie** | **String**| uidCookie | [optional] 

### Return type

[**RecomResult**](RecomResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="recommendForUserUsingGET"></a>
# **recommendForUserUsingGET**
> RecomResult recommendForUserUsingGET(apiKey, id)

Get Recommendations for user

### Example
```javascript
var RecomaxRestApi = require('recomax_rest_api');

var apiInstance = new RecomaxRestApi.RecommendationApi();

var apiKey = "apiKey_example"; // String | apiKey

var id = "id_example"; // String | id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.recommendForUserUsingGET(apiKey, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**| apiKey | 
 **id** | **String**| id | 

### Return type

[**RecomResult**](RecomResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

