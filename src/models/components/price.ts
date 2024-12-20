/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  MessageType,
  MessageType$inboundSchema,
  MessageType$outboundSchema,
} from "./messagetype.js";

/**
 * An object with the properties and price of a single message
 */
export type Price = {
  /**
   * Information about a possible error
   */
  error?: string | null | undefined;
  /**
   * Custom message ID assigned by the User
   */
  cid?: string | null | undefined;
  /**
   * Message type (SmsType.SmsPro -> SMS PRO, SmsType.SmsEco -> SMS ECO, SmsType.SmsTwoWay ->SMS 2WAY, SmsType.Mms -> MMS)
   */
  type?: MessageType | undefined;
  /**
   * A telephone number in international format (with a plus sign and the country code at the beginning, e.g. +48 for Poland)
   */
  recipient?: string | undefined;
  /**
   * Message sender name
   */
  sender?: string | null | undefined;
  /**
   * The count of parts that message consists of
   */
  parts?: number | null | undefined;
  /**
   * Did the message contain special characters, e.g. Polish diacritics?
   */
  unicode?: boolean | undefined;
  /**
   * Was the message sent with class 0 (FLASH)?
   */
  flash?: boolean | undefined;
  /**
   * The price of message (in PLN)
   */
  price?: number | undefined;
};

/** @internal */
export const Price$inboundSchema: z.ZodType<Price, z.ZodTypeDef, unknown> = z
  .object({
    error: z.nullable(z.string()).optional(),
    cid: z.nullable(z.string()).optional(),
    type: MessageType$inboundSchema.optional(),
    recipient: z.string().optional(),
    sender: z.nullable(z.string()).optional(),
    parts: z.nullable(z.number().int()).optional(),
    unicode: z.boolean().optional(),
    flash: z.boolean().optional(),
    price: z.number().optional(),
  });

/** @internal */
export type Price$Outbound = {
  error?: string | null | undefined;
  cid?: string | null | undefined;
  type?: number | undefined;
  recipient?: string | undefined;
  sender?: string | null | undefined;
  parts?: number | null | undefined;
  unicode?: boolean | undefined;
  flash?: boolean | undefined;
  price?: number | undefined;
};

/** @internal */
export const Price$outboundSchema: z.ZodType<
  Price$Outbound,
  z.ZodTypeDef,
  Price
> = z.object({
  error: z.nullable(z.string()).optional(),
  cid: z.nullable(z.string()).optional(),
  type: MessageType$outboundSchema.optional(),
  recipient: z.string().optional(),
  sender: z.nullable(z.string()).optional(),
  parts: z.nullable(z.number().int()).optional(),
  unicode: z.boolean().optional(),
  flash: z.boolean().optional(),
  price: z.number().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Price$ {
  /** @deprecated use `Price$inboundSchema` instead. */
  export const inboundSchema = Price$inboundSchema;
  /** @deprecated use `Price$outboundSchema` instead. */
  export const outboundSchema = Price$outboundSchema;
  /** @deprecated use `Price$Outbound` instead. */
  export type Outbound = Price$Outbound;
}
