# Accounts
(*accounts*)

## Overview

### Available Operations

* [get](#get) - Get account details
* [getSubaccount](#getsubaccount) - Get subaccount details

## get

Get current account balance and other details of your account. You can check also account limit and if account is main one. Main accounts have unlimited privileges and using [User Panel](https://panel.szybkisms.pl) you can create as many subaccounts as you need.
 
This method doesn't get any parameters. As a successful result an `AccountResponse` object will be returned with properties describing details of current account you are logged in using an API Access Token.

### Example Usage

```typescript
import { Client } from "@gsmservice-pl/messaging-sdk-typescript";

const client = new Client({
  bearer: "<YOUR API ACCESS TOKEN>",
});

async function run() {
  const result = await client.accounts.get();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ClientCore } from "@gsmservice-pl/messaging-sdk-typescript/core.js";
import { accountsGet } from "@gsmservice-pl/messaging-sdk-typescript/funcs/accountsGet.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  bearer: "<YOUR API ACCESS TOKEN>",
});

async function run() {
  const res = await accountsGet(client);

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
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.AccountResponse](../../models/components/accountresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorResponse     | 401, 403, 4XX            | application/problem+json |
| errors.ErrorResponse     | 5XX                      | application/problem+json |

## getSubaccount

Check account balance and other details such subcredit balance of a subaccount. Subaccounts are additional users who can access your account services and the details. You can restrict access level and setup privileges to subaccounts using [user panel](https://panel.szybkisms.pl).

This method accepts an object `GetSubaccountDetailsRequest` with `userLogin` property. You should pass there the full subaccount login to access its data. 

As a successful result a `AccountResponse` object will be returned with properties describing details of subaccount with provided login.

### Example Usage

```typescript
import { Client } from "@gsmservice-pl/messaging-sdk-typescript";

const client = new Client({
  bearer: "<YOUR API ACCESS TOKEN>",
});

async function run() {
  const result = await client.accounts.getSubaccount({
    userLogin: "some-login",
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
import { accountsGetSubaccount } from "@gsmservice-pl/messaging-sdk-typescript/funcs/accountsGetSubaccount.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  bearer: "<YOUR API ACCESS TOKEN>",
});

async function run() {
  const res = await accountsGetSubaccount(client, {
    userLogin: "some-login",
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
| `request`                                                                                                                                                                      | [operations.GetSubaccountDetailsRequest](../../models/operations/getsubaccountdetailsrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.AccountResponse](../../models/components/accountresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrorResponse     | 401, 403, 404, 4XX       | application/problem+json |
| errors.ErrorResponse     | 5XX                      | application/problem+json |