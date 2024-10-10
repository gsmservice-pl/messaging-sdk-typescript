# MessageType

Message type according to the table:
    
|type|Description|
|----|-----------|
|  1 | SMS PRO   |
|  3 | SMS ECO   |
|  4 | SMS 2WAY  |
| 10 | MMS       |

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