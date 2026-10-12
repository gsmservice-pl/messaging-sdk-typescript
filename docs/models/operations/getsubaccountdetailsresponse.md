# GetSubaccountDetailsResponse

## Example Usage

```typescript
import { GetSubaccountDetailsResponse } from "@gsmservice-pl/messaging-sdk-typescript/models/operations";

let value: GetSubaccountDetailsResponse = {
  headers: {},
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