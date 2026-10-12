# CancelMessagesResponse

## Example Usage

```typescript
import { CancelMessagesResponse } from "@gsmservice-pl/messaging-sdk-typescript/models/operations";

let value: CancelMessagesResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [],
    "key2": [],
  },
  result: [
    {
      id: 43456,
      status: 409,
      error: {
        type: "https://api.szybkisms.pl/problems/message-not-cancellable/",
        status: 409,
        title: "Message Cannot Be Canceled",
        detail: "This message can no longer be canceled.",
        code: "409-2",
        instance: "/rest/messages/43456",
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