# ListSendersResponse

## Example Usage

```typescript
import { ListSendersResponse } from "@gsmservice-pl/messaging-sdk-typescript/models/operations";

let value: ListSendersResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: [],
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `headers`                                                | Record<string, *string*[]>                               | :heavy_check_mark:                                       | N/A                                                      |
| `result`                                                 | [components.Sender](../../models/components/sender.md)[] | :heavy_check_mark:                                       | N/A                                                      |