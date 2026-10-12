# GetAccountDetailsResponse

## Example Usage

```typescript
import { GetAccountDetailsResponse } from "@gsmservice-pl/messaging-sdk-typescript/models/operations";

let value: GetAccountDetailsResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    login: "some_login",
    accountType: "PRE-PAID",
    limit: 0,
    credit: 130.44,
    subcredit: 65.32,
    currency: "PLN",
    name: "Andrzej Nowak",
    isMain: true,
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `headers`                                                                | Record<string, *string*[]>                                               | :heavy_check_mark:                                                       | N/A                                                                      |
| `result`                                                                 | [components.AccountResponse](../../models/components/accountresponse.md) | :heavy_check_mark:                                                       | N/A                                                                      |