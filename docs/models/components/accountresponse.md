# AccountResponse

An object containing information about the User's account and balance

## Example Usage

```typescript
import { AccountResponse } from "@gsmservice-pl/messaging-sdk-typescript/models/components";

let value: AccountResponse = {
  login: "some_login",
  accountType: "PRE-PAID",
  limit: 0,
  credit: 130.44,
  subcredit: 65.32,
  currency: "PLN",
  name: "Andrzej Nowak",
  isMain: true,
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `login`                                                          | *string*                                                         | :heavy_minus_sign:                                               | User Login                                                       | some_login                                                       |
| `accountType`                                                    | [components.AccountType](../../models/components/accounttype.md) | :heavy_minus_sign:                                               | Account type                                                     | PRE-PAID                                                         |
| `limit`                                                          | *number*                                                         | :heavy_minus_sign:                                               | Acount limit                                                     | 0                                                                |
| `credit`                                                         | *number*                                                         | :heavy_minus_sign:                                               | Current account balance                                          | 130.44                                                           |
| `subcredit`                                                      | *number*                                                         | :heavy_minus_sign:                                               | Subaccount credit balance (null if unlimited)                    | 65.32                                                            |
| `currency`                                                       | *string*                                                         | :heavy_minus_sign:                                               | Account currency                                                 | PLN                                                              |
| `name`                                                           | *string*                                                         | :heavy_minus_sign:                                               | User name and surname                                            | Andrzej Nowak                                                    |
| `isMain`                                                         | *boolean*                                                        | :heavy_minus_sign:                                               | Is main account?                                                 | true                                                             |