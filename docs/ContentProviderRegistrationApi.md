# Dynamix.ContentProviderRegistrationApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bulkGetAuthorizedRegistrations**](ContentProviderRegistrationApi.md#bulkGetAuthorizedRegistrations) | **GET** /api/source/bulk/auth | bulkGetAuthorizedRegistrations
[**bulkResolveContentProviderRegistrations**](ContentProviderRegistrationApi.md#bulkResolveContentProviderRegistrations) | **POST** /api/source/bulk/resolve | bulkResolveContentProviderRegistrations
[**createContentProviderRegistration**](ContentProviderRegistrationApi.md#createContentProviderRegistration) | **POST** /api/source | createContentProviderRegistration
[**deleteContentProviderRegistration**](ContentProviderRegistrationApi.md#deleteContentProviderRegistration) | **DELETE** /api/source | deleteContentProviderRegistration
[**getAllContentProviderRegistrations**](ContentProviderRegistrationApi.md#getAllContentProviderRegistrations) | **POST** /api/source/paged/auth | getAllContentProviderRegistrations
[**updateContentProviderRegistration**](ContentProviderRegistrationApi.md#updateContentProviderRegistration) | **PUT** /api/source | updateContentProviderRegistration


<a name="bulkGetAuthorizedRegistrations"></a>
# **bulkGetAuthorizedRegistrations**
> {&#39;String&#39;: ContentProviderRegistration} bulkGetAuthorizedRegistrations(authToken, namespace)

bulkGetAuthorizedRegistrations



### Example
```javascript
var Dynamix = require('dynamix');

var apiInstance = new Dynamix.ContentProviderRegistrationApi();

var authToken = "authToken_example"; // String | 

var namespace = "namespace_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.bulkGetAuthorizedRegistrations(authToken, namespace, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authToken** | **String**|  | 
 **namespace** | **String**|  | 

### Return type

[**{&#39;String&#39;: ContentProviderRegistration}**](ContentProviderRegistration.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bulkResolveContentProviderRegistrations"></a>
# **bulkResolveContentProviderRegistrations**
> [ContentProviderRegistration] bulkResolveContentProviderRegistrations(authToken, namespace, body)

bulkResolveContentProviderRegistrations

Resolves a bunch of rids into ContentProviderRegistration objects.

### Example
```javascript
var Dynamix = require('dynamix');

var apiInstance = new Dynamix.ContentProviderRegistrationApi();

var authToken = "authToken_example"; // String | 

var namespace = "namespace_example"; // String | 

var body = [new Dynamix.[String]()]; // [String] | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.bulkResolveContentProviderRegistrations(authToken, namespace, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authToken** | **String**|  | 
 **namespace** | **String**|  | 
 **body** | **[String]**|  | 

### Return type

[**[ContentProviderRegistration]**](ContentProviderRegistration.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createContentProviderRegistration"></a>
# **createContentProviderRegistration**
> &#39;String&#39; createContentProviderRegistration(authToken, namespace, body)

createContentProviderRegistration

Creates a registration for content creation.

### Example
```javascript
var Dynamix = require('dynamix');

var apiInstance = new Dynamix.ContentProviderRegistrationApi();

var authToken = "authToken_example"; // String | 

var namespace = "namespace_example"; // String | 

var body = new Dynamix.ContentProviderRegistration(); // ContentProviderRegistration | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createContentProviderRegistration(authToken, namespace, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authToken** | **String**|  | 
 **namespace** | **String**|  | 
 **body** | [**ContentProviderRegistration**](ContentProviderRegistration.md)|  | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteContentProviderRegistration"></a>
# **deleteContentProviderRegistration**
> deleteContentProviderRegistration(authToken, namespace, registrationRid)

deleteContentProviderRegistration

Delete a registration stored at the rid.

### Example
```javascript
var Dynamix = require('dynamix');

var apiInstance = new Dynamix.ContentProviderRegistrationApi();

var authToken = "authToken_example"; // String | 

var namespace = "namespace_example"; // String | 

var registrationRid = "registrationRid_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteContentProviderRegistration(authToken, namespace, registrationRid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authToken** | **String**|  | 
 **namespace** | **String**|  | 
 **registrationRid** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAllContentProviderRegistrations"></a>
# **getAllContentProviderRegistrations**
> PagedResponse getAllContentProviderRegistrations(authToken, namespace, body)

getAllContentProviderRegistrations

Grab all registrations that this token is authorized for.

### Example
```javascript
var Dynamix = require('dynamix');

var apiInstance = new Dynamix.ContentProviderRegistrationApi();

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
apiInstance.getAllContentProviderRegistrations(authToken, namespace, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authToken** | **String**|  | 
 **namespace** | **String**|  | 
 **body** | [**PagedRequest**](PagedRequest.md)|  | 

### Return type

[**PagedResponse**](PagedResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateContentProviderRegistration"></a>
# **updateContentProviderRegistration**
> updateContentProviderRegistration(authToken, namespace, registrationRid, body)

updateContentProviderRegistration

Update the registration at the rid.

### Example
```javascript
var Dynamix = require('dynamix');

var apiInstance = new Dynamix.ContentProviderRegistrationApi();

var authToken = "authToken_example"; // String | 

var namespace = "namespace_example"; // String | 

var registrationRid = "registrationRid_example"; // String | 

var body = new Dynamix.ContentProviderRegistration(); // ContentProviderRegistration | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateContentProviderRegistration(authToken, namespace, registrationRid, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authToken** | **String**|  | 
 **namespace** | **String**|  | 
 **registrationRid** | **String**|  | 
 **body** | [**ContentProviderRegistration**](ContentProviderRegistration.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

