# SenderInput

An object with the properties of the message sender

## Example Usage

```typescript
import { SenderInput } from "@gsmservice-pl/messaging-sdk-typescript/models/components";

let value: SenderInput = {
  sender: "Bramka SMS",
  description:
    "This is our company name. It contains our registered trademark.",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `sender`                                                                             | *string*                                                                             | :heavy_check_mark:                                                                   | Message sender name                                                                  | Bramka SMS                                                                           |
| `description`                                                                        | *string*                                                                             | :heavy_check_mark:                                                                   | Description of the purpose of the sender name (required when adding new sender name) | This is our company name. It contains our registered trademark.                      |