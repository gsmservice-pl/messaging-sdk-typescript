# AddSenderResponse

## Example Usage

```typescript
import { AddSenderResponse } from "@gsmservice-pl/messaging-sdk-typescript/models/operations";

let value: AddSenderResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
  },
  result: {
    sender: "Bramka SMS",
    status: "Active",
    isDefault: true,
  },
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `headers`                                              | Record<string, *string*[]>                             | :heavy_check_mark:                                     | N/A                                                    |
| `result`                                               | [components.Sender](../../models/components/sender.md) | :heavy_check_mark:                                     | N/A                                                    |