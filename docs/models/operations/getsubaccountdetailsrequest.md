# GetSubaccountDetailsRequest

## Example Usage

```typescript
import { GetSubaccountDetailsRequest } from "gsmservice-messaging-sdk/models/operations";

let value: GetSubaccountDetailsRequest = {
  userLogin: "some-login",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        | Example                                            |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `userLogin`                                        | *string*                                           | :heavy_check_mark:                                 | Login of the subaccount (user) to get the data for | some-login                                         |