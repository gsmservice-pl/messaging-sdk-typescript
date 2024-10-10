# PhoneNumberWithCid

An object defining the message recipient telephone number with the message's custom identifier assigned by the User

## Example Usage

```typescript
import { PhoneNumberWithCid } from "gsmservice-messaging-sdk/models/components";

let value: PhoneNumberWithCid = {
  nr: "+48999999999",
  cid: "my-id-1113",
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              | Example                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `nr`                                                                                                                     | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | A telephone number in international format (with a plus sign and the country code at the beginning, e.g. +48 for Poland) | +48999999999                                                                                                             |
| `cid`                                                                                                                    | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Custom message ID assigned by the User                                                                                   | my-id-1113                                                                                                               |