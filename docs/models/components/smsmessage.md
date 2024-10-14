# SmsMessage

An object with a new SMS message properties

## Example Usage

```typescript
import { SmsMessage } from "@gsmservice-pl/messaging-sdk-typescript/models/components";

let value: SmsMessage = {
  recipients: {
    nr: "+48999999999",
    cid: "my-id-1113",
  },
  message: "To jest treść wiadomości",
  sender: "Bramka SMS",
  type: 1,
  unicode: true,
  flash: false,
  date: null,
};
```

## Fields

| Field                                                                                                                                                                                                                                                                                                                                                                                                                              | Type                                                                                                                                                                                                                                                                                                                                                                                                                               | Required                                                                                                                                                                                                                                                                                                                                                                                                                           | Description                                                                                                                                                                                                                                                                                                                                                                                                                        | Example                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `recipients`                                                                                                                                                                                                                                                                                                                                                                                                                       | *components.Recipients*                                                                                                                                                                                                                                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                                 | The recipient number or multiple recipients numbers of single message. To set one recipient, simply pass here a `string` with his phone number. To set multiple recipients, pass here a simple `array` of `string`. Optionally you can also set custom id (user identifier) for each message - pass `PhoneNumberWithCid` object (in case of single recipient) or `Array` of `PhoneNumberWithCid` (in case of multiple recipients). |                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `message`                                                                                                                                                                                                                                                                                                                                                                                                                          | *string*                                                                                                                                                                                                                                                                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                                 | SMS message content                                                                                                                                                                                                                                                                                                                                                                                                                | To jest treść wiadomości                                                                                                                                                                                                                                                                                                                                                                                                           |
| `sender`                                                                                                                                                                                                                                                                                                                                                                                                                           | *string*                                                                                                                                                                                                                                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                 | SMS sender name                                                                                                                                                                                                                                                                                                                                                                                                                    | Bramka SMS                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `type`                                                                                                                                                                                                                                                                                                                                                                                                                             | [components.SmsType](../../models/components/smstype.md)                                                                                                                                                                                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                 | SMS type (SmsType.SmsPro -> SMS PRO, SmsType.SmsEco -> SMS ECO, SmsType.SmsTwoWay -> SMS 2WAY)                                                                                                                                                                                                                                                                                                                                     | 1                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `unicode`                                                                                                                                                                                                                                                                                                                                                                                                                          | *boolean*                                                                                                                                                                                                                                                                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                 | Should the message be sent with special characters, e.g. Polish diacritics (if any)? If *false*, those characters will be automatically replaced with their equivalents. If *true* your message will be sent as **unicode** but the message will be able to consist of fewer characters.                                                                                                                                           | true                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `flash`                                                                                                                                                                                                                                                                                                                                                                                                                            | *boolean*                                                                                                                                                                                                                                                                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                 | Should the message to be sent with class 0 (FLASH)?                                                                                                                                                                                                                                                                                                                                                                                | false                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `date`                                                                                                                                                                                                                                                                                                                                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                                                                                                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                 | Scheduled future date and time of sending the message (in ISO 8601 format). If missing or null - message will be sent immediately                                                                                                                                                                                                                                                                                                  | <nil>                                                                                                                                                                                                                                                                                                                                                                                                                              |