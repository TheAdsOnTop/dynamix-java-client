# dynamix

Dynamix - JavaScript client for dynamix
Sign up for Dynamix & grab your token.

- API version: v0.1.0
- Package version: v0.1.0

For more information, please visit [http://theadsontop.com](http://theadsontop.com)

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install dynamix --save
```

or with yarn:

```shell
yarn add dynamix
```

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var Dynamix = require('dynamix');

var api = new Dynamix.APITokenApi()

var namespace = "namespace_example"; // {String} 

var body = new Dynamix.AccountRegistrationRequest(); // {AccountRegistrationRequest} 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.createAccount(namespace, body, callback);

```

## Documentation for API Endpoints

All URIs are relative to *http://localhost*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Dynamix.APITokenApi* | [**createAccount**](docs/APITokenApi.md#createAccount) | **POST** /api/token | Creates an Ads on Top Dynamix account
*Dynamix.AdConstraintApi* | [**getConstraints**](docs/AdConstraintApi.md#getConstraints) | **PUT** /constraints | AdConstraintResource - GetVector
*Dynamix.AdRankerApi* | [**attachProbabilities**](docs/AdRankerApi.md#attachProbabilities) | **POST** /ranker | AdConstraintResource - Apply Soft Constraints
*Dynamix.AdSourceAdapterApi* | [**pop**](docs/AdSourceAdapterApi.md#pop) | **PUT** /api/source/engine/pop | AdSourceAdapterResource - pop
*Dynamix.AdSourceAdapterApi* | [**produceAd**](docs/AdSourceAdapterApi.md#produceAd) | **POST** /api/source/engine/ad | AdSourceAdapterResource - produceAd
*Dynamix.CatalogApi* | [**createCatalogItem**](docs/CatalogApi.md#createCatalogItem) | **POST** /api/catalog/item | Create a catalog item
*Dynamix.CatalogApi* | [**deleteCatalogItem**](docs/CatalogApi.md#deleteCatalogItem) | **DELETE** /api/catalog/item | Delete a Catalog entry
*Dynamix.CatalogApi* | [**getCatalogItem**](docs/CatalogApi.md#getCatalogItem) | **GET** /api/catalog/item | Get a single Catalog Item
*Dynamix.CatalogApi* | [**getCatalogItems**](docs/CatalogApi.md#getCatalogItems) | **PUT** /api/catalog/item/bulk/get | Get Catalog Items Paged
*Dynamix.CatalogApi* | [**listCatalog**](docs/CatalogApi.md#listCatalog) | **PUT** /api/catalog/list/search | List the Catalog entries
*Dynamix.CatalogApi* | [**listCatalog_0**](docs/CatalogApi.md#listCatalog_0) | **PUT** /api/catalog/list/type | List the Catalog entries
*Dynamix.CatalogApi* | [**updateCatalogItem**](docs/CatalogApi.md#updateCatalogItem) | **PUT** /api/catalog/item | Update a Catalog entry
*Dynamix.ContentProviderRegistrationApi* | [**bulkGetAuthorizedRegistrations**](docs/ContentProviderRegistrationApi.md#bulkGetAuthorizedRegistrations) | **GET** /api/source/bulk/auth | bulkGetAuthorizedRegistrations
*Dynamix.ContentProviderRegistrationApi* | [**bulkResolveContentProviderRegistrations**](docs/ContentProviderRegistrationApi.md#bulkResolveContentProviderRegistrations) | **POST** /api/source/bulk/resolve | bulkResolveContentProviderRegistrations
*Dynamix.ContentProviderRegistrationApi* | [**createContentProviderRegistration**](docs/ContentProviderRegistrationApi.md#createContentProviderRegistration) | **POST** /api/source | createContentProviderRegistration
*Dynamix.ContentProviderRegistrationApi* | [**deleteContentProviderRegistration**](docs/ContentProviderRegistrationApi.md#deleteContentProviderRegistration) | **DELETE** /api/source | deleteContentProviderRegistration
*Dynamix.ContentProviderRegistrationApi* | [**getAllContentProviderRegistrations**](docs/ContentProviderRegistrationApi.md#getAllContentProviderRegistrations) | **POST** /api/source/paged/auth | getAllContentProviderRegistrations
*Dynamix.ContentProviderRegistrationApi* | [**updateContentProviderRegistration**](docs/ContentProviderRegistrationApi.md#updateContentProviderRegistration) | **PUT** /api/source | updateContentProviderRegistration
*Dynamix.DefaultSourceContentApi* | [**deleteContent**](docs/DefaultSourceContentApi.md#deleteContent) | **DELETE** /api/source-engine/default/register | DefaultSourceContentResource - deleteContent
*Dynamix.DefaultSourceContentApi* | [**getAllAuthorizedContentPaged**](docs/DefaultSourceContentApi.md#getAllAuthorizedContentPaged) | **POST** /api/source-engine/default/register/paged | 
*Dynamix.DefaultSourceContentApi* | [**getContentRequest**](docs/DefaultSourceContentApi.md#getContentRequest) | **GET** /api/source-engine/default/register | 
*Dynamix.DefaultSourceContentApi* | [**registerNewContent**](docs/DefaultSourceContentApi.md#registerNewContent) | **POST** /api/source-engine/default/register | DefaultSourceContentResource - registerNewContent
*Dynamix.DefaultSourceContentApi* | [**updateContent**](docs/DefaultSourceContentApi.md#updateContent) | **PUT** /api/source-engine/default/register | DefaultSourceContentResource - updateContent
*Dynamix.DefaultSourceContentApi* | [**uploadFile**](docs/DefaultSourceContentApi.md#uploadFile) | **POST** /api/source-engine/default/register/upload | DefaultSourceContentResource - uploadFile
*Dynamix.DeliveryApi* | [**getNextAd**](docs/DeliveryApi.md#getNextAd) | **GET** /api/delivery | Get next Ad
*Dynamix.DeliveryApi* | [**popAd**](docs/DeliveryApi.md#popAd) | **POST** /api/delivery | Trigger Proof of Play on Ad
*Dynamix.DynamixCreditApi* | [**addCredits**](docs/DynamixCreditApi.md#addCredits) | **POST** /api/credit/add | Add credits to a vault.
*Dynamix.DynamixCreditApi* | [**checkBalance**](docs/DynamixCreditApi.md#checkBalance) | **GET** /api/credit/balance | Checks the balance of a given vault.
*Dynamix.PublisherApi* | [**bulkResolvePublishers**](docs/PublisherApi.md#bulkResolvePublishers) | **POST** /api/publisher/bulk/resolve | PublisherResource - bulkResolvePublishers
*Dynamix.PublisherApi* | [**deletePublisher**](docs/PublisherApi.md#deletePublisher) | **DELETE** /api/publisher | PublisherResource - deletePublisher
*Dynamix.PublisherApi* | [**getAllAuthorizedPublishers**](docs/PublisherApi.md#getAllAuthorizedPublishers) | **POST** /api/publisher/authorized | PublisherResource - getAllAuthorizedPublishers
*Dynamix.PublisherApi* | [**registerPublisher**](docs/PublisherApi.md#registerPublisher) | **POST** /api/publisher | PublisherResource - registerPublisher
*Dynamix.PublisherApi* | [**updatePublisher**](docs/PublisherApi.md#updatePublisher) | **PUT** /api/publisher | PublisherResource - updatePublisher


## Documentation for Models

 - [Dynamix.AccountRegistrationRequest](docs/AccountRegistrationRequest.md)
 - [Dynamix.Ad](docs/Ad.md)
 - [Dynamix.AdMetadata](docs/AdMetadata.md)
 - [Dynamix.AdRequestVector](docs/AdRequestVector.md)
 - [Dynamix.AdRequestWeights](docs/AdRequestWeights.md)
 - [Dynamix.AdResolutionInfo](docs/AdResolutionInfo.md)
 - [Dynamix.AdRestrictions](docs/AdRestrictions.md)
 - [Dynamix.AdSourceRestriction](docs/AdSourceRestriction.md)
 - [Dynamix.AdWithProbability](docs/AdWithProbability.md)
 - [Dynamix.Address](docs/Address.md)
 - [Dynamix.AotCreditCharge](docs/AotCreditCharge.md)
 - [Dynamix.AotCreditGrant](docs/AotCreditGrant.md)
 - [Dynamix.AotCreditVault](docs/AotCreditVault.md)
 - [Dynamix.AotFile](docs/AotFile.md)
 - [Dynamix.AspectRatio](docs/AspectRatio.md)
 - [Dynamix.BearerToken](docs/BearerToken.md)
 - [Dynamix.CatalogItem](docs/CatalogItem.md)
 - [Dynamix.CatalogItemPagedRequest](docs/CatalogItemPagedRequest.md)
 - [Dynamix.ContentProviderRegistration](docs/ContentProviderRegistration.md)
 - [Dynamix.ContentRequest](docs/ContentRequest.md)
 - [Dynamix.Currency](docs/Currency.md)
 - [Dynamix.DateBoundedTimeRange](docs/DateBoundedTimeRange.md)
 - [Dynamix.DayBoundedTimeRange](docs/DayBoundedTimeRange.md)
 - [Dynamix.DemographicVector](docs/DemographicVector.md)
 - [Dynamix.FileMetadata](docs/FileMetadata.md)
 - [Dynamix.ImpressionInfo](docs/ImpressionInfo.md)
 - [Dynamix.ImpressionsValidationData](docs/ImpressionsValidationData.md)
 - [Dynamix.InputStream](docs/InputStream.md)
 - [Dynamix.KeyedAd](docs/KeyedAd.md)
 - [Dynamix.KeyedItem](docs/KeyedItem.md)
 - [Dynamix.KeyedItemObject](docs/KeyedItemObject.md)
 - [Dynamix.MonetaryRequirementInfo](docs/MonetaryRequirementInfo.md)
 - [Dynamix.ObjectNode](docs/ObjectNode.md)
 - [Dynamix.PagedRequest](docs/PagedRequest.md)
 - [Dynamix.PagedResponse](docs/PagedResponse.md)
 - [Dynamix.PagedResponseContentRequest](docs/PagedResponseContentRequest.md)
 - [Dynamix.PagedResponsePublisher](docs/PagedResponsePublisher.md)
 - [Dynamix.PagedSearchQuery](docs/PagedSearchQuery.md)
 - [Dynamix.PopRequest](docs/PopRequest.md)
 - [Dynamix.Publisher](docs/Publisher.md)
 - [Dynamix.PublisherHistoryInfo](docs/PublisherHistoryInfo.md)
 - [Dynamix.PublisherLocationInfo](docs/PublisherLocationInfo.md)
 - [Dynamix.ReleasedAd](docs/ReleasedAd.md)
 - [Dynamix.Resolution](docs/Resolution.md)
 - [Dynamix.ResourceIdentifier](docs/ResourceIdentifier.md)
 - [Dynamix.ScreenDimensions](docs/ScreenDimensions.md)
 - [Dynamix.SoftConstraintRequest](docs/SoftConstraintRequest.md)
 - [Dynamix.TimeInfo](docs/TimeInfo.md)
 - [Dynamix.TimeRange](docs/TimeRange.md)
 - [Dynamix.User](docs/User.md)


## Documentation for Authorization

Contact Ads on Top to get a Token
