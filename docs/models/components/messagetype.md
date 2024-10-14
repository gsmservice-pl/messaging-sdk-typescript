# MessageType

Message type (SmsType.SmsPro -> SMS PRO, SmsType.SmsEco -> SMS ECO, SmsType.SmsTwoWay ->SMS 2WAY, SmsType.Mms -> MMS)

## Example Usage

```typescript
import { MessageType } from "@gsmservice-pl/messaging-sdk-typescript/models/components";

let value: MessageType = 1;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<number>` branded type.

```typescript
1 | 3 | 4 | 10 | Unrecognized<number>
```