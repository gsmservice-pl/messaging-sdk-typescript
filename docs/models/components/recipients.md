# Recipients

The recipient number or multiple recipients numbers of single message. To set one recipient, simply pass here a `string` with his phone number. To set multiple recipients, pass here a simple `array` of `string`. Optionally you can also set custom id (user identifier) for each message - pass `PhoneNumberWithCid` object (in case of single recipient) or `Array` of `PhoneNumberWithCid` (in case of multiple recipients).


## Supported Types

### `string`

```typescript
const value: string = "+48999999999";
```

### `string[]`

```typescript
const value: string[] = [
  "+48999999999",
];
```

### `components.PhoneNumberWithCid`

```typescript
const value: components.PhoneNumberWithCid = {
  nr: "+48999999999",
  cid: "my-id-1113",
};
```

### `components.PhoneNumberWithCid[]`

```typescript
const value: components.PhoneNumberWithCid[] = [
  {
    nr: "+48999999999",
    cid: "my-id-1113",
  },
];
```

