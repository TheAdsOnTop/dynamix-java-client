# Dynamix.AdSourceAdapterApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**pop**](AdSourceAdapterApi.md#pop) | **PUT** /api/source/engine/pop | AdSourceAdapterResource - pop
[**produceAd**](AdSourceAdapterApi.md#produceAd) | **POST** /api/source/engine/ad | AdSourceAdapterResource - produceAd


<a name="pop"></a>
# **pop**
> pop(authToken, namespace, publisherRid, body)

AdSourceAdapterResource - pop

POP to annotate the advertisement that is delivered.

### Example
```javascript
var Dynamix = require('dynamix');

var apiInstance = new Dynamix.AdSourceAdapterApi();

var authToken = "authToken_example"; // String | 

var namespace = "namespace_example"; // String | 

var publisherRid = "publisherRid_example"; // String | 

var body = new Dynamix.PopRequest(); // PopRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.pop(authToken, namespace, publisherRid, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authToken** | **String**|  | 
 **namespace** | **String**|  | 
 **publisherRid** | **String**|  | 
 **body** | [**PopRequest**](PopRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="produceAd"></a>
# **produceAd**
> Ad produceAd(authToken, namespace, adSourceRid, body)

AdSourceAdapterResource - produceAd

Produces a ad if available against the given vector.

### Example
```javascript
var Dynamix = require('dynamix');

var apiInstance = new Dynamix.AdSourceAdapterApi();

var authToken = "authToken_example"; // String | 

var namespace = "namespace_example"; // String | 

var adSourceRid = "adSourceRid_example"; // String | 

var body = new Dynamix.AdRequestVector(); // AdRequestVector | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.produceAd(authToken, namespace, adSourceRid, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authToken** | **String**|  | 
 **namespace** | **String**|  | 
 **adSourceRid** | **String**|  | 
 **body** | [**AdRequestVector**](AdRequestVector.md)|  | 

### Return type

[**Ad**](Ad.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

