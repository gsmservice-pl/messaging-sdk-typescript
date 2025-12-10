# RemovedIncomingMessage

An object containing information about results of removing single incoming message

## Example Usage

```typescript
import { RemovedIncomingMessage } from "@gsmservice-pl/messaging-sdk-typescript/models/components";

let value: RemovedIncomingMessage = {
  id: 62456,
  status: 400,
  error: {
    type:
      "https://problems-registry.smartbear.com/invalid-body-property-format",
    status: 400,
    title: "Invalid Body property format",
    detail: "The request body contains a malformed property",
    code: "400-21",
    instance: "/rest/messages/sms",
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `id`                                                                               | *number*                                                                           | :heavy_minus_sign:                                                                 | Incoming Message ID                                                                | 62456                                                                              |
| `status`                                                                           | *number*                                                                           | :heavy_minus_sign:                                                                 | Status of removing (204 if removed successfully or error status code)              | 400                                                                                |
| `error`                                                                            | [components.ErrorResponse](../../models/components/errorresponse.md)               | :heavy_minus_sign:                                                                 | An object that complies with RFC 9457 containing information about a request error |                                                                                    |