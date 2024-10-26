# GetMmsPriceRequestBody

To check the price of a single message or messages with the same content to multiple recipients, pass a single `MmsMessage` object with the properties of this message. To check the price of multiple messages with different content at the same time, pass as method param an `array` of `MmsMessage` objects with the properties of each message.


## Supported Types

### `components.MmsMessage`

```typescript
const value: components.MmsMessage = {
  recipients: [
    "+48999999999",
  ],
  subject: "To jest temat wiadomości",
  message: "To jest treść wiadomości",
  attachments: [
    "<file_body in base64 format>",
  ],
  date: null,
};
```

### `components.MmsMessage[]`

```typescript
const value: components.MmsMessage[] = [
  {
    recipients: [
      {
        nr: "+48999999999",
        cid: "my-id-1113",
      },
    ],
    subject: "To jest temat wiadomości",
    message: "To jest treść wiadomości",
    attachments: "<file_body in base64 format>",
    date: null,
  },
];
```

