# Dynamix.AdConstraintApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getConstraints**](AdConstraintApi.md#getConstraints) | **PUT** /constraints | AdConstraintResource - GetVector


<a name="getConstraints"></a>
# **getConstraints**
> AdRequestVector getConstraints(authToken, namespace, publisherRid, body)

AdConstraintResource - GetVector

Produces the ad request vector with all the constraints provided by the engine and publisher.

### Example
```javascript
var Dynamix = require('dynamix');

var apiInstance = new Dynamix.AdConstraintApi();

var authToken = "authToken_example"; // String | 

var namespace = "namespace_example"; // String | 

var publisherRid = "publisherRid_example"; // String | 

var body = new Dynamix.Publisher(); // Publisher | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getConstraints(authToken, namespace, publisherRid, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authToken** | **String**|  | 
 **namespace** | **String**|  | 
 **publisherRid** | **String**|  | 
 **body** | [**Publisher**](Publisher.md)|  | 

### Return type

[**AdRequestVector**](AdRequestVector.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

