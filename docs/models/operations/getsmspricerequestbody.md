# GetSmsPriceRequestBody

To check the price of a single message or messages with the same content to multiple recipients, pass a single `SmsMessage` object with the properties of this message. To check the price of multiple messages with different content at the same time, pass as method param an `array` of `SmsMessage` objects with the properties of each message.


## Supported Types

### `components.SmsMessage`

```typescript
const value: components.SmsMessage = {
  recipients: "+48999999999",
  message: "To jest treść wiadomości",
  unicode: true,
};
```

### `components.SmsMessage[]`

```typescript
const value: components.SmsMessage[] = [
  {
    recipients: "+48999999999",
    message: "To jest treść wiadomości",
    unicode: true,
  },
];
```

