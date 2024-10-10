# IncomingMessage

An object with the properties of the received message

## Example Usage

```typescript
import { IncomingMessage } from "gsmservice-messaging-sdk/models/components";

let value: IncomingMessage = {
  id: 45544,
  login: "some-user",
  recipient: "+48999000555",
  sender: "+48999888777",
  phonebookSenderName: "Jan Nowak",
  date: new Date("2024-05-31T05:17:35Z"),
  message: "To jest treść odebranego SMSa",
  dedicatedNumber: "+48111222444",
  dedicatedPrefix: "LATO",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              | Example                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                     | *number*                                                                                                 | :heavy_minus_sign:                                                                                       | Unique identifier of incoming message                                                                    | 45544                                                                                                    |
| `login`                                                                                                  | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | Login of the account (sub-account) on which the message was received                                     | some-user                                                                                                |
| `recipient`                                                                                              | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | Recipient number (or service name)                                                                       | +48999000555                                                                                             |
| `sender`                                                                                                 | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | Message sender number (or alphanumeric name)                                                             | +48999888777                                                                                             |
| `phonebookSenderName`                                                                                    | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | Sender name (matched with phonebook)                                                                     | Jan Nowak                                                                                                |
| `date`                                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)            | :heavy_minus_sign:                                                                                       | Date and time of message receipt in ISO 8601 format                                                      | 2024-05-31T05:17:35Z                                                                                     |
| `message`                                                                                                | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | Received message content                                                                                 | To jest treść odebranego SMSa                                                                            |
| `dedicatedNumber`                                                                                        | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | Dedicated Mobile Originated service number (if the message was received on this number)                  | +48111222444                                                                                             |
| `dedicatedPrefix`                                                                                        | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | Dedicated Mobile Originated service prefix (if the message was received on this number with such prefix) | LATO                                                                                                     |