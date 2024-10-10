# Incoming
(*incoming*)

## Overview

### Available Operations

* [list](#list) - List the received SMS messages
* [getByIds](#getbyids) - Get the incoming messages by IDs

## list

Get the details of all of received messages from your account incoming messages box. This endpoint supports pagination so you have to pass as query parameters a `page` value (number of page with received messages which you want to access) and a `limit` value (max of received messages per page). Messages are fetched from the latest one. The system will accept maximum **50** as `limit` parameter value. If you need to get details of larger volume of messages, please access them with next pages.
    
As a successful result an array with `IncomingMessage` objects will be returned, each object per single received message. Response will also include meta-data headers: `X-Total-Results` (a total count of all received messages which are available in incoming box on your account), `X-Total-Pages` (a total number of all pages with results), `X-Current-Page` (A current page number) and `X-Limit` (messages count per single page). This request have to be authenticated using **API Access Token**. 

A response contains also a special `Link` header which includes *URIs* to access next, previous, first and last page with received messages (which complies with [RFC 5988](https://www.rfc-editor.org/rfc/rfc5988)).

In case of an error, the `ErrorResponse` object will be returned with proper HTTP header status code (our error response complies with [RFC 9457](https://www.rfc-editor.org/rfc/rfc7807)).

### Example Usage

```typescript
import { Client } from "gsmservice-messaging-sdk";

const client = new Client({
  bearer: process.env["GATEWAY_API_TOKEN_BEARER"] ?? "",
});

async function run() {
  const result = await client.incoming.list({
    page: 1,
    limit: 10,
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ClientCore } from "gsmservice-messaging-sdk/core.js";
import { incomingList } from "gsmservice-messaging-sdk/funcs/incomingList.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  bearer: process.env["GATEWAY_API_TOKEN_BEARER"] ?? "",
});

async function run() {
  const res = await incomingList(client, {
    page: 1,
    limit: 10,
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListIncomingMessagesRequest](../../models/operations/listincomingmessagesrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListIncomingMessagesResponse](../../models/operations/listincomingmessagesresponse.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.ErrorResponse         | 400, 401, 403, 404, 4XX, 5XX | application/problem+json     |

## getByIds

Get the details of one or more received messages using their `ids`. You have to pass the unique incoming message *IDs* as path parameter, which were given while receiving a messages. If you want to get the details of multiple messages at once, please separate their IDs with a comma. The system will accept maximum 50 identifiers in one call. If you need to get details of larger volume of incoming messages, please split it to several separate requests.
    
As a successful result an array with `IncomingMessage` objects will be returned, each object per single found message. Response will also include meta-data headers: `X-Success-Count` (a count of incoming messages which were found and returned correctly) and `X-Error-Count` (count of incoming messages which were not found).

If you pass duplicated IDs, API will return data of this message only once. This request have to be authenticated using **API Access Token**. 

In case of an error, the `ErrorResponse` object will be returned with proper HTTP header status code (our error response complies with [RFC 9457](https://www.rfc-editor.org/rfc/rfc7807)).

### Example Usage

```typescript
import { Client } from "gsmservice-messaging-sdk";

const client = new Client({
  bearer: process.env["GATEWAY_API_TOKEN_BEARER"] ?? "",
});

async function run() {
  const result = await client.incoming.getByIds({
    ids: [
      43456,
    ],
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ClientCore } from "gsmservice-messaging-sdk/core.js";
import { incomingGetByIds } from "gsmservice-messaging-sdk/funcs/incomingGetByIds.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  bearer: process.env["GATEWAY_API_TOKEN_BEARER"] ?? "",
});

async function run() {
  const res = await incomingGetByIds(client, {
    ids: [
      43456,
    ],
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetIncomingMessagesRequest](../../models/operations/getincomingmessagesrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetIncomingMessagesResponse](../../models/operations/getincomingmessagesresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorResponse     | 400, 401, 404, 4XX, 5XX  | application/problem+json |