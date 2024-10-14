# Client SDK

## Overview

Messaging Gateway GSMService.pl: *Client* class is used to initialize SDK environment.

Please initialize it this way:

```typescript
import { Client } from "@gsmservice-pl/messaging-sdk-typescript";

const client = new Client({
     bearer: process.env["GATEWAY_API_BEARER"] ?? "",
});
```

If you want to use a Sandbox test system please initialize it as follows:

```typescript

const client = new Client({     
     bearer: process.env["GATEWAY_API_BEARER"] ?? "",
});
``` $sdk = Gateway\Client::builder()->setServer(Gateway\Client::SERVER_SANDBOX)->setSecurity($security)->build();
```