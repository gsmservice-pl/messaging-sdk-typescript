# ListIncomingMessagesResponse

## Example Usage

```typescript
import { ListIncomingMessagesResponse } from "@gsmservice-pl/messaging-sdk-typescript/models/operations";

let value: ListIncomingMessagesResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: [],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `headers`                                                                  | Record<string, *string*[]>                                                 | :heavy_check_mark:                                                         | N/A                                                                        |
| `result`                                                                   | [components.IncomingMessage](../../models/components/incomingmessage.md)[] | :heavy_check_mark:                                                         | N/A                                                                        |