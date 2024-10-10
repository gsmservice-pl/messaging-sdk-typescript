# ListMessagesResponse

## Example Usage

```typescript
import { ListMessagesResponse } from "gsmservice-messaging-sdk/models/operations";

let value: ListMessagesResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: [
    {
      id: 323234,
      cid: "custom-id-A44445T",
      type: 1,
      recipient: "+48999999999",
      sender: "Bramka SMS",
      parts: 1,
      sentDate: new Date("2024-06-01T16:22:05Z"),
      statusDate: new Date("2024-06-01T16:22:07Z"),
      statusCode: "QUEUED",
      statusDescription: "The message has been accepted",
      unicode: true,
      flash: false,
      price: 0.16,
    },
  ],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `headers`                                                  | Record<string, *string*[]>                                 | :heavy_check_mark:                                         | N/A                                                        |
| `result`                                                   | [components.Message](../../models/components/message.md)[] | :heavy_check_mark:                                         | N/A                                                        |