<!-- Start SDK Example Usage [usage] -->
```typescript
import { Client } from "gsmservice-messaging-sdk";

const client = new Client({
  bearer: process.env["GATEWAY_API_TOKEN_BEARER"] ?? "",
});

async function run() {
  const result = await client.outgoing.sms.send([
    {
      recipients: [
        "+48999999999",
      ],
      message: "To jest treść wiadomości",
      sender: "Bramka SMS",
      type: 1,
      unicode: true,
      flash: false,
      date: null,
    },
  ]);

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->