# CancelledMessage

An object containing information about results of cancelling single message

## Example Usage

```typescript
import { CancelledMessage } from "@gsmservice-pl/messaging-sdk-typescript/models/components";

let value: CancelledMessage = {
  id: 43456,
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
| `id`                                                                               | *number*                                                                           | :heavy_minus_sign:                                                                 | Message ID                                                                         | 43456                                                                              |
| `status`                                                                           | *number*                                                                           | :heavy_minus_sign:                                                                 | Status of cancellation (204 if cancelled successfully or error status code)        | 400                                                                                |
| `error`                                                                            | [components.ErrorResponse](../../models/components/errorresponse.md)               | :heavy_minus_sign:                                                                 | An object that complies with RFC 9457 containing information about a request error |                                                                                    |