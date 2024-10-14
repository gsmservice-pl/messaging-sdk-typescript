# SendSmsRequestBody

To send a single SMS or messages with the same content to multiple recipients, pass in the Request Body a single `SmsMessage` object with the properties of this message. To send multiple messages with different content at the same time, pass in the Request Body an `array` of `SmsMessage` objects with the properties of each message.


## Supported Types

### `components.SmsMessage`

```typescript
const value: components.SmsMessage = {
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

### `components.SmsMessage[]`

```typescript
const value: components.SmsMessage[] = [
  {
    recipients: [
      "+48999999999",
    ],
    message: "To jest treść wiadomości",
    sender: "Bramka SMS",
    type: 1,
    unicode: true,
    flash: false,
    date: null,
  },
];
```

