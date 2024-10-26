# Mms
(*outgoing.mms*)

## Overview

### Available Operations

* [getPrice](#getprice) - Check the price of MMS Messages
* [send](#send) - Send MMS Messages

## getPrice

Check the price of single or multiple MMS messages at the same time before sending them. You can pass a single `MmsMessage` object (for single message) or `array` of `MmsMessage` objects (for multiple messages). Each `MmsMessage` object has several properties, describing message parameters such as recipient phone number, content of the message, attachments, etc. 
The method will accept maximum **50** messages in one call.

As a successful result a `GetMmsPriceResponse` object will be returned with `result` property containing `array` of `Price` objects, one object per each single message. You should check the `error` property of each `Price` object to make sure which were priced successfully and which finished with an error. Successfully priced messages will have `null` value of `error` property.

`GetSmsPriceResponse` object will include also `headers` array with `X-Success-Count` (a count of messages which were processed successfully) and `X-Error-Count` (count of messages which were rejected) elements.

### Example Usage

```typescript
import { Client } from "@gsmservice-pl/messaging-sdk-typescript";

const client = new Client({
  bearer: process.env["GATEWAY_API_BEARER"] ?? "",
});

async function run() {
  const result = await client.outgoing.mms.getPrice([
    {
      recipients: {
        nr: "+48999999999",
        cid: "my-id-1113",
      },
      subject: "To jest temat wiadomości",
      message: "To jest treść wiadomości",
      attachments: [
        "<file_body in base64 format>",
      ],
      date: null,
    },
  ]);

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ClientCore } from "@gsmservice-pl/messaging-sdk-typescript/core.js";
import { outgoingMmsGetPrice } from "@gsmservice-pl/messaging-sdk-typescript/funcs/outgoingMmsGetPrice.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  bearer: process.env["GATEWAY_API_BEARER"] ?? "",
});

async function run() {
  const res = await outgoingMmsGetPrice(client, [
    {
      recipients: {
        nr: "+48999999999",
        cid: "my-id-1113",
      },
      subject: "To jest temat wiadomości",
      message: "To jest treść wiadomości",
      attachments: "<file_body in base64 format>",
      date: null,
    },
  ]);

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
| `request`                                                                                                                                                                      | [operations.GetMmsPriceRequestBody](../../models/operations/getmmspricerequestbody.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetMmsPriceResponse](../../models/operations/getmmspriceresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorResponse     | 400, 401, 4XX, 5XX       | application/problem+json |

## send

Send single or multiple MMS messages at the same time. You can pass as a parameter `MmsMessage` object (for single message) or `array` of `MmsMessage` objects (for multiple messages). Each `MmsMessage` object has several properties, describing message parameters such recipient phone number, content of the message, attachments or scheduled sending date, etc. This method will accept maximum **50** messages in one call.

As a successful result a `SendMmsResponse` object will be returned with `result` property containing array of `Message` objects, one object per each single message. You should check the `statusCode` property of each `Message` object to make sure which were accepted by gateway (queued) and which were rejected. In case of rejection, `statusDescription` property will include a reason.

`SendSmsResponse` will also include `headers` array with `X-Success-Count` (a count of messages which were processed successfully), `X-Error-Count` (count of messages which were rejected) and `X-Sandbox` (if a request was made in Sandbox or Production system) elements.

### Example Usage

```typescript
import { Client } from "@gsmservice-pl/messaging-sdk-typescript";

const client = new Client({
  bearer: process.env["GATEWAY_API_BEARER"] ?? "",
});

async function run() {
  const result = await client.outgoing.mms.send([
    {
      recipients: [
        "+48999999999",
      ],
      subject: "To jest temat wiadomości",
      message: "To jest treść wiadomości",
      attachments: [
        "<file_body in base64 format>",
      ],
      date: null,
    },
  ]);

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ClientCore } from "@gsmservice-pl/messaging-sdk-typescript/core.js";
import { outgoingMmsSend } from "@gsmservice-pl/messaging-sdk-typescript/funcs/outgoingMmsSend.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  bearer: process.env["GATEWAY_API_BEARER"] ?? "",
});

async function run() {
  const res = await outgoingMmsSend(client, [
    {
      recipients: [
        "+48999999999",
      ],
      subject: "To jest temat wiadomości",
      message: "To jest treść wiadomości",
      attachments: "<file_body in base64 format>",
      date: null,
    },
  ]);

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
| `request`                                                                                                                                                                      | [operations.SendMmsRequestBody](../../models/operations/sendmmsrequestbody.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.SendMmsResponse](../../models/operations/sendmmsresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorResponse     | 400, 401, 403, 4XX, 5XX  | application/problem+json |