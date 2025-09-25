# GetIncomingMessagesResponse

## Example Usage

```typescript
import { GetIncomingMessagesResponse } from "@gsmservice-pl/messaging-sdk-typescript/models/operations";

let value: GetIncomingMessagesResponse = {
  headers: {
    "key": [
      "<value 1>",
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