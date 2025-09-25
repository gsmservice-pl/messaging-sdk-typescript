[![NPM Version (with dist tag)](https://img.shields.io/npm/v/%40gsmservice-pl/messaging-sdk-typescript)](https://www.npmjs.com/package/@gsmservice-pl/messaging-sdk-typescript)
[![GitHub License](https://img.shields.io/github/license/gsmservice-pl/messaging-sdk-typescript)](https://github.com/gsmservice-pl/messaging-sdk-typescript/blob/main/LICENSE)
[![Static Badge](https://img.shields.io/badge/built_by-Speakeasy-yellow)](https://www.speakeasy.com/?utm_source=gsmservice-pl/messaging-sdk-typescript&utm_campaign=typescript)
# SzybkiSMS.pl Messaging REST API SDK for TypeScript (powered by GSMService.pl)

This package includes Messaging SDK for TypeScript to send SMS & MMS messages directly from your app via https://szybkisms.pl messaging platform.

## Additional documentation:

A documentation of all methods and types is available below in section [Available Resources and Operations
](#available-resources-and-operations).

Also you can refer to the [REST API documentation](https://api.szybkisms.pl/rest/) for additional details about the basics of this SDK.
<!-- No Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [SzybkiSMS.pl Messaging REST API SDK for TypeScript (powered by GSMService.pl)](#szybkismspl-messaging-rest-api-sdk-for-typescript-powered-by-gsmservicepl)
  * [Additional documentation:](#additional-documentation)
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
* [Development](#development)
  * [Maturity](#maturity)
  * [Contributions](#contributions)

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
yarn add @gsmservice-pl/messaging-sdk-typescript
```

> [!NOTE]
> This package is published with CommonJS and ES Modules (ESM) support.


### Model Context Protocol (MCP) Server

This SDK is also an installable MCP server where the various SDK methods are
exposed as tools that can be invoked by AI applications.

> Node.js v20 or greater is required to run the MCP server from npm.

<details>
<summary>Claude installation steps</summary>

Add the following server definition to your `claude_desktop_config.json` file:

```json
{
  "mcpServers": {
    "Client": {
      "command": "npx",
      "args": [
        "-y", "--package", "@gsmservice-pl/messaging-sdk-typescript",
        "--",
        "mcp", "start",
        "--bearer", "..."
      ]
    }
  }
}
```

</details>

<details>
<summary>Cursor installation steps</summary>

Create a `.cursor/mcp.json` file in your project root with the following content:

```json
{
  "mcpServers": {
    "Client": {
      "command": "npx",
      "args": [
        "-y", "--package", "@gsmservice-pl/messaging-sdk-typescript",
        "--",
        "mcp", "start",
        "--bearer", "..."
      ]
    }
  }
}
```

</details>

You can also run MCP servers as a standalone binary with no additional dependencies. You must pull these binaries from available Github releases:

```bash
curl -L -o mcp-server \
    https://github.com/{org}/{repo}/releases/download/{tag}/mcp-server-bun-darwin-arm64 && \
chmod +x mcp-server
```

If the repo is a private repo you must add your Github PAT to download a release `-H "Authorization: Bearer {GITHUB_PAT}"`.


```json
{
  "mcpServers": {
    "Todos": {
      "command": "./DOWNLOAD/PATH/mcp-server",
      "args": [
        "start"
      ]
    }
  }
}
```

For a full list of server arguments, run:

```sh
npx -y --package @gsmservice-pl/messaging-sdk-typescript -- mcp start --help
```
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
  bearer: "<YOUR API ACCESS TOKEN>",
});

async function run() {
  const result = await client.messages.sms.send({
    recipients: "+48999999999",
    message: "This is SMS message content.",
    sender: "Bramka SMS",
    type: 1,
    unicode: true,
    flash: false,
    date: null,
  });

  console.log(result);
}

run();

```

### Sending single MMS Message

This example demonstrates simple sending MMS message to a single recipient:

```typescript
import { Client } from "@gsmservice-pl/messaging-sdk-typescript";

const client = new Client({
  bearer: "<YOUR API ACCESS TOKEN>",
});

async function run() {
  const result = await client.messages.mms.send({
    recipients: "+48999999999",
    subject: "This is a subject of the message",
    message: "This is MMS message content.",
    attachments: "<file body in base64 format>",
    date: null,
  });

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

* [getDetails](docs/sdks/accounts/README.md#getdetails) - Get account details
* [getSubaccountDetails](docs/sdks/accounts/README.md#getsubaccountdetails) - Get subaccount details


### [common](docs/sdks/common/README.md)

* [ping](docs/sdks/common/README.md#ping) - Checks API availability and version

### [incoming](docs/sdks/incoming/README.md)

* [list](docs/sdks/incoming/README.md#list) - List the received SMS messages
* [getByIds](docs/sdks/incoming/README.md#getbyids) - Get the incoming messages by IDs

### [messages](docs/sdks/messages/README.md)

* [getByIds](docs/sdks/messages/README.md#getbyids) - Get the messages details and status by IDs
* [cancelScheduled](docs/sdks/messages/README.md#cancelscheduled) - Cancel a scheduled messages
* [list](docs/sdks/messages/README.md#list) - Lists the history of sent messages

#### [messages.mms](docs/sdks/mms/README.md)

* [getPrice](docs/sdks/mms/README.md#getprice) - Check the price of MMS Messages
* [send](docs/sdks/mms/README.md#send) - Send MMS Messages

#### [messages.sms](docs/sdks/sms/README.md)

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

- [`accountsGetDetails`](docs/sdks/accounts/README.md#getdetails) - Get account details
- [`accountsGetSubaccountDetails`](docs/sdks/accounts/README.md#getsubaccountdetails) - Get subaccount details
- [`commonPing`](docs/sdks/common/README.md#ping) - Checks API availability and version
- [`incomingGetByIds`](docs/sdks/incoming/README.md#getbyids) - Get the incoming messages by IDs
- [`incomingList`](docs/sdks/incoming/README.md#list) - List the received SMS messages
- [`messagesCancelScheduled`](docs/sdks/messages/README.md#cancelscheduled) - Cancel a scheduled messages
- [`messagesGetByIds`](docs/sdks/messages/README.md#getbyids) - Get the messages details and status by IDs
- [`messagesList`](docs/sdks/messages/README.md#list) - Lists the history of sent messages
- [`messagesMmsGetPrice`](docs/sdks/mms/README.md#getprice) - Check the price of MMS Messages
- [`messagesMmsSend`](docs/sdks/mms/README.md#send) - Send MMS Messages
- [`messagesSmsGetPrice`](docs/sdks/sms/README.md#getprice) - Check the price of SMS Messages
- [`messagesSmsSend`](docs/sdks/sms/README.md#send) - Send SMS Messages
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
  bearer: "<YOUR API ACCESS TOKEN>",
});

async function run() {
  const result = await client.accounts.getDetails({
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
  bearer: "<YOUR API ACCESS TOKEN>",
});

async function run() {
  const result = await client.accounts.getDetails();

  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

[`ClientError`](./src/models/errors/clienterror.ts) is the base class for all HTTP error responses. It has the following properties:

| Property            | Type       | Description                                                                             |
| ------------------- | ---------- | --------------------------------------------------------------------------------------- |
| `error.message`     | `string`   | Error message                                                                           |
| `error.statusCode`  | `number`   | HTTP response status code eg `404`                                                      |
| `error.headers`     | `Headers`  | HTTP response headers                                                                   |
| `error.body`        | `string`   | HTTP body. Can be empty string if no body is returned.                                  |
| `error.rawResponse` | `Response` | Raw HTTP response                                                                       |
| `error.data$`       |            | Optional. Some errors may contain structured data. [See Error Classes](#error-classes). |

### Example
```typescript
import { Client } from "@gsmservice-pl/messaging-sdk-typescript";
import * as errors from "@gsmservice-pl/messaging-sdk-typescript/models/errors";

const client = new Client({
  bearer: "<YOUR API ACCESS TOKEN>",
});

async function run() {
  try {
    const result = await client.accounts.getDetails();

    console.log(result);
  } catch (error) {
    // The base class for HTTP error responses
    if (error instanceof errors.ClientError) {
      console.log(error.message);
      console.log(error.statusCode);
      console.log(error.body);
      console.log(error.headers);

      // Depending on the method different errors may be thrown
      if (error instanceof errors.ErrorResponse) {
        console.log(error.data$.type); // string
        console.log(error.data$.status); // number
        console.log(error.data$.title); // string
        console.log(error.data$.detail); // string
        console.log(error.data$.code); // string
      }
    }
  }
}

run();

```

### Error Classes
**Primary errors:**
* [`ClientError`](./src/models/errors/clienterror.ts): The base class for HTTP error responses.
  * [`ErrorResponse`](./src/models/errors/errorresponse.ts): An object that complies with RFC 9457 containing information about a request error.

<details><summary>Less common errors (6)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/models/errors/httpclienterrors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/models/errors/httpclienterrors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/models/errors/httpclienterrors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/models/errors/httpclienterrors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/models/errors/httpclienterrors.ts): Unrecognised or unexpected error.


**Inherit from [`ClientError`](./src/models/errors/clienterror.ts)**:
* [`ResponseValidationError`](./src/models/errors/responsevalidationerror.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Name

You can override the default server globally by passing a server name to the `server: keyof typeof ServerList` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the names associated with the available servers:

| Name      | Server                                  | Description           |
| --------- | --------------------------------------- | --------------------- |
| `prod`    | `https://api.szybkisms.pl/rest`         | Production system     |
| `sandbox` | `https://api.szybkisms.pl/rest-sandbox` | Test system (SANDBOX) |

#### Example

```typescript
import { Client } from "@gsmservice-pl/messaging-sdk-typescript";

const client = new Client({
  server: "sandbox",
  bearer: "<YOUR API ACCESS TOKEN>",
});

async function run() {
  const result = await client.accounts.getDetails();

  console.log(result);
}

run();

```

### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { Client } from "@gsmservice-pl/messaging-sdk-typescript";

const client = new Client({
  serverURL: "https://api.szybkisms.pl/rest",
  bearer: "<YOUR API ACCESS TOKEN>",
});

async function run() {
  const result = await client.accounts.getDetails();

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

const sdk = new Client({ httpClient: httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name     | Type | Scheme      | Environment Variable |
| -------- | ---- | ----------- | -------------------- |
| `bearer` | http | HTTP Bearer | `GATEWAY_API_BEARER` |

To authenticate with the API the `bearer` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { Client } from "@gsmservice-pl/messaging-sdk-typescript";

const client = new Client({
  bearer: "<YOUR API ACCESS TOKEN>",
});

async function run() {
  const result = await client.accounts.getDetails();

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