# SendSmsResponse

## Example Usage

```typescript
import { SendSmsResponse } from "@gsmservice-pl/messaging-sdk-typescript/models/operations";

let value: SendSmsResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [],
  },
  result: [],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `headers`                                                  | Record<string, *string*[]>                                 | :heavy_check_mark:                                         | N/A                                                        |
| `result`                                                   | [components.Message](../../models/components/message.md)[] | :heavy_check_mark:                                         | N/A                                                        |