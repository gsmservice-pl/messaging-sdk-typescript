# GetMessagesRequest

## Example Usage

```typescript
import { GetMessagesRequest } from "gsmservice-messaging-sdk/models/operations";

let value: GetMessagesRequest = {
  ids: [
    43456,
  ],
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `ids`                                                                                                                    | *number*[]                                                                                                               | :heavy_check_mark:                                                                                                       | Message IDs assigned by the system (separated by comma). The system will accept a maximum of 50 identifiers in one call. |