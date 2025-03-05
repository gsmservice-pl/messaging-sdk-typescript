<!-- Start SDK Example Usage [usage] -->
### Sending single SMS Message

This example demonstrates simple sending SMS message to a single recipient:

```typescript
import { Client } from "@gsmservice-pl/messaging-sdk-typescript";

const client = new Client({
  bearer: "<YOUR API ACCESS TOKEN>",
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
      unicode: false,
      flash: false,
      date: null,
    },
  ]);

  // Handle the result
  console.log(result);
}

run();

```

### Sending single MMS Message

This example demonstrates simple sending MMS message to a single recipient:

```typescript
import { Client } from "@gsmservice-pl/messaging-sdk-typescript";

const client = new Client({
  bearer: "<YOUR API ACCESS TOKEN>",
});

async function run() {
  const result = await client.outgoing.mms.send([
    {
      recipients: [
        "+48999999999",
      ],
      subject: "To jest temat wiadomości",
      message: "To jest treść wiadomości",
      attachments: [
        "<file_body in base64 format>",
      ],
      date: null,
    },
  ]);

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->