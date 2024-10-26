[![NPM Version (with dist tag)](https://img.shields.io/npm/v/%40gsmservice-pl/messaging-sdk-typescript)](https://www.npmjs.com/package/@gsmservice-pl/messaging-sdk-typescript)
[![GitHub License](https://img.shields.io/github/license/gsmservice-pl/messaging-sdk-typescript)](https://github.com/gsmservice-pl/messaging-sdk-typescript/blob/main/LICENSE)
[![Static Badge](https://img.shields.io/badge/built_by-Speakeasy-yellow)](https://www.speakeasy.com/?utm_source=gsmservice-pl/messaging-sdk-typescript&utm_campaign=typescript)
# GSMService.pl Messaging REST API SDK for TypeScript

This package includes Messaging SDK for TypeScript to send SMS & MMS messages directly from your app via https://bramka.gsmservice.pl messaging platform.

## Additional documentation:

A documentation of all methods and types is available below in section [Available Resources and Operations
](#available-resources-and-operations).

Also you can refer to the [REST API documentation](https://api.gsmservice.pl/rest/) for additional details about the basics of this SDK.
<!-- No Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents

* [SDK Installation](#sdk-installation)
* [Requirements](#requirements)
* [SDK Example Usage](#sdk-example-usage)
* [Available Resources and Operations](#available-resources-and-operations)
* [Standalone functions](#standalone-functions)
* [Retries](#retries)
* [Error Handling](#error-handling)
* [Server Selection](#server-selection)
* [Custom HTTP Client](#custom-http-client)
* [Authentication](#authentication)
* [Debugging](#debugging)
<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add @gsmservice-pl/messaging-sdk-typescript
```

### PNPM

```bash
pnpm add @gsmservice-pl/messaging-sdk-typescript
```

### Bun

```bash
bun add @gsmservice-pl/messaging-sdk-typescript
```

### Yarn

```bash
yarn add @gsmservice-pl/messaging-sdk-typescript zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```

> [!NOTE]
> This package is published with CommonJS and ES Modules (ESM) support.
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Sending single SMS Message

This example demonstrates simple sending SMS message to a single recipient:

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

### Sending single MMS Message

This example demonstrates simple sending MMS message to a single recipient:

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
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [accounts](docs/sdks/accounts/README.md)

* [get](docs/sdks/accounts/README.md#get) - Get account details
* [getSubaccount](docs/sdks/accounts/README.md#getsubaccount) - Get subaccount details


### [common](docs/sdks/common/README.md)

* [ping](docs/sdks/common/README.md#ping) - Checks API availability and version

### [incoming](docs/sdks/incoming/README.md)

* [list](docs/sdks/incoming/README.md#list) - List the received SMS messages
* [getByIds](docs/sdks/incoming/README.md#getbyids) - Get the incoming messages by IDs

### [outgoing](docs/sdks/outgoing/README.md)

* [getByIds](docs/sdks/outgoing/README.md#getbyids) - Get the messages details and status by IDs
* [cancelScheduled](docs/sdks/outgoing/README.md#cancelscheduled) - Cancel a scheduled messages
* [list](docs/sdks/outgoing/README.md#list) - Lists the history of sent messages

#### [outgoing.mms](docs/sdks/mms/README.md)

* [getPrice](docs/sdks/mms/README.md#getprice) - Check the price of MMS Messages
* [send](docs/sdks/mms/README.md#send) - Send MMS Messages

#### [outgoing.sms](docs/sdks/sms/README.md)

* [getPrice](docs/sdks/sms/README.md#getprice) - Check the price of SMS Messages
* [send](docs/sdks/sms/README.md#send) - Send SMS Messages

### [senders](docs/sdks/senders/README.md)

* [list](docs/sdks/senders/README.md#list) - List allowed senders names
* [add](docs/sdks/senders/README.md#add) - Add a new sender name
* [delete](docs/sdks/senders/README.md#delete) - Delete a sender name
* [setDefault](docs/sdks/senders/README.md#setdefault) - Set default sender name

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`accountsGet`](docs/sdks/accounts/README.md#get) - Get account details
- [`accountsGetSubaccount`](docs/sdks/accounts/README.md#getsubaccount) - Get subaccount details
- [`commonPing`](docs/sdks/common/README.md#ping) - Checks API availability and version
- [`incomingGetByIds`](docs/sdks/incoming/README.md#getbyids) - Get the incoming messages by IDs
- [`incomingList`](docs/sdks/incoming/README.md#list) - List the received SMS messages
- [`outgoingCancelScheduled`](docs/sdks/outgoing/README.md#cancelscheduled) - Cancel a scheduled messages
- [`outgoingGetByIds`](docs/sdks/outgoing/README.md#getbyids) - Get the messages details and status by IDs
- [`outgoingList`](docs/sdks/outgoing/README.md#list) - Lists the history of sent messages
- [`outgoingMmsGetPrice`](docs/sdks/mms/README.md#getprice) - Check the price of MMS Messages
- [`outgoingMmsSend`](docs/sdks/mms/README.md#send) - Send MMS Messages
- [`outgoingSmsGetPrice`](docs/sdks/sms/README.md#getprice) - Check the price of SMS Messages
- [`outgoingSmsSend`](docs/sdks/sms/README.md#send) - Send SMS Messages
- [`sendersAdd`](docs/sdks/senders/README.md#add) - Add a new sender name
- [`sendersDelete`](docs/sdks/senders/README.md#delete) - Delete a sender name
- [`sendersList`](docs/sdks/senders/README.md#list) - List allowed senders names
- [`sendersSetDefault`](docs/sdks/senders/README.md#setdefault) - Set default sender name

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { Client } from "@gsmservice-pl/messaging-sdk-typescript";

const client = new Client({
  bearer: process.env["GATEWAY_API_BEARER"] ?? "",
});

async function run() {
  const result = await client.accounts.get({
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  // Handle the result
  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { Client } from "@gsmservice-pl/messaging-sdk-typescript";

const client = new Client({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  bearer: process.env["GATEWAY_API_BEARER"] ?? "",
});

async function run() {
  const result = await client.accounts.get();

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

All SDK methods return a response object or throw an error. By default, an API error will throw a `errors.SDKError`.

If a HTTP request fails, an operation my also throw an error from the `models/errors/httpclienterrors.ts` module:

| HTTP Client Error                                    | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- |
| RequestAbortedError                                  | HTTP request was aborted by the client               |
| RequestTimeoutError                                  | HTTP request timed out due to an AbortSignal signal  |
| ConnectionError                                      | HTTP client was unable to make a request to a server |
| InvalidRequestError                                  | Any input used to create a request is invalid        |
| UnexpectedClientError                                | Unrecognised or unexpected error                     |

In addition, when custom error responses are specified for an operation, the SDK may throw their associated Error type. You can refer to respective *Errors* tables in SDK docs for more details on possible error types for each operation. For example, the `get` method may throw the following errors:

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorResponse     | 401, 403, 4XX, 5XX       | application/problem+json |

```typescript
import { Client } from "@gsmservice-pl/messaging-sdk-typescript";
import {
  ErrorResponse,
  SDKValidationError,
} from "@gsmservice-pl/messaging-sdk-typescript/models/errors";

const client = new Client({
  bearer: process.env["GATEWAY_API_BEARER"] ?? "",
});

async function run() {
  let result;
  try {
    result = await client.accounts.get();

    // Handle the result
    console.log(result);
  } catch (err) {
    switch (true) {
      case (err instanceof SDKValidationError): {
        // Validation errors can be pretty-printed
        console.error(err.pretty());
        // Raw value may also be inspected
        console.error(err.rawValue);
        return;
      }
      case (err instanceof ErrorResponse): {
        // Handle err.data$: ErrorResponseData
        console.error(err);
        return;
      }
      default: {
        throw err;
      }
    }
  }
}

run();

```

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted string since validation errors can list many issues and the plain error string may be difficult read when debugging.
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Name

You can override the default server globally by passing a server name to the `server` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the names associated with the available servers:

| Name | Server | Variables |
| ----- | ------ | --------- |
| `prod` | `https://api.gsmservice.pl/rest` | None |
| `sandbox` | `https://api.gsmservice.pl/rest-sandbox` | None |

```typescript
import { Client } from "@gsmservice-pl/messaging-sdk-typescript";

const client = new Client({
  server: "sandbox",
  bearer: process.env["GATEWAY_API_BEARER"] ?? "",
});

async function run() {
  const result = await client.accounts.get();

  // Handle the result
  console.log(result);
}

run();

```


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL` optional parameter when initializing the SDK client instance. For example:

```typescript
import { Client } from "@gsmservice-pl/messaging-sdk-typescript";

const client = new Client({
  serverURL: "https://api.gsmservice.pl/rest",
  bearer: process.env["GATEWAY_API_BEARER"] ?? "",
});

async function run() {
  const result = await client.accounts.get();

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { Client } from "@gsmservice-pl/messaging-sdk-typescript";
import { HTTPClient } from "@gsmservice-pl/messaging-sdk-typescript/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new Client({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name                 | Type                 | Scheme               | Environment Variable |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `bearer`             | http                 | HTTP Bearer          | `GATEWAY_API_BEARER` |

To authenticate with the API the `bearer` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { Client } from "@gsmservice-pl/messaging-sdk-typescript";

const client = new Client({
  bearer: process.env["GATEWAY_API_BEARER"] ?? "",
});

async function run() {
  const result = await client.accounts.get();

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { Client } from "@gsmservice-pl/messaging-sdk-typescript";

const sdk = new Client({ debugLogger: console });
```

You can also enable a default debug logger by setting an environment variable `GATEWAY_API_DEBUG` to true.
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in continuous development and there may be breaking changes between a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release.