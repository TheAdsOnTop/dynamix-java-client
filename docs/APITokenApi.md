# Dynamix.APITokenApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAccount**](APITokenApi.md#createAccount) | **POST** /api/token | Creates an Ads on Top Dynamix account


<a name="createAccount"></a>
# **createAccount**
> &#39;String&#39; createAccount(namespace, body)

Creates an Ads on Top Dynamix account

Each namespace is its own data sandbox.

### Example
```javascript
var Dynamix = require('dynamix');

var apiInstance = new Dynamix.APITokenApi();

var namespace = "namespace_example"; // String | 

var body = new Dynamix.AccountRegistrationRequest(); // AccountRegistrationRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createAccount(namespace, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **namespace** | **String**|  | 
 **body** | [**AccountRegistrationRequest**](AccountRegistrationRequest.md)|  | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

