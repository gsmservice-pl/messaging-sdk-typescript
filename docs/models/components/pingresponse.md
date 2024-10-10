# PingResponse

'Ping' response object

## Example Usage

```typescript
import { PingResponse } from "@gsmservice-pl/messaging-sdk-typescript/models/components";

let value: PingResponse = {
  status: "OK",
  version: "1.0",
  sandbox: false,
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `status`                                                       | *string*                                                       | :heavy_minus_sign:                                             | API service status: OK - API available, ERR - API unavailable  | OK                                                             |
| `version`                                                      | *string*                                                       | :heavy_minus_sign:                                             | Current API Version                                            | 1.0                                                            |
| `sandbox`                                                      | *boolean*                                                      | :heavy_minus_sign:                                             | Was the connection established with the test system (SANDBOX)? | false                                                          |