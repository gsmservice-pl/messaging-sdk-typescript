# Common
(*common*)

## Overview

### Available Operations

* [ping](#ping) - Checks API availability and version

## ping

Check the API connection and the current API availability status. Also you will get the current API version number. The method doesn't accept any parameters.

As a successful result a `PingResponse` object will be returned.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="ping" method="get" path="/ping" -->
```typescript
import { Client } from "@gsmservice-pl/messaging-sdk-typescript";

const client = new Client();

async function run() {
  const result = await client.common.ping();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ClientCore } from "@gsmservice-pl/messaging-sdk-typescript/core.js";
import { commonPing } from "@gsmservice-pl/messaging-sdk-typescript/funcs/commonPing.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore();

async function run() {
  const res = await commonPing(client);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("commonPing failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.PingResponse](../../models/components/pingresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorResponse     | 400, 4XX                 | application/problem+json |
| errors.ErrorResponse     | 503, 5XX                 | application/problem+json |