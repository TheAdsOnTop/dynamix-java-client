# Dynamix.PublisherApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bulkResolvePublishers**](PublisherApi.md#bulkResolvePublishers) | **POST** /api/publisher/bulk/resolve | PublisherResource - bulkResolvePublishers
[**deletePublisher**](PublisherApi.md#deletePublisher) | **DELETE** /api/publisher | PublisherResource - deletePublisher
[**getAllAuthorizedPublishers**](PublisherApi.md#getAllAuthorizedPublishers) | **POST** /api/publisher/authorized | PublisherResource - getAllAuthorizedPublishers
[**registerPublisher**](PublisherApi.md#registerPublisher) | **POST** /api/publisher | PublisherResource - registerPublisher
[**updatePublisher**](PublisherApi.md#updatePublisher) | **PUT** /api/publisher | PublisherResource - updatePublisher


<a name="bulkResolvePublishers"></a>
# **bulkResolvePublishers**
> [Publisher] bulkResolvePublishers(authToken, namespace, opts)

PublisherResource - bulkResolvePublishers

Grab a set of publishers by RID.

### Example
```javascript
var Dynamix = require('dynamix');

var apiInstance = new Dynamix.PublisherApi();

var authToken = "authToken_example"; // String | 

var namespace = "namespace_example"; // String | 

var opts = { 
  'body': [new Dynamix.[String]()] // [String] | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.bulkResolvePublishers(authToken, namespace, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authToken** | **String**|  | 
 **namespace** | **String**|  | 
 **body** | **[String]**|  | [optional] 

### Return type

[**[Publisher]**](Publisher.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deletePublisher"></a>
# **deletePublisher**
> deletePublisher(authToken, namespace, server)

PublisherResource - deletePublisher

Deletes a publisher from the database.

### Example
```javascript
var Dynamix = require('dynamix');

var apiInstance = new Dynamix.PublisherApi();

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
apiInstance.deletePublisher(authToken, namespace, server, callback);
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

<a name="getAllAuthorizedPublishers"></a>
# **getAllAuthorizedPublishers**
> PagedResponsePublisher getAllAuthorizedPublishers(authToken, namespace, body)

PublisherResource - getAllAuthorizedPublishers

Grab all the publishers that the token is authorized for. Requires paging.

### Example
```javascript
var Dynamix = require('dynamix');

var apiInstance = new Dynamix.PublisherApi();

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
apiInstance.getAllAuthorizedPublishers(authToken, namespace, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authToken** | **String**|  | 
 **namespace** | **String**|  | 
 **body** | [**PagedRequest**](PagedRequest.md)|  | 

### Return type

[**PagedResponsePublisher**](PagedResponsePublisher.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="registerPublisher"></a>
# **registerPublisher**
> &#39;String&#39; registerPublisher(authToken, namespace, body)

PublisherResource - registerPublisher

Registers a content consumer.

### Example
```javascript
var Dynamix = require('dynamix');

var apiInstance = new Dynamix.PublisherApi();

var authToken = "authToken_example"; // String | 

var namespace = "namespace_example"; // String | 

var body = new Dynamix.Publisher(); // Publisher | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.registerPublisher(authToken, namespace, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authToken** | **String**|  | 
 **namespace** | **String**|  | 
 **body** | [**Publisher**](Publisher.md)|  | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updatePublisher"></a>
# **updatePublisher**
> updatePublisher(authToken, namespace, server, body)

PublisherResource - updatePublisher

Updates the publisher with the provided value.

### Example
```javascript
var Dynamix = require('dynamix');

var apiInstance = new Dynamix.PublisherApi();

var authToken = "authToken_example"; // String | 

var namespace = "namespace_example"; // String | 

var server = "server_example"; // String | 

var body = new Dynamix.Publisher(); // Publisher | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updatePublisher(authToken, namespace, server, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authToken** | **String**|  | 
 **namespace** | **String**|  | 
 **server** | **String**|  | 
 **body** | [**Publisher**](Publisher.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

