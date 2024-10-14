# Sms
(*outgoing.sms*)

## Overview

### Available Operations

* [getPrice](#getprice) - Check the price of SMS Messages
* [send](#send) - Send SMS Messages

## getPrice

Check the price of single or multiple SMS messages at the same time before sending them. You have to pass as request body the `SmsMessage` object (for single message) or `array` of `SmsMessage` objects (for multiple messages). Each object has several properties, describing message parameters such recipient phone number, content of the message, type, etc. Please mind that some of them are required.
The system will accept maximum **100** messages in one call. If you need to check the price of larger volume of messages, please split it to several separate requests.

As a successful result an `array` of `Price` objects will be returned, one object per each single message. You should check the `error` property of each message in a response body to make sure which were priced successfully and which finished with an error. Successfully priced messages will have `null` value of `error` property. Response will also include meta-data headers: `X-Success-Count` (a count of messages which were processed successfully) and `X-Error-Count` (count of messages which were rejected).

If you send duplicated messages in one call, API will process such message only once. This request have to be authenticated using **API Access Token**.

In case of an error, the `ErrorResponse` object will be returned with proper HTTP header status code (our error response complies with [RFC 9457](https://www.rfc-editor.org/rfc/rfc7807)).


### Example Usage

```typescript
import { Client } from "@gsmservice-pl/messaging-sdk-typescript";

const client = new Client({
  bearer: process.env["GATEWAY_API_BEARER"] ?? "",
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
      unicode: true,
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
  bearer: process.env["GATEWAY_API_BEARER"] ?? "",
});

async function run() {
  const res = await outgoingSmsGetPrice(client, {
    recipients: "+48999999999",
    message: "To jest treść wiadomości",
    sender: "Bramka SMS",
    type: 1,
    unicode: true,
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
| errors.ErrorResponse     | 400, 401, 4XX, 5XX       | application/problem+json |

## send

Send single or multiple SMS messages at the same time. You have to pass as request body the `SmsMessage` object (for single message) or `array` of `SmsMessage` objects (for multiple messages). Each object has several properties, describing message parameters such recipient phone number, content of the message, type or scheduled sending date, etc. Please mind that some of them are required.
The system will accept maximum 100 messages in one call. If you need to send larger volume of messages, please split it to several separate requests.

As a successful result an `array` with `Message` objects will be returned, one object per each single message. You should check the `status_code` property of each message in a response body to make sure which were accepted by gateway (queued) and which were rejected. In case of rejection, `status_description` property will include a reason. Response will also include meta-data headers: `X-Success-Count` (a count of messages which were processed successfully), `X-Error-Count` (count of messages which were rejected) and `X-Sandbox` (if a request was made in Sandbox or Production system).

If you send duplicated messages in one call, API will process such message only once. This request have to be authenticated using **API Access Token**.

In case of an error, the `ErrorResponse` object will be returned with proper HTTP header status code (our error response complies with [RFC 9457](https://www.rfc-editor.org/rfc/rfc7807)).

### Example Usage

```typescript
import { Client } from "@gsmservice-pl/messaging-sdk-typescript";

const client = new Client({
  bearer: process.env["GATEWAY_API_BEARER"] ?? "",
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
      unicode: true,
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
  bearer: process.env["GATEWAY_API_BEARER"] ?? "",
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
      unicode: true,
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
| errors.ErrorResponse     | 400, 401, 403, 4XX, 5XX  | application/problem+json |