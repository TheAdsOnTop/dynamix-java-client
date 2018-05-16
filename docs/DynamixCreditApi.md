# Dynamix.DynamixCreditApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addCredits**](DynamixCreditApi.md#addCredits) | **POST** /api/credit/add | Add credits to a vault.
[**checkBalance**](DynamixCreditApi.md#checkBalance) | **GET** /api/credit/balance | Checks the balance of a given vault.


<a name="addCredits"></a>
# **addCredits**
> addCredits(authToken, namespace, server, body)

Add credits to a vault.

Any rid can be used as the vault key. Each Rid has its own vault.

### Example
```javascript
var Dynamix = require('dynamix');

var apiInstance = new Dynamix.DynamixCreditApi();

var authToken = "authToken_example"; // String | 

var namespace = "namespace_example"; // String | 

var server = "server_example"; // String | 

var body = new Dynamix.AotCreditGrant(); // AotCreditGrant | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addCredits(authToken, namespace, server, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authToken** | **String**|  | 
 **namespace** | **String**|  | 
 **server** | **String**|  | 
 **body** | [**AotCreditGrant**](AotCreditGrant.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="checkBalance"></a>
# **checkBalance**
> AotCreditVault checkBalance(authToken, namespace, server)

Checks the balance of a given vault.

Any rid can be used as the vault key. Each Rid has its own vault.

### Example
```javascript
var Dynamix = require('dynamix');

var apiInstance = new Dynamix.DynamixCreditApi();

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
apiInstance.checkBalance(authToken, namespace, server, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authToken** | **String**|  | 
 **namespace** | **String**|  | 
 **server** | **String**|  | 

### Return type

[**AotCreditVault**](AotCreditVault.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

