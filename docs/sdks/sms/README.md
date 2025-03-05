# Sms
(*outgoing.sms*)

## Overview

### Available Operations

* [getPrice](#getprice) - Check the price of SMS Messages
* [send](#send) - Send SMS Messages

## getPrice

Check the price of single or multiple SMS messages at the same time before sending them. You can pass a single `SmsMessage` object (for single message) or `array` of `SmsMessage` objects (for multiple messages). Each `SmsMessage` object has several properties, describing message parameters such as recipient phone number, content of the message, type, etc.
The method will accept maximum **100** messages in one call.

As a successful result a `GetSmsPriceResponse` object will be returned with `result` property containing `array` of `Price` objects, one object per each single message. You should check the `error` property of each `Price` object to make sure which were priced successfully and which finished with an error. Successfully priced messages will have `null` value of `error` property.

`GetSmsPriceResponse` object will include also `headers` array with `X-Success-Count` (a count of messages which were processed successfully) and `X-Error-Count` (count of messages which were rejected) elements.

### Example Usage

```typescript
import { Client } from "@gsmservice-pl/messaging-sdk-typescript";

const client = new Client({
  bearer: "<YOUR API ACCESS TOKEN>",
});

async function run() {
  const result = await client.outgoing.sms.getPrice([
    {
      recipients: {
        nr: "+48999999999",
        cid: "my-id-1113",
      },
      message: "To jest treść wiadomości",
      sender: "Bramka SMS",
      type: 1,
      unicode: false,
      flash: false,
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
import { outgoingSmsGetPrice } from "@gsmservice-pl/messaging-sdk-typescript/funcs/outgoingSmsGetPrice.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  bearer: "<YOUR API ACCESS TOKEN>",
});

async function run() {
  const res = await outgoingSmsGetPrice(client, {
    recipients: "+48999999999",
    message: "To jest treść wiadomości",
    sender: "Bramka SMS",
    type: 1,
    unicode: false,
    flash: false,
    date: null,
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
| `request`                                                                                                                                                                      | [operations.GetSmsPriceRequestBody](../../models/operations/getsmspricerequestbody.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetSmsPriceResponse](../../models/operations/getsmspriceresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorResponse     | 400, 401, 4XX            | application/problem+json |
| errors.ErrorResponse     | 5XX                      | application/problem+json |

## send

Send single or multiple SMS messages at the same time. You can pass as a parameter `SmsMessage` object (for single message) or `array` of `SmsMessage` objects (for multiple messages). Each `SmsMessage` object has several properties, describing message parameters such recipient phone number, content of the message, type or scheduled sending date, etc. This method will accept maximum **100** messages in one call.

As a successful result a `SendSmsResponse` object will be returned with `result` property containing array of `Message` objects, one object per each single message. You should check the `statusCode` property of each `Message` object to make sure which were accepted by gateway (queued) and which were rejected. In case of rejection, `statusDescription` property will include a reason.

`SendSmsResponse` will also include `headers` array with `X-Success-Count` (a count of messages which were processed successfully), `X-Error-Count` (count of messages which were rejected) and `X-Sandbox` (if a request was made in Sandbox or Production system) elements.

### Example Usage

```typescript
import { Client } from "@gsmservice-pl/messaging-sdk-typescript";

const client = new Client({
  bearer: "<YOUR API ACCESS TOKEN>",
});

async function run() {
  const result = await client.outgoing.sms.send([
    {
      recipients: [
        "+48999999999",
      ],
      message: "To jest treść wiadomości",
      sender: "Bramka SMS",
      type: 1,
      unicode: false,
      flash: false,
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
import { outgoingSmsSend } from "@gsmservice-pl/messaging-sdk-typescript/funcs/outgoingSmsSend.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  bearer: "<YOUR API ACCESS TOKEN>",
});

async function run() {
  const res = await outgoingSmsSend(client, [
    {
      recipients: [
        "+48999999999",
      ],
      message: "To jest treść wiadomości",
      sender: "Bramka SMS",
      type: 1,
      unicode: false,
      flash: false,
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
| `request`                                                                                                                                                                      | [operations.SendSmsRequestBody](../../models/operations/sendsmsrequestbody.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.SendSmsResponse](../../models/operations/sendsmsresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorResponse     | 400, 401, 403, 4XX       | application/problem+json |
| errors.ErrorResponse     | 5XX                      | application/problem+json |