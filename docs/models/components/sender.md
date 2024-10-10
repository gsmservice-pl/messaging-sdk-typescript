# Sender

An object with the properties of the message sender

## Example Usage

```typescript
import { Sender } from "gsmservice-messaging-sdk/models/components";

let value: Sender = {
  sender: "Bramka SMS",
  status: "Active",
  isDefault: true,
};
```

## Fields

| Field                  | Type                   | Required               | Description            | Example                |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `sender`               | *string*               | :heavy_check_mark:     | Message sender name    | Bramka SMS             |
| `status`               | *string*               | :heavy_check_mark:     | Sender name status     | Active                 |
| `isDefault`            | *boolean*              | :heavy_check_mark:     | Is the sender default? | true                   |