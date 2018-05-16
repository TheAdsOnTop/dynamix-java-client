# Dynamix.DefaultSourceContentApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteContent**](DefaultSourceContentApi.md#deleteContent) | **DELETE** /api/source-engine/default/register | DefaultSourceContentResource - deleteContent
[**getAllAuthorizedContentPaged**](DefaultSourceContentApi.md#getAllAuthorizedContentPaged) | **POST** /api/source-engine/default/register/paged | 
[**getContentRequest**](DefaultSourceContentApi.md#getContentRequest) | **GET** /api/source-engine/default/register | 
[**registerNewContent**](DefaultSourceContentApi.md#registerNewContent) | **POST** /api/source-engine/default/register | DefaultSourceContentResource - registerNewContent
[**updateContent**](DefaultSourceContentApi.md#updateContent) | **PUT** /api/source-engine/default/register | DefaultSourceContentResource - updateContent
[**uploadFile**](DefaultSourceContentApi.md#uploadFile) | **POST** /api/source-engine/default/register/upload | DefaultSourceContentResource - uploadFile


<a name="deleteContent"></a>
# **deleteContent**
> deleteContent(authToken, namespace, server)

DefaultSourceContentResource - deleteContent

Delete a content delivery entry.

### Example
```javascript
var Dynamix = require('dynamix');

var apiInstance = new Dynamix.DefaultSourceContentApi();

var authToken = "authToken_example"; // String | 

var namespace = "namespace_example"; // String | 

var server = "server_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteContent(authToken, namespace, server, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authToken** | **String**|  | 
 **namespace** | **String**|  | 
 **server** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAllAuthorizedContentPaged"></a>
# **getAllAuthorizedContentPaged**
> PagedResponseContentRequest getAllAuthorizedContentPaged(authToken, namespace, body)



### Example
```javascript
var Dynamix = require('dynamix');

var apiInstance = new Dynamix.DefaultSourceContentApi();

var authToken = "authToken_example"; // String | 

var namespace = "namespace_example"; // String | 

var body = new Dynamix.PagedRequest(); // PagedRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllAuthorizedContentPaged(authToken, namespace, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authToken** | **String**|  | 
 **namespace** | **String**|  | 
 **body** | [**PagedRequest**](PagedRequest.md)|  | 

### Return type

[**PagedResponseContentRequest**](PagedResponseContentRequest.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getContentRequest"></a>
# **getContentRequest**
> ContentRequest getContentRequest(authToken, namespace, server)



### Example
```javascript
var Dynamix = require('dynamix');

var apiInstance = new Dynamix.DefaultSourceContentApi();

var authToken = "authToken_example"; // String | 

var namespace = "namespace_example"; // String | 

var server = "server_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getContentRequest(authToken, namespace, server, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authToken** | **String**|  | 
 **namespace** | **String**|  | 
 **server** | **String**|  | 

### Return type

[**ContentRequest**](ContentRequest.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="registerNewContent"></a>
# **registerNewContent**
> &#39;String&#39; registerNewContent(authToken, namespace, body)

DefaultSourceContentResource - registerNewContent

Set a content delivery entry for a set of content receivers.

### Example
```javascript
var Dynamix = require('dynamix');

var apiInstance = new Dynamix.DefaultSourceContentApi();

var authToken = "authToken_example"; // String | 

var namespace = "namespace_example"; // String | 

var body = new Dynamix.ContentRequest(); // ContentRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.registerNewContent(authToken, namespace, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authToken** | **String**|  | 
 **namespace** | **String**|  | 
 **body** | [**ContentRequest**](ContentRequest.md)|  | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateContent"></a>
# **updateContent**
> updateContent(authToken, namespace, server, body)

DefaultSourceContentResource - updateContent

Update a content delivery entry for a set of content receivers.

### Example
```javascript
var Dynamix = require('dynamix');

var apiInstance = new Dynamix.DefaultSourceContentApi();

var authToken = "authToken_example"; // String | 

var namespace = "namespace_example"; // String | 

var server = "server_example"; // String | 

var body = new Dynamix.ContentRequest(); // ContentRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateContent(authToken, namespace, server, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authToken** | **String**|  | 
 **namespace** | **String**|  | 
 **server** | **String**|  | 
 **body** | [**ContentRequest**](ContentRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="uploadFile"></a>
# **uploadFile**
> &#39;String&#39; uploadFile(authToken, namespace, metadata, body)

DefaultSourceContentResource - uploadFile

Uploads a file to the Ads on Top Content Network.

### Example
```javascript
var Dynamix = require('dynamix');

var apiInstance = new Dynamix.DefaultSourceContentApi();

var authToken = "authToken_example"; // String | 

var namespace = "namespace_example"; // String | 

var metadata = "metadata_example"; // String | 

var body = new Dynamix.InputStream(); // InputStream | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.uploadFile(authToken, namespace, metadata, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authToken** | **String**|  | 
 **namespace** | **String**|  | 
 **metadata** | **String**|  | 
 **body** | [**InputStream**](InputStream.md)|  | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json

