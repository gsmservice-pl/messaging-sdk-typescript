# Incoming
(*incoming*)

## Overview

### Available Operations

* [list](#list) - List the received SMS messages
* [getByIds](#getbyids) - Get the incoming messages by IDs

## list

Get the details of all received messages from your account incoming messages box. This method supports pagination so you have to pass `ListIncomingMessagesRequest` object with property `page` (number of page with received messages which you want to access) and a `limit` (max of received messages per page). Messages are fetched from the latest one. This method will accept maximum **50** as `limit` parameter value.

As a successful result a `ListIncomingMessagesResponse` object will be returned with an array of `IncomingMessage` as `result` property, each object per single received message. `ListIncomingMessagesResponse` object will contain also a `headers` array property where you can find `X-Total-Results` (a total count of all received messages which are available in incoming box on your account), `X-Total-Pages` (a total number of all pages with results), `X-Current-Page` (A current page number) and `X-Limit` (messages count per single page) elements.

### Example Usage

```typescript
import { Client } from "@gsmservice-pl/messaging-sdk-typescript";

const client = new Client({
  bearer: process.env["GATEWAY_API_BEARER"] ?? "",
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
import { ClientCore } from "@gsmservice-pl/messaging-sdk-typescript/core.js";
import { incomingList } from "@gsmservice-pl/messaging-sdk-typescript/funcs/incomingList.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  bearer: process.env["GATEWAY_API_BEARER"] ?? "",
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

Get the details of one or more received messages using their `ids`. This method accepts a `GetIncomingMessagesRequest` object with `ids` property containing an `array` of the unique incoming message *IDs*, which were given while receiving a messages. The method will accept maximum 50 identifiers in one call.

As a successful result a `GetIncomingMessagesResponse` object will be returned with a `result` property containing array of `IncomingMessage` objects, each object per single received message. `GetIncomingMessagesResponse` object will contain also a `headers` array property where you can find `X-Success-Count` (a count of incoming messages which were found and returned correctly) and `X-Error-Count` (count of incoming messages which were not found) elements.

### Example Usage

```typescript
import { Client } from "@gsmservice-pl/messaging-sdk-typescript";

const client = new Client({
  bearer: process.env["GATEWAY_API_BEARER"] ?? "",
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
import { ClientCore } from "@gsmservice-pl/messaging-sdk-typescript/core.js";
import { incomingGetByIds } from "@gsmservice-pl/messaging-sdk-typescript/funcs/incomingGetByIds.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  bearer: process.env["GATEWAY_API_BEARER"] ?? "",
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