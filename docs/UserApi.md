# RecomaxRestApi.UserApi

All URIs are relative to *https://convertein.com:8083/convertein/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addUserUsingPOST**](UserApi.md#addUserUsingPOST) | **POST** /{apiKey}/users | Add User
[**addUserUsingPUT**](UserApi.md#addUserUsingPUT) | **PUT** /{apiKey}/users/{id} | Add User
[**deleteUserUsingDELETE**](UserApi.md#deleteUserUsingDELETE) | **DELETE** /{apiKey}/users/{id} | Delete User
[**getSegmentsUsingGET**](UserApi.md#getSegmentsUsingGET) | **GET** /{apiKey}/uses/{id}/segments | Get User List
[**getUserUsingGET**](UserApi.md#getUserUsingGET) | **GET** /{apiKey}/users/{id} | Get User
[**listUsersUsingGET**](UserApi.md#listUsersUsingGET) | **GET** /{apiKey}/users | List Users
[**updateUserUsingPOST**](UserApi.md#updateUserUsingPOST) | **POST** /{apiKey}/users/{id} | User item


<a name="addUserUsingPOST"></a>
# **addUserUsingPOST**
> Response addUserUsingPOST(apiKey, attributeList)

Add User

### Example
```javascript
var RecomaxRestApi = require('recomax_rest_api');

var apiInstance = new RecomaxRestApi.UserApi();

var apiKey = "apiKey_example"; // String | apiKey

var attributeList = [new RecomaxRestApi.Attribute()]; // [Attribute] | attributeList


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addUserUsingPOST(apiKey, attributeList, callback);
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

<a name="addUserUsingPUT"></a>
# **addUserUsingPUT**
> User addUserUsingPUT(apiKey, id, attributeList)

Add User

### Example
```javascript
var RecomaxRestApi = require('recomax_rest_api');

var apiInstance = new RecomaxRestApi.UserApi();

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
apiInstance.addUserUsingPUT(apiKey, id, attributeList, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**| apiKey | 
 **id** | **String**| id | 
 **attributeList** | [**[Attribute]**](Attribute.md)| attributeList | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteUserUsingDELETE"></a>
# **deleteUserUsingDELETE**
> User deleteUserUsingDELETE(apiKey, id)

Delete User

### Example
```javascript
var RecomaxRestApi = require('recomax_rest_api');

var apiInstance = new RecomaxRestApi.UserApi();

var apiKey = "apiKey_example"; // String | apiKey

var id = "id_example"; // String | id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteUserUsingDELETE(apiKey, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**| apiKey | 
 **id** | **String**| id | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSegmentsUsingGET"></a>
# **getSegmentsUsingGET**
> [&#39;String&#39;] getSegmentsUsingGET(apiKey, id)

Get User List

### Example
```javascript
var RecomaxRestApi = require('recomax_rest_api');

var apiInstance = new RecomaxRestApi.UserApi();

var apiKey = "apiKey_example"; // String | apiKey

var id = "id_example"; // String | id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSegmentsUsingGET(apiKey, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**| apiKey | 
 **id** | **String**| id | 

### Return type

**[&#39;String&#39;]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getUserUsingGET"></a>
# **getUserUsingGET**
> User getUserUsingGET(apiKey, id)

Get User

### Example
```javascript
var RecomaxRestApi = require('recomax_rest_api');

var apiInstance = new RecomaxRestApi.UserApi();

var apiKey = "apiKey_example"; // String | apiKey

var id = "id_example"; // String | id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUserUsingGET(apiKey, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**| apiKey | 
 **id** | **String**| id | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listUsersUsingGET"></a>
# **listUsersUsingGET**
> [User] listUsersUsingGET(apiKey, opts)

List Users

### Example
```javascript
var RecomaxRestApi = require('recomax_rest_api');

var apiInstance = new RecomaxRestApi.UserApi();

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
apiInstance.listUsersUsingGET(apiKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**| apiKey | 
 **offset** | **Integer**| offsel of the items list | [optional] 
 **limit** | **Integer**| limit of the items list | [optional] 

### Return type

[**[User]**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateUserUsingPOST"></a>
# **updateUserUsingPOST**
> Response updateUserUsingPOST(apiKey, id, attributeList)

User item

### Example
```javascript
var RecomaxRestApi = require('recomax_rest_api');

var apiInstance = new RecomaxRestApi.UserApi();

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
apiInstance.updateUserUsingPOST(apiKey, id, attributeList, callback);
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

