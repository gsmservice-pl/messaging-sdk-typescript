# RemovedIncomingMessage

An object containing information about results of removing single incoming message

## Example Usage

```typescript
import { RemovedIncomingMessage } from "@gsmservice-pl/messaging-sdk-typescript/models/components";

let value: RemovedIncomingMessage = {
  id: 62456,
  status: 400,
  error: {
    type: "https://api.szybkisms.pl/problems/invalid-body-property-format/",
    status: 400,
    title: "Invalid Request Body Format",
    detail: "The request body is missing or malformed.",
    code: "400-1",
    instance: "/rest/messages/sms",
  },
};
```

## Fields

| Field                                                                                                                                                                                                  | Type                                                                                                                                                                                                   | Required                                                                                                                                                                                               | Description                                                                                                                                                                                            | Example                                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                                                                   | *number*                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                     | Incoming Message ID                                                                                                                                                                                    | 62456                                                                                                                                                                                                  |
| `status`                                                                                                                                                                                               | *number*                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                     | Status of removing (204 if removed successfully or error status code)                                                                                                                                  | 400                                                                                                                                                                                                    |
| `error`                                                                                                                                                                                                | [components.ErrorResponse](../../models/components/errorresponse.md)                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                     | RFC 9457 Problem Details. See the [error catalog](https://api.szybkisms.pl/problems/) for problem types and recovery steps.<br/><br/>[Error catalog and operation results](https://api.szybkisms.pl/problems/) |                                                                                                                                                                                                        |