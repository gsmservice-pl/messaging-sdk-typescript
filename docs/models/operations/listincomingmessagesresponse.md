# ListIncomingMessagesResponse

## Example Usage

```typescript
import { ListIncomingMessagesResponse } from "gsmservice-messaging-sdk/models/operations";

let value: ListIncomingMessagesResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: [
    {
      id: 45544,
      login: "some-user",
      recipient: "+48999000555",
      sender: "+48999888777",
      phonebookSenderName: "Jan Nowak",
      date: new Date("2024-05-31T05:17:35Z"),
      message: "To jest treść odebranego SMSa",
      dedicatedNumber: "+48111222444",
      dedicatedPrefix: "LATO",
    },
  ],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `headers`                                                                  | Record<string, *string*[]>                                                 | :heavy_check_mark:                                                         | N/A                                                                        |
| `result`                                                                   | [components.IncomingMessage](../../models/components/incomingmessage.md)[] | :heavy_check_mark:                                                         | N/A                                                                        |