# CancelMessagesResponse

## Example Usage

```typescript
import { CancelMessagesResponse } from "gsmservice-messaging-sdk/models/operations";

let value: CancelMessagesResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: [
    {
      id: 43456,
      status: 400,
      error: {
        type:
          "https://problems-registry.smartbear.com/invalid-body-property-format",
        status: 400,
        title: "Invalid Body property format",
        detail: "The request body contains a malformed property",
        code: "400-21",
        instance: "/rest/messages/sms",
      },
    },
  ],
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `headers`                                                                    | Record<string, *string*[]>                                                   | :heavy_check_mark:                                                           | N/A                                                                          |
| `result`                                                                     | [components.CancelledMessage](../../models/components/cancelledmessage.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |