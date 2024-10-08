---
title: UltraSuite API | TypeScript SDK
---

# UltraSuite API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**assetsCreateUltraSuiteAsset**](UltraSuiteApi#assetscreateultrasuiteasset) | **POST** /ultra_suite/assets/create | /ultra_suite/assets/create [POST]


## **assetsCreateUltraSuiteAsset** {#assetscreateultrasuiteasset}
> Asset assetsCreateUltraSuiteAsset()

This Endpoint will create an Asset that is sent from UltraSuite.

### Example {#assetscreateultrasuiteasset-example}

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'

const configuration = Pieces.Configuration()
const apiInstance = new Pieces.UltraSuiteApi(configuration)

const body: Pieces.AssetsCreateUltraSuiteAssetRequest = {
// SeededUltraSuiteAsset (optional)
seededUltraSuiteAsset: ,
};

apiInstance.assetsCreateUltraSuiteAsset(body).then((data: Asset) => {
console.log('API called successfully. Returned data: ' + data)
}).catch((error: unknown) => console.error(error))
```

### Parameters {#assetscreateultrasuiteasset-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seededUltraSuiteAsset** | **SeededUltraSuiteAsset**|  |


### Return type {#assetscreateultrasuiteasset-return-type}

[**Asset**](../models/Asset)

### HTTP request headers {#assetscreateultrasuiteasset-http-request-headers}

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details {#assetscreateultrasuiteasset-http-response-details}
| Status code | Description | Response headers
|-------------|-------------|------------------
**200** | OK |  -  |


