# Dynamix.AdRankerApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**attachProbabilities**](AdRankerApi.md#attachProbabilities) | **POST** /ranker | AdConstraintResource - Apply Soft Constraints


<a name="attachProbabilities"></a>
# **attachProbabilities**
> [AdWithProbability] attachProbabilities(authToken, namespace, body)

AdConstraintResource - Apply Soft Constraints

Applies the soft constraints based on the vector and the Publisher settings.

### Example
```javascript
var Dynamix = require('dynamix');

var apiInstance = new Dynamix.AdRankerApi();

var authToken = "authToken_example"; // String | 

var namespace = "namespace_example"; // String | 

var body = new Dynamix.SoftConstraintRequest(); // SoftConstraintRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.attachProbabilities(authToken, namespace, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authToken** | **String**|  | 
 **namespace** | **String**|  | 
 **body** | [**SoftConstraintRequest**](SoftConstraintRequest.md)|  | 

### Return type

[**[AdWithProbability]**](AdWithProbability.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

