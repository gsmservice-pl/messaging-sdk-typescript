# RemoveIncomingMessagesResponse

## Example Usage

```typescript
import { RemoveIncomingMessagesResponse } from "@gsmservice-pl/messaging-sdk-typescript/models/operations";

let value: RemoveIncomingMessagesResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: [],
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `headers`                                                                                | Record<string, *string*[]>                                                               | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `result`                                                                                 | [components.RemovedIncomingMessage](../../models/components/removedincomingmessage.md)[] | :heavy_check_mark:                                                                       | N/A                                                                                      |