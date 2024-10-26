# GetMmsPriceResponse

## Example Usage

```typescript
import { GetMmsPriceResponse } from "@gsmservice-pl/messaging-sdk-typescript/models/operations";

let value: GetMmsPriceResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: [
    {
      error: null,
      cid: "custom-id-A44445T",
      type: 1,
      recipient: "+48999999999",
      sender: "Bramka SMS",
      parts: 1,
      unicode: true,
      flash: false,
      price: 0.16,
    },
  ],
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `headers`                                              | Record<string, *string*[]>                             | :heavy_check_mark:                                     | N/A                                                    |
| `result`                                               | [components.Price](../../models/components/price.md)[] | :heavy_check_mark:                                     | N/A                                                    |