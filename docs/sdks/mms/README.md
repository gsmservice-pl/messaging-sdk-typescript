# Outgoing.Mms

## Overview

### Available Operations

* [getPrice](#getprice) - Check the price of MMS Messages
* [send](#send) - Send MMS Messages

## getPrice

Check the price of single or multiple MMS messages at the same time before sending them. You can pass a single `MmsMessage` object (for single message) or `array` of `MmsMessage` objects (for multiple messages). Each `MmsMessage` object has several properties, describing message parameters such as recipient phone number, content of the message, attachments, etc. 
The method will accept maximum **50** messages in one call.

As a successful result a `GetMmsPriceResponse` object will be returned with `result` property containing `array` of `Price` objects, one object per each single message. You should check the `error` property of each `Price` object to make sure which were priced successfully and which finished with an error. Successfully priced messages will have `null` value of `error` property.

`GetSmsPriceResponse` object will include also `headers` array with `X-Success-Count` (a count of messages which were processed successfully) and `X-Error-Count` (count of messages which were rejected) elements.

### Example Usage: bulk

<!-- UsageSnippet language="typescript" operationID="getMmsPrice" method="post" path="/messages/mms/price" example="bulk" -->
```typescript
import { Client } from "@gsmservice-pl/messaging-sdk-typescript";

const client = new Client({
  bearer: "<YOUR API ACCESS TOKEN>",
});

async function run() {
  const result = await client.outgoing.mms.getPrice([
    {
      recipients: "+48999999999",
      subject: "This is a subject of the first message",
      message: "This is first MMS message content",
      attachments: "R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
      date: null,
    },
    {
      recipients: "+48999888777",
      subject: "This is a subject of the second message",
      message: "This is second MMS message content",
      attachments: "R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
      date: null,
    },
  ]);

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
  bearer: "<YOUR API ACCESS TOKEN>",
});

async function run() {
  const res = await outgoingMmsGetPrice(client, [
    {
      recipients: "+48999999999",
      subject: "This is a subject of the first message",
      message: "This is first MMS message content",
      attachments: "R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
      date: null,
    },
    {
      recipients: "+48999888777",
      subject: "This is a subject of the second message",
      message: "This is second MMS message content",
      attachments: "R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
      date: null,
    },
  ]);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("outgoingMmsGetPrice failed:", res.error);
  }
}

run();
```
### Example Usage: bulk_cid

<!-- UsageSnippet language="typescript" operationID="getMmsPrice" method="post" path="/messages/mms/price" example="bulk_cid" -->
```typescript
import { Client } from "@gsmservice-pl/messaging-sdk-typescript";

const client = new Client({
  bearer: "<YOUR API ACCESS TOKEN>",
});

async function run() {
  const result = await client.outgoing.mms.getPrice([
    {
      recipients: {
        nr: "+48999999999",
        cid: "custom-id-A44445T",
      },
      subject: "This is a subject of the first message",
      message: "This is first MMS message content",
      attachments: "R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
      date: null,
    },
    {
      recipients: {
        nr: "+48999888777",
        cid: "custom-id-F44445R",
      },
      subject: "This is a subject of the second message",
      message: "This is second MMS message content",
      attachments: "R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
      date: null,
    },
  ]);

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
  bearer: "<YOUR API ACCESS TOKEN>",
});

async function run() {
  const res = await outgoingMmsGetPrice(client, [
    {
      recipients: {
        nr: "+48999999999",
        cid: "custom-id-A44445T",
      },
      subject: "This is a subject of the first message",
      message: "This is first MMS message content",
      attachments: "R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
      date: null,
    },
    {
      recipients: {
        nr: "+48999888777",
        cid: "custom-id-F44445R",
      },
      subject: "This is a subject of the second message",
      message: "This is second MMS message content",
      attachments: "R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
      date: null,
    },
  ]);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("outgoingMmsGetPrice failed:", res.error);
  }
}

run();
```
### Example Usage: multi

<!-- UsageSnippet language="typescript" operationID="getMmsPrice" method="post" path="/messages/mms/price" example="multi" -->
```typescript
import { Client } from "@gsmservice-pl/messaging-sdk-typescript";

const client = new Client({
  bearer: "<YOUR API ACCESS TOKEN>",
});

async function run() {
  const result = await client.outgoing.mms.getPrice({
    recipients: [
      "+48999999999",
      "+48999888777",
    ],
    subject: "This is a subject of the message",
    message: "This is MMS message content.",
    attachments: "R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
    date: null,
  });

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
  bearer: "<YOUR API ACCESS TOKEN>",
});

async function run() {
  const res = await outgoingMmsGetPrice(client, {
    recipients: [
      "+48999999999",
      "+48999888777",
    ],
    subject: "This is a subject of the message",
    message: "This is MMS message content.",
    attachments: "R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
    date: null,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("outgoingMmsGetPrice failed:", res.error);
  }
}

run();
```
### Example Usage: multi_cid

<!-- UsageSnippet language="typescript" operationID="getMmsPrice" method="post" path="/messages/mms/price" example="multi_cid" -->
```typescript
import { Client } from "@gsmservice-pl/messaging-sdk-typescript";

const client = new Client({
  bearer: "<YOUR API ACCESS TOKEN>",
});

async function run() {
  const result = await client.outgoing.mms.getPrice({
    recipients: [
      {
        nr: "+48999999999",
        cid: "custom-id-A44445T",
      },
      {
        nr: "+48999888777",
        cid: "custom-id-F44445R",
      },
    ],
    subject: "This is a subject of the message",
    message: "This is MMS message content",
    attachments: "R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
    date: null,
  });

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
  bearer: "<YOUR API ACCESS TOKEN>",
});

async function run() {
  const res = await outgoingMmsGetPrice(client, {
    recipients: [
      {
        nr: "+48999999999",
        cid: "custom-id-A44445T",
      },
      {
        nr: "+48999888777",
        cid: "custom-id-F44445R",
      },
    ],
    subject: "This is a subject of the message",
    message: "This is MMS message content",
    attachments: "R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
    date: null,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("outgoingMmsGetPrice failed:", res.error);
  }
}

run();
```
### Example Usage: single

<!-- UsageSnippet language="typescript" operationID="getMmsPrice" method="post" path="/messages/mms/price" example="single" -->
```typescript
import { Client } from "@gsmservice-pl/messaging-sdk-typescript";

const client = new Client({
  bearer: "<YOUR API ACCESS TOKEN>",
});

async function run() {
  const result = await client.outgoing.mms.getPrice({
    recipients: "+48999999999",
    subject: "This is a subject of the message",
    message: "This is MMS message content.",
    attachments: "R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
    date: null,
  });

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
  bearer: "<YOUR API ACCESS TOKEN>",
});

async function run() {
  const res = await outgoingMmsGetPrice(client, {
    recipients: "+48999999999",
    subject: "This is a subject of the message",
    message: "This is MMS message content.",
    attachments: "R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
    date: null,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("outgoingMmsGetPrice failed:", res.error);
  }
}

run();
```
### Example Usage: single_cid

<!-- UsageSnippet language="typescript" operationID="getMmsPrice" method="post" path="/messages/mms/price" example="single_cid" -->
```typescript
import { Client } from "@gsmservice-pl/messaging-sdk-typescript";

const client = new Client({
  bearer: "<YOUR API ACCESS TOKEN>",
});

async function run() {
  const result = await client.outgoing.mms.getPrice({
    recipients: {
      nr: "+48999999999",
      cid: "custom-id-A44445T",
    },
    subject: "This is a subject of the message",
    message: "This is MMS message content",
    attachments: "R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
    date: null,
  });

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
  bearer: "<YOUR API ACCESS TOKEN>",
});

async function run() {
  const res = await outgoingMmsGetPrice(client, {
    recipients: {
      nr: "+48999999999",
      cid: "custom-id-A44445T",
    },
    subject: "This is a subject of the message",
    message: "This is MMS message content",
    attachments: "R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
    date: null,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("outgoingMmsGetPrice failed:", res.error);
  }
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
| errors.ErrorResponse     | 401, 405                 | application/problem+json |
| errors.ErrorResponse     | 400, 415, 4XX            | application/problem+json |
| errors.ErrorResponse     | 5XX                      | application/problem+json |

## send

Send single or multiple MMS messages at the same time. You can pass as a parameter `MmsMessage` object (for single message) or `array` of `MmsMessage` objects (for multiple messages). Each `MmsMessage` object has several properties, describing message parameters such recipient phone number, content of the message, attachments or scheduled sending date, etc. This method will accept maximum **50** messages in one call.

As a successful result a `SendMmsResponse` object will be returned with `result` property containing array of `Message` objects, one object per each single message. You should check the `statusCode` property of each `Message` object to make sure which were accepted by gateway (queued) and which were rejected. In case of rejection, `statusDescription` property will include a reason.

`SendSmsResponse` will also include `headers` array with `X-Success-Count` (a count of messages which were processed successfully), `X-Error-Count` (count of messages which were rejected) and `X-Sandbox` (if a request was made in Sandbox or Production system) elements.

### Example Usage: bulk

<!-- UsageSnippet language="typescript" operationID="sendMms" method="post" path="/messages/mms" example="bulk" -->
```typescript
import { Client } from "@gsmservice-pl/messaging-sdk-typescript";

const client = new Client({
  bearer: "<YOUR API ACCESS TOKEN>",
});

async function run() {
  const result = await client.outgoing.mms.send([
    {
      recipients: "+48999999999",
      subject: "This is a subject of the first message",
      message: "This is first MMS message content",
      attachments: "R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
      date: null,
    },
    {
      recipients: "+48999888777",
      subject: "This is a subject of the second message",
      message: "This is second MMS message content",
      attachments: "R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
      date: null,
    },
  ]);

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
  bearer: "<YOUR API ACCESS TOKEN>",
});

async function run() {
  const res = await outgoingMmsSend(client, [
    {
      recipients: "+48999999999",
      subject: "This is a subject of the first message",
      message: "This is first MMS message content",
      attachments: "R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
      date: null,
    },
    {
      recipients: "+48999888777",
      subject: "This is a subject of the second message",
      message: "This is second MMS message content",
      attachments: "R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
      date: null,
    },
  ]);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("outgoingMmsSend failed:", res.error);
  }
}

run();
```
### Example Usage: bulk_cid

<!-- UsageSnippet language="typescript" operationID="sendMms" method="post" path="/messages/mms" example="bulk_cid" -->
```typescript
import { Client } from "@gsmservice-pl/messaging-sdk-typescript";

const client = new Client({
  bearer: "<YOUR API ACCESS TOKEN>",
});

async function run() {
  const result = await client.outgoing.mms.send([
    {
      recipients: {
        nr: "+48999999999",
        cid: "custom-id-A44445T",
      },
      subject: "This is a subject of the first message",
      message: "This is first MMS message content",
      attachments: "R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
      date: null,
    },
    {
      recipients: {
        nr: "+48999888777",
        cid: "custom-id-F44445R",
      },
      subject: "This is a subject of the second message",
      message: "This is second MMS message content",
      attachments: "R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
      date: null,
    },
  ]);

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
  bearer: "<YOUR API ACCESS TOKEN>",
});

async function run() {
  const res = await outgoingMmsSend(client, [
    {
      recipients: {
        nr: "+48999999999",
        cid: "custom-id-A44445T",
      },
      subject: "This is a subject of the first message",
      message: "This is first MMS message content",
      attachments: "R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
      date: null,
    },
    {
      recipients: {
        nr: "+48999888777",
        cid: "custom-id-F44445R",
      },
      subject: "This is a subject of the second message",
      message: "This is second MMS message content",
      attachments: "R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
      date: null,
    },
  ]);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("outgoingMmsSend failed:", res.error);
  }
}

run();
```
### Example Usage: multi

<!-- UsageSnippet language="typescript" operationID="sendMms" method="post" path="/messages/mms" example="multi" -->
```typescript
import { Client } from "@gsmservice-pl/messaging-sdk-typescript";

const client = new Client({
  bearer: "<YOUR API ACCESS TOKEN>",
});

async function run() {
  const result = await client.outgoing.mms.send({
    recipients: [
      "+48999999999",
      "+48999888777",
    ],
    subject: "This is a subject of the message",
    message: "This is MMS message content.",
    attachments: "R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
    date: null,
  });

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
  bearer: "<YOUR API ACCESS TOKEN>",
});

async function run() {
  const res = await outgoingMmsSend(client, {
    recipients: [
      "+48999999999",
      "+48999888777",
    ],
    subject: "This is a subject of the message",
    message: "This is MMS message content.",
    attachments: "R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
    date: null,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("outgoingMmsSend failed:", res.error);
  }
}

run();
```
### Example Usage: multi_cid

<!-- UsageSnippet language="typescript" operationID="sendMms" method="post" path="/messages/mms" example="multi_cid" -->
```typescript
import { Client } from "@gsmservice-pl/messaging-sdk-typescript";

const client = new Client({
  bearer: "<YOUR API ACCESS TOKEN>",
});

async function run() {
  const result = await client.outgoing.mms.send({
    recipients: [
      {
        nr: "+48999999999",
        cid: "custom-id-A44445T",
      },
      {
        nr: "+48999888777",
        cid: "custom-id-F44445R",
      },
    ],
    subject: "This is a subject of the message",
    message: "This is MMS message content",
    attachments: "R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
    date: null,
  });

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
  bearer: "<YOUR API ACCESS TOKEN>",
});

async function run() {
  const res = await outgoingMmsSend(client, {
    recipients: [
      {
        nr: "+48999999999",
        cid: "custom-id-A44445T",
      },
      {
        nr: "+48999888777",
        cid: "custom-id-F44445R",
      },
    ],
    subject: "This is a subject of the message",
    message: "This is MMS message content",
    attachments: "R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
    date: null,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("outgoingMmsSend failed:", res.error);
  }
}

run();
```
### Example Usage: single

<!-- UsageSnippet language="typescript" operationID="sendMms" method="post" path="/messages/mms" example="single" -->
```typescript
import { Client } from "@gsmservice-pl/messaging-sdk-typescript";

const client = new Client({
  bearer: "<YOUR API ACCESS TOKEN>",
});

async function run() {
  const result = await client.outgoing.mms.send({
    recipients: "+48999999999",
    subject: "This is a subject of the message",
    message: "This is MMS message content.",
    attachments: "R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
    date: null,
  });

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
  bearer: "<YOUR API ACCESS TOKEN>",
});

async function run() {
  const res = await outgoingMmsSend(client, {
    recipients: "+48999999999",
    subject: "This is a subject of the message",
    message: "This is MMS message content.",
    attachments: "R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
    date: null,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("outgoingMmsSend failed:", res.error);
  }
}

run();
```
### Example Usage: single_cid

<!-- UsageSnippet language="typescript" operationID="sendMms" method="post" path="/messages/mms" example="single_cid" -->
```typescript
import { Client } from "@gsmservice-pl/messaging-sdk-typescript";

const client = new Client({
  bearer: "<YOUR API ACCESS TOKEN>",
});

async function run() {
  const result = await client.outgoing.mms.send({
    recipients: {
      nr: "+48999999999",
      cid: "custom-id-A44445T",
    },
    subject: "This is a subject of the message",
    message: "This is MMS message content",
    attachments: "R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
    date: null,
  });

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
  bearer: "<YOUR API ACCESS TOKEN>",
});

async function run() {
  const res = await outgoingMmsSend(client, {
    recipients: {
      nr: "+48999999999",
      cid: "custom-id-A44445T",
    },
    subject: "This is a subject of the message",
    message: "This is MMS message content",
    attachments: "R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
    date: null,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("outgoingMmsSend failed:", res.error);
  }
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
| errors.ErrorResponse     | 401, 405                 | application/problem+json |
| errors.ErrorResponse     | 400, 403, 415, 4XX       | application/problem+json |
| errors.ErrorResponse     | 5XX                      | application/problem+json |