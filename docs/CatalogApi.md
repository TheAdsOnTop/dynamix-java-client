# Dynamix.CatalogApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCatalogItem**](CatalogApi.md#createCatalogItem) | **POST** /api/catalog/item | Create a catalog item
[**deleteCatalogItem**](CatalogApi.md#deleteCatalogItem) | **DELETE** /api/catalog/item | Delete a Catalog entry
[**getCatalogItem**](CatalogApi.md#getCatalogItem) | **GET** /api/catalog/item | Get a single Catalog Item
[**getCatalogItems**](CatalogApi.md#getCatalogItems) | **PUT** /api/catalog/item/bulk/get | Get Catalog Items Paged
[**listCatalog**](CatalogApi.md#listCatalog) | **PUT** /api/catalog/list/search | List the Catalog entries
[**listCatalog_0**](CatalogApi.md#listCatalog_0) | **PUT** /api/catalog/list/type | List the Catalog entries
[**updateCatalogItem**](CatalogApi.md#updateCatalogItem) | **PUT** /api/catalog/item | Update a Catalog entry


<a name="createCatalogItem"></a>
# **createCatalogItem**
> CatalogItem createCatalogItem(authToken, body)

Create a catalog item



### Example
```javascript
var Dynamix = require('dynamix');

var apiInstance = new Dynamix.CatalogApi();

var authToken = "authToken_example"; // String | 

var body = new Dynamix.CatalogItem(); // CatalogItem | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createCatalogItem(authToken, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authToken** | **String**|  | 
 **body** | [**CatalogItem**](CatalogItem.md)|  | 

### Return type

[**CatalogItem**](CatalogItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteCatalogItem"></a>
# **deleteCatalogItem**
> deleteCatalogItem(authToken, itemRid)

Delete a Catalog entry



### Example
```javascript
var Dynamix = require('dynamix');

var apiInstance = new Dynamix.CatalogApi();

var authToken = "authToken_example"; // String | 

var itemRid = "itemRid_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteCatalogItem(authToken, itemRid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authToken** | **String**|  | 
 **itemRid** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCatalogItem"></a>
# **getCatalogItem**
> CatalogItem getCatalogItem(authToken, itemRid)

Get a single Catalog Item



### Example
```javascript
var Dynamix = require('dynamix');

var apiInstance = new Dynamix.CatalogApi();

var authToken = "authToken_example"; // String | 

var itemRid = "itemRid_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCatalogItem(authToken, itemRid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authToken** | **String**|  | 
 **itemRid** | **String**|  | 

### Return type

[**CatalogItem**](CatalogItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCatalogItems"></a>
# **getCatalogItems**
> [CatalogItem] getCatalogItems(authToken, body)

Get Catalog Items Paged



### Example
```javascript
var Dynamix = require('dynamix');

var apiInstance = new Dynamix.CatalogApi();

var authToken = "authToken_example"; // String | 

var body = new Dynamix.CatalogItemPagedRequest(); // CatalogItemPagedRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCatalogItems(authToken, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authToken** | **String**|  | 
 **body** | [**CatalogItemPagedRequest**](CatalogItemPagedRequest.md)|  | 

### Return type

[**[CatalogItem]**](CatalogItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listCatalog"></a>
# **listCatalog**
> PagedResponse listCatalog(authToken, body)

List the Catalog entries



### Example
```javascript
var Dynamix = require('dynamix');

var apiInstance = new Dynamix.CatalogApi();

var authToken = "authToken_example"; // String | 

var body = new Dynamix.PagedSearchQuery(); // PagedSearchQuery | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listCatalog(authToken, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authToken** | **String**|  | 
 **body** | [**PagedSearchQuery**](PagedSearchQuery.md)|  | 

### Return type

[**PagedResponse**](PagedResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listCatalog_0"></a>
# **listCatalog_0**
> PagedResponse listCatalog_0(authToken, type, body)

List the Catalog entries



### Example
```javascript
var Dynamix = require('dynamix');

var apiInstance = new Dynamix.CatalogApi();

var authToken = "authToken_example"; // String | 

var type = "type_example"; // String | 

var body = new Dynamix.PagedRequest(); // PagedRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listCatalog_0(authToken, type, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authToken** | **String**|  | 
 **type** | **String**|  | 
 **body** | [**PagedRequest**](PagedRequest.md)|  | 

### Return type

[**PagedResponse**](PagedResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateCatalogItem"></a>
# **updateCatalogItem**
> updateCatalogItem(authToken, itemRid, body)

Update a Catalog entry



### Example
```javascript
var Dynamix = require('dynamix');

var apiInstance = new Dynamix.CatalogApi();

var authToken = "authToken_example"; // String | 

var itemRid = "itemRid_example"; // String | 

var body = new Dynamix.CatalogItem(); // CatalogItem | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateCatalogItem(authToken, itemRid, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authToken** | **String**|  | 
 **itemRid** | **String**|  | 
 **body** | [**CatalogItem**](CatalogItem.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

