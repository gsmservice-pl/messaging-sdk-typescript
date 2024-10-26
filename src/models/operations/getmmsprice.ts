/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

/**
 * To check the price of a single message or messages with the same content to multiple recipients, pass a single `MmsMessage` object with the properties of this message. To check the price of multiple messages with different content at the same time, pass as method param an `array` of `MmsMessage` objects with the properties of each message.
 */
export type GetMmsPriceRequestBody =
  | components.MmsMessage
  | Array<components.MmsMessage>;

export type GetMmsPriceResponse = {
  headers: { [k: string]: Array<string> };
  result: Array<components.Price>;
};

/** @internal */
export const GetMmsPriceRequestBody$inboundSchema: z.ZodType<
  GetMmsPriceRequestBody,
  z.ZodTypeDef,
  unknown
> = z.union([
  components.MmsMessage$inboundSchema,
  z.array(components.MmsMessage$inboundSchema),
]);

/** @internal */
export type GetMmsPriceRequestBody$Outbound =
  | components.MmsMessage$Outbound
  | Array<components.MmsMessage$Outbound>;

/** @internal */
export const GetMmsPriceRequestBody$outboundSchema: z.ZodType<
  GetMmsPriceRequestBody$Outbound,
  z.ZodTypeDef,
  GetMmsPriceRequestBody
> = z.union([
  components.MmsMessage$outboundSchema,
  z.array(components.MmsMessage$outboundSchema),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetMmsPriceRequestBody$ {
  /** @deprecated use `GetMmsPriceRequestBody$inboundSchema` instead. */
  export const inboundSchema = GetMmsPriceRequestBody$inboundSchema;
  /** @deprecated use `GetMmsPriceRequestBody$outboundSchema` instead. */
  export const outboundSchema = GetMmsPriceRequestBody$outboundSchema;
  /** @deprecated use `GetMmsPriceRequestBody$Outbound` instead. */
  export type Outbound = GetMmsPriceRequestBody$Outbound;
}

/** @internal */
export const GetMmsPriceResponse$inboundSchema: z.ZodType<
  GetMmsPriceResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Headers: z.record(z.array(z.string())),
  Result: z.array(components.Price$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "Headers": "headers",
    "Result": "result",
  });
});

/** @internal */
export type GetMmsPriceResponse$Outbound = {
  Headers: { [k: string]: Array<string> };
  Result: Array<components.Price$Outbound>;
};

/** @internal */
export const GetMmsPriceResponse$outboundSchema: z.ZodType<
  GetMmsPriceResponse$Outbound,
  z.ZodTypeDef,
  GetMmsPriceResponse
> = z.object({
  headers: z.record(z.array(z.string())),
  result: z.array(components.Price$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    headers: "Headers",
    result: "Result",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetMmsPriceResponse$ {
  /** @deprecated use `GetMmsPriceResponse$inboundSchema` instead. */
  export const inboundSchema = GetMmsPriceResponse$inboundSchema;
  /** @deprecated use `GetMmsPriceResponse$outboundSchema` instead. */
  export const outboundSchema = GetMmsPriceResponse$outboundSchema;
  /** @deprecated use `GetMmsPriceResponse$Outbound` instead. */
  export type Outbound = GetMmsPriceResponse$Outbound;
}
