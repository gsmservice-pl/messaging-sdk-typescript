# SendMmsRequestBody

To send a single MMS or messages with the same content to multiple recipients, pass as the method param a single `MmsMessage` object with the properties of this message. To send multiple messages with different content at the same time, pass as the method param an `array` of `MmsMessage` objects with the properties of each message.


## Supported Types

### `components.MmsMessage`

```typescript
const value: components.MmsMessage = {
  recipients: [
    {
      nr: "+48999999999",
      cid: "my-id-1113",
    },
  ],
  subject: "To jest temat wiadomości",
  message: "To jest treść wiadomości",
  attachments: [
    "<file_body in base64 format>",
  ],
};
```

### `components.MmsMessage[]`

```typescript
const value: components.MmsMessage[] = [
  {
    recipients: {
      nr: "+48999999999",
      cid: "my-id-1113",
    },
    subject: "To jest temat wiadomości",
    message: "To jest treść wiadomości",
    attachments: [
      "<file_body in base64 format>",
    ],
  },
];
```

