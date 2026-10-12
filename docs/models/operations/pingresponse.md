# PingResponse

## Example Usage

```typescript
import { PingResponse } from "@gsmservice-pl/messaging-sdk-typescript/models/operations";

let value: PingResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key2": [
      "<value 1>",
    ],
  },
  result: {
    status: "OK",
    version: "1.0",
    sandbox: false,
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `headers`                                                          | Record<string, *string*[]>                                         | :heavy_check_mark:                                                 | N/A                                                                |
| `result`                                                           | [components.PingResponse](../../models/components/pingresponse.md) | :heavy_check_mark:                                                 | N/A                                                                |