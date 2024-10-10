# SendSmsRequestBody

To send a single SMS or messages with the same content to multiple recipients, pass in the Request Body a single `Sms` object with the properties of this message. To send multiple messages with different content at the same time, pass in the Request Body an `array` of `Sms` objects with the properties of each message.


## Supported Types

### `components.Sms`

```typescript
const value: components.Sms = {
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

### `components.Sms[]`

```typescript
const value: components.Sms[] = [
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

