# CancelMessagesRequest

## Example Usage

```typescript
import { CancelMessagesRequest } from "@gsmservice-pl/messaging-sdk-typescript/models/operations";

let value: CancelMessagesRequest = {
  ids: [
    43456,
  ],
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `ids`                                                                                                        | *number*[]                                                                                                   | :heavy_check_mark:                                                                                           | Array of Message IDs assigned by the system. The system will accept a maximum of 50 identifiers in one call. |