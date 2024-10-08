---
title: Websites API | Python SDK
---

# Websites API

All URIs are relative to `http://localhost:1000`

Method | HTTP request | Description
------------- | ------------- | -------------
[**websites_create_new_website**](WebsitesApi#websites_create_new_website) | **POST** /websites/create | /websites/create [POST]
[**websites_delete_specific_website**](WebsitesApi#websites_delete_specific_website) | **POST** /websites/\{website\}/delete | /websites/\{website\}/delete [POST]
[**websites_exists**](WebsitesApi#websites_exists) | **POST** /websites/exists | /websites/exists [POST]
[**websites_snapshot**](WebsitesApi#websites_snapshot) | **GET** /websites | /websites [GET]


## **websites_create_new_website** {#websites_create_new_website}
> Website websites_create_new_website(transferables=transferables, seeded_website=seeded_website)

/websites/create [POST]

This will create a website and attach it to a specific asset.

### Example {#websites_create_new_website-example}


```python
import pieces_os_client
from pieces_os_client.models.seeded_website import SeededWebsite
from pieces_os_client.models.website import Website
from pieces_os_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:1000
# See configuration.py for a list of all supported configuration parameters.
configuration = pieces_os_client.Configuration(
    host="http://localhost:1000"
)


# Enter a context with an instance of the API client
with pieces_os_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pieces_os_client.WebsitesApi(api_client)
    transferables = True # bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    seeded_website = pieces_os_client.SeededWebsite() # SeededWebsite |  (optional)

    try:
        # /websites/create [POST]
        api_response = api_instance.websites_create_new_website(transferables=transferables, seeded_website=seeded_website)
        print("The response of WebsitesApi->websites_create_new_website:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebsitesApi->websites_create_new_website: %s\n" % e)
```



### Parameters {#websites_create_new_website-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 
 **seeded_website** | [**SeededWebsite**](../models/SeededWebsite)|  | [optional] 

### Return type {#websites_create_new_website-return-type}

[**Website**](../models/Website)

### Authorization {#websites_create_new_website-authorization}

No authorization required

### HTTP request headers {#websites_create_new_website-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain


### HTTP response details {#websites_create_new_website-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **websites_delete_specific_website** {#websites_delete_specific_website}
> websites_delete_specific_website(website)

/websites/\{website\}/delete [POST]

This will delete a specific website!

### Example {#websites_delete_specific_website-example}


```python
import pieces_os_client
from pieces_os_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:1000
# See configuration.py for a list of all supported configuration parameters.
configuration = pieces_os_client.Configuration(
    host="http://localhost:1000"
)


# Enter a context with an instance of the API client
with pieces_os_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pieces_os_client.WebsitesApi(api_client)
    website = 'website_example' # str | website id

    try:
        # /websites/\{website\}/delete [POST]
        api_instance.websites_delete_specific_website(website)
    except Exception as e:
        print("Exception when calling WebsitesApi->websites_delete_specific_website: %s\n" % e)
```



### Parameters {#websites_delete_specific_website-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **website** | **str**| website id | 

### Return type {#websites_delete_specific_website-return-type}

void (empty response body)

### Authorization {#websites_delete_specific_website-authorization}

No authorization required

### HTTP request headers {#websites_delete_specific_website-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: text/plain


### HTTP response details {#websites_delete_specific_website-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |

## **websites_exists** {#websites_exists}
> ExistingMetadata websites_exists(existent_metadata=existent_metadata)

/websites/exists [POST]

This will check all of the websites in our database to see if this specific provided website actually exists, if not we will just return a null website in the output.

### Example {#websites_exists-example}


```python
import pieces_os_client
from pieces_os_client.models.existent_metadata import ExistentMetadata
from pieces_os_client.models.existing_metadata import ExistingMetadata
from pieces_os_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:1000
# See configuration.py for a list of all supported configuration parameters.
configuration = pieces_os_client.Configuration(
    host="http://localhost:1000"
)


# Enter a context with an instance of the API client
with pieces_os_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pieces_os_client.WebsitesApi(api_client)
    existent_metadata = pieces_os_client.ExistentMetadata() # ExistentMetadata |  (optional)

    try:
        # /websites/exists [POST]
        api_response = api_instance.websites_exists(existent_metadata=existent_metadata)
        print("The response of WebsitesApi->websites_exists:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebsitesApi->websites_exists: %s\n" % e)
```



### Parameters {#websites_exists-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **existent_metadata** | [**ExistentMetadata**](../models/ExistentMetadata)|  | [optional] 

### Return type {#websites_exists-return-type}

[**ExistingMetadata**](../models/ExistingMetadata)

### Authorization {#websites_exists-authorization}

No authorization required

### HTTP request headers {#websites_exists-http-request-headers}

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain


### HTTP response details {#websites_exists-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

## **websites_snapshot** {#websites_snapshot}
> Websites websites_snapshot(transferables=transferables)

/websites [GET]

This will get a snapshot of all your websites.

### Example {#websites_snapshot-example}


```python
import pieces_os_client
from pieces_os_client.models.websites import Websites
from pieces_os_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:1000
# See configuration.py for a list of all supported configuration parameters.
configuration = pieces_os_client.Configuration(
    host="http://localhost:1000"
)


# Enter a context with an instance of the API client
with pieces_os_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pieces_os_client.WebsitesApi(api_client)
    transferables = True # bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)

    try:
        # /websites [GET]
        api_response = api_instance.websites_snapshot(transferables=transferables)
        print("The response of WebsitesApi->websites_snapshot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebsitesApi->websites_snapshot: %s\n" % e)
```



### Parameters {#websites_snapshot-parameters}


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 

### Return type {#websites_snapshot-return-type}

[**Websites**](../models/Websites)

### Authorization {#websites_snapshot-authorization}

No authorization required

### HTTP request headers {#websites_snapshot-http-request-headers}

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details {#websites_snapshot-http-response-details}

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

