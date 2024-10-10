# ListMessagesRequest

## Example Usage

```typescript
import { ListMessagesRequest } from "@gsmservice-pl/messaging-sdk-typescript/models/operations";

let value: ListMessagesRequest = {
  page: 1,
  limit: 10,
};
```

## Fields

| Field                         | Type                          | Required                      | Description                   | Example                       |
| ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- |
| `page`                        | *number*                      | :heavy_minus_sign:            | Page number of results        | 1                             |
| `limit`                       | *number*                      | :heavy_minus_sign:            | Number of results on one page | 10                            |