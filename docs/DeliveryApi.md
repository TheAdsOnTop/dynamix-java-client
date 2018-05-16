# Dynamix.DeliveryApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getNextAd**](DeliveryApi.md#getNextAd) | **GET** /api/delivery | Get next Ad
[**popAd**](DeliveryApi.md#popAd) | **POST** /api/delivery | Trigger Proof of Play on Ad


<a name="getNextAd"></a>
# **getNextAd**
> ReleasedAd getNextAd(authToken, namespace, publisherRid)

Get next Ad



### Example
```javascript
var Dynamix = require('dynamix');

var apiInstance = new Dynamix.DeliveryApi();

var authToken = "authToken_example"; // String | 

var namespace = "namespace_example"; // String | 

var publisherRid = "publisherRid_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNextAd(authToken, namespace, publisherRid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authToken** | **String**|  | 
 **namespace** | **String**|  | 
 **publisherRid** | **String**|  | 

### Return type

[**ReleasedAd**](ReleasedAd.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="popAd"></a>
# **popAd**
> popAd(authToken, namespace, publisherRid, adRid, body)

Trigger Proof of Play on Ad



### Example
```javascript
var Dynamix = require('dynamix');

var apiInstance = new Dynamix.DeliveryApi();

var authToken = "authToken_example"; // String | 

var namespace = "namespace_example"; // String | 

var publisherRid = "publisherRid_example"; // String | 

var adRid = "adRid_example"; // String | 

var body = new Dynamix.ImpressionsValidationData(); // ImpressionsValidationData | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.popAd(authToken, namespace, publisherRid, adRid, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authToken** | **String**|  | 
 **namespace** | **String**|  | 
 **publisherRid** | **String**|  | 
 **adRid** | **String**|  | 
 **body** | [**ImpressionsValidationData**](ImpressionsValidationData.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

