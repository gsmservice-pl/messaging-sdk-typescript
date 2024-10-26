# Attachments

Attachments for the message. You can pass here images, audio and video files bodies. To set one attachment please pass a `string` with attachment body encoded with `base64`. To set multiple attachments - pass an `array` of `strings` with attachment bodies encoded with `base64`. Max 3 attachments per message.


## Supported Types

### `string`

```typescript
const value: string = "<file_body in base64 format>";
```

### `string[]`

```typescript
const value: string[] = [
  "<file_body in base64 format>",
];
```

